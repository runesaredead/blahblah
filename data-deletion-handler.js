/**
 * Handles data deletion requests for X CrossPost Native
 */

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('data-deletion-form');
  const successMessage = document.getElementById('success-message');
  
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form values
      const userIdentifier = document.getElementById('user-identifier').value;
      const requestDetails = document.getElementById('request-details').value;
      
      // In a real implementation, you would send this data to your backend or use
      // chrome.runtime.sendMessage to communicate with the extension's background script
      // to handle the data deletion request.
      console.log('Data deletion request received for:', userIdentifier);
      
      // Send deletion request to extension if possible
      if (chrome && chrome.runtime) {
        chrome.runtime.sendMessage({
          action: 'handleDataDeletion',
          userIdentifier: userIdentifier,
          requestDetails: requestDetails
        }, function(response) {
          if (response && response.success) {
            showSuccessMessage();
          }
        });
      } else {
        // If we can't communicate with the extension, just show success message
        // In a production environment, you'd want to handle this with a server-side API
        showSuccessMessage();
      }
    });
  }
  
  function showSuccessMessage() {
    // Hide the form
    if (form) {
      form.style.display = 'none';
    }
    
    // Show success message
    if (successMessage) {
      successMessage.style.display = 'block';
    }
  }
}); 