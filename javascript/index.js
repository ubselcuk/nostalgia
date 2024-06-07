function includeHTML() {
    const elements = document.querySelectorAll('[include-html]');
    elements.forEach((el) => {
      const file = el.getAttribute('include-html');
      if (file) {
        fetch(file)
          .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
          })
          .then(data => {
            el.innerHTML = data;
            el.removeAttribute('include-html');
            includeHTML(); // Recursive call to handle nested includes if needed
          })
          .catch(error => {
            el.innerHTML = 'Error loading content.';
            console.error('Error fetching file:', error);
          });
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', includeHTML);
  