/**
 * Google Apps Script for Wedding RSVP Form
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to Google Sheets (sheets.google.com)
 * 2. Create a new spreadsheet named "Wedding RSVP Responses"
 * 3. In Row 1, add these headers (columns A-H):
 *    Timestamp | Name | Phone | Email | Guest Names | Guest Count | Dietary | Message
 * 4. Go to Extensions > Apps Script
 * 5. Delete any code in the editor
 * 6. Copy and paste this entire file
 * 7. Click "Deploy" > "New deployment"
 * 8. Select type: "Web app"
 * 9. Set "Execute as": "Me"
 * 10. Set "Who has access": "Anyone"
 * 11. Click "Deploy" and authorize when prompted
 * 12. Copy the Web app URL
 * 13. Paste the URL in js/main.js where it says RSVP_ENDPOINT
 */

// Configuration
const SHEET_NAME = 'Sheet1'; // Change if your sheet has a different name

/**
 * Handle POST requests from the RSVP form
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);

    // Get the active spreadsheet and sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error('Sheet not found: ' + SHEET_NAME);
    }

    // Prepare the row data
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const rowData = [
      timestamp,
      data.name || '',
      data.phone || '',
      data.email || '',
      data.guestNames || '',
      data.guestCount || 0,
      data.dietary || '',
      data.message || ''
    ];

    // Append the data to the sheet
    sheet.appendRow(rowData);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'RSVP received successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Wedding RSVP endpoint is active'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function - run this to verify the script works
 */
function testAppendRow() {
  const testData = {
    name: 'Test Guest',
    phone: '+91 98765 43210',
    email: 'test@example.com',
    guestNames: 'Test Guest\nGuest Two',
    guestCount: 2,
    dietary: 'Vegetarian',
    message: 'Looking forward to it!'
  };

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);

  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  const rowData = [
    timestamp,
    testData.name,
    testData.phone,
    testData.email,
    testData.guestNames,
    testData.guestCount,
    testData.dietary,
    testData.message
  ];

  sheet.appendRow(rowData);
  Logger.log('Test row added successfully');
}
