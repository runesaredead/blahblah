/**
 * Handles deauthorization callbacks from Facebook/Instagram
 * 
 * This script processes the signed_request parameter sent by Facebook
 * when a user deauthorizes the application
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get the signed request from URL or form post
  const urlParams = new URLSearchParams(window.location.search);
  const signedRequest = urlParams.get('signed_request');
  
  if (signedRequest) {
    try {
      // Parse the signed request
      // In a real implementation, you'd verify the signature using your app secret
      // and decode the payload properly
      console.log('Received deauthorization callback with signed request');
      
      // Send the deauthorization info to the extension if possible
      if (chrome && chrome.runtime) {
        chrome.runtime.sendMessage({
          action: 'handleDeauthorization',
          signedRequest: signedRequest
        });
      }
      
      // Log success (this would typically be stored in your server logs)
      console.log('Deauthorization processed successfully');
    } catch (error) {
      console.error('Error processing deauthorization:', error);
    }
  } else {
    console.log('No signed request found, this might be a direct page visit');
  }
}); 