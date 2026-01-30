# Google Sheets Integration Setup Guide

This guide will walk you through connecting your contact form to Google Sheets so that all form submissions are automatically saved to a spreadsheet.

## Step 1: Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Greenwood Mobile Mechanic - Contact Form Submissions"
4. In the first row, add these column headers:
   - `Timestamp`
   - `Name`
   - `Phone`
   - `Email`
   - `Year`
   - `Make`
   - `Model`
   - `Issue`

## Step 2: Create a Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the script editor
3. Copy and paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Append a new row with the form data
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.phone,
      data.email,
      data.year,
      data.make,
      data.model,
      data.issue
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data added successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the **Save** icon (💾) and name your project (e.g., "Contact Form Handler")

## Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: Enter something like "Contact Form Webhook"
   - **Execute as**: Select "Me (your email)"
   - **Who has access**: Select "Anyone"
5. Click **Deploy**
6. **Important**: You may need to authorize the script:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" → "Go to [Project Name] (unsafe)"
   - Click "Allow"
7. Copy the **Web app URL** that appears (it will look like `https://script.google.com/macros/s/AKfycby.../exec`)

## Step 4: Update Your App

1. Open `src/App.tsx`
2. Find this line near the top of the `App` component:
   ```typescript
   const GOOGLE_SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with the Web app URL you copied (keep the quotes)
4. Save the file

Example:
```typescript
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycby.../exec'
```

## Step 5: Test It!

1. Fill out the contact form on your website
2. Click "Submit Request"
3. Check your Google Sheet - a new row should appear with the submitted data
4. The timestamp will be in ISO format (you can format it in Google Sheets if needed)

## Troubleshooting

### Form submissions aren't appearing in the sheet

1. **Check the URL**: Make sure you copied the entire Web app URL from the deployment
2. **Check permissions**: Make sure the script is deployed with "Anyone" access
3. **Check the sheet**: Make sure the headers match exactly (case-sensitive)
4. **Redeploy**: Try creating a new deployment with a new version

### Authorization issues

1. Go back to your Apps Script
2. Click **Deploy** → **Manage deployments**
3. Click the pencil icon to edit
4. Create a "New version" and redeploy
5. Make sure to re-authorize if prompted

### Want to test the script directly?

1. In Apps Script, click the **Test deployments** button
2. Click **Copy URL** from the test deployment
3. Use this URL temporarily in your app to test

## Formatting Tips for Google Sheets

Once data is flowing, you can enhance your spreadsheet:

- **Format the timestamp**: Select the Timestamp column → Format → Number → Date time
- **Freeze the header row**: View → Freeze → 1 row
- **Add conditional formatting**: Highlight new submissions or urgent issues
- **Create filters**: Data → Create a filter (makes it easier to search)
- **Auto-resize columns**: Select all → Format → Resize columns → Fit to data

## Privacy & Security Notes

- The `mode: 'no-cors'` setting means you won't get error details in the browser console
- Consider adding data validation to your Google Apps Script to prevent spam
- Never expose sensitive API keys in client-side code
- For production use, consider adding rate limiting or CAPTCHA protection

## Need More Help?

If you encounter issues:
1. Check the Apps Script execution logs: In Apps Script, click **Executions** in the left sidebar
2. Look for error messages in the log
3. Make sure all columns in the sheet match the data being sent
