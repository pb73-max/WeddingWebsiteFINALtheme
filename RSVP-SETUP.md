# RSVP Backend Setup Guide

This guide explains how to set up Google Sheets as the backend for the RSVP form.

## Overview

The RSVP system uses:
- **Google Sheets** - to store responses
- **Google Apps Script** - to handle form submissions
- **Frontend JavaScript** - to send data to the script

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **+ Blank** to create a new spreadsheet
3. Name it: `Wedding RSVP Responses`
4. In **Row 1**, add these column headers:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | Name | Phone | Email | Guest Names | Guest Count | Dietary | Message |

5. Format the header row (bold, freeze row)
6. Note the spreadsheet URL for reference

## Step 2: Create Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. This opens the Apps Script editor
3. Delete any existing code in `Code.gs`
4. Copy the entire contents of `google-apps-script.js` from this project
5. Paste it into the Apps Script editor
6. Click **Save** (Ctrl+S)
7. Name the project: `Wedding RSVP Handler`

## Step 3: Test the Script

1. In Apps Script, select `testAppendRow` from the function dropdown
2. Click **Run**
3. If prompted, authorize the script:
   - Click "Review permissions"
   - Select your Google account
   - Click "Advanced" → "Go to Wedding RSVP Handler (unsafe)"
   - Click "Allow"
4. Check your Google Sheet - a test row should appear
5. Delete the test row if desired

## Step 4: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon next to "Select type" → Choose **Web app**
3. Configure:
   - **Description**: `Wedding RSVP v1`
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone`
4. Click **Deploy**
5. **Copy the Web app URL** - it looks like:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

## Step 5: Connect Frontend

1. Open `js/main.js` in this project
2. Find this line near the top:
   ```javascript
   const RSVP_ENDPOINT = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace with your Web app URL:
   ```javascript
   const RSVP_ENDPOINT = 'https://script.google.com/macros/s/AKfycb.../exec';
   ```
4. Save the file

## Step 6: Test the Form

1. Open `index.html` in a browser
2. Fill out the RSVP form with test data
3. Submit the form
4. Check your Google Sheet - the response should appear

## Troubleshooting

### Form submits but no data appears

1. Check the browser console for errors (F12 → Console)
2. Verify the Apps Script URL is correct
3. Make sure the script is deployed with "Anyone" access

### "Authorization required" error

1. Go to Apps Script
2. Run the `testAppendRow` function manually
3. Complete the authorization flow
4. Redeploy the web app

### CORS errors

Google Apps Script should handle CORS automatically. If you see CORS errors:
1. Make sure you're using the `/exec` URL (not `/dev`)
2. Verify "Who has access" is set to "Anyone"

### Data appears but columns are wrong

1. Check that your Sheet headers match exactly:
   `Timestamp | Name | Phone | Email | Guest Names | Guest Count | Dietary | Message`
2. Verify the Apps Script `SHEET_NAME` matches your sheet name

## Updating the Script

If you need to update the Apps Script:

1. Make changes in the Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click the pencil icon on your deployment
4. Change version to **New version**
5. Click **Deploy**

The URL stays the same, but the new code is now live.

## Security Notes

- The form is protected against spam by requiring valid phone numbers
- All data is stored in your personal Google Sheet
- Only you have edit access to the Sheet
- The script only has permission to access this specific Sheet

## Data Format

Each submission creates a row with:

| Field | Example |
|-------|---------|
| Timestamp | 6 Feb 2026, 3:45 pm |
| Name | Prerna Agarwal |
| Phone | +91 98765 43210 |
| Email | prerna@example.com |
| Guest Names | Prerna Agarwal<br>Arpit Bhatia |
| Guest Count | 2 |
| Dietary | Vegetarian |
| Message | Looking forward to celebrating! |
