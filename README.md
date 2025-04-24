# Facebook Data Compliance Endpoints

This repository contains the necessary endpoints and handler functions for complying with Facebook's data deletion and deauthorization requirements.

## Files

- `deauthorize-callback.html` - HTML page that receives Facebook's deauthorization callback
- `deauth-handler.js` - JavaScript handler for processing the deauthorization callback
- `data-deletion.html` - Form for users to request deletion of their data
- `data-deletion-handler.js` - JavaScript handler for processing data deletion requests
- `fb-compliance-handlers.js` - Standalone functions for handling deauthorization and data deletion

## Integration with Your App

To integrate these endpoints with your Facebook app:

1. Set up these pages on your server where they can be accessed publicly
2. In your Facebook Developer Dashboard:
   - Set the "Deauthorize Callback URL" to the URL of your `deauthorize-callback.html` page
   - Set the "Data Deletion Request URL" to the URL of your `data-deletion.html` page

## Implementation Notes

These are example implementations that demonstrate the flow. For a production application, you should:

1. Implement proper security measures to verify signed requests from Facebook
2. Connect to your actual database or storage system to delete user data
3. Log and track deletion requests for compliance purposes

## Facebook Documentation

- [Data Deletion Request](https://developers.facebook.com/docs/development/create-an-app/app-dashboard/data-deletion-callback)
- [Deauthorize Callback](https://developers.facebook.com/docs/facebook-login/auth-vs-data) 