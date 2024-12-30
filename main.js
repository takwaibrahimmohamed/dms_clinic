const add_icons = document.querySelector(".add_icons")

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar .nav-link');
    const mainContent = document.getElementById('main-content');
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.toggle');
  
    // Function to load content dynamically
    function loadContent(page) {
      const isLocalFile = window.location.protocol === 'file:';

      // Determine the correct file path
      const filePath = isLocalFile 
        ? `./Dashboard/Dashboard.html` // Direct file access for local use
        : `./${page}/${page}.html`; // Path for server
      fetch(filePath)
        .then(response => {
  
          if (!response.ok) throw new Error('Page not found');
          return response.text();
        })
        .then(html => {
          
          mainContent.innerHTML = html;
        })
        .catch(error => {
      
          mainContent.innerHTML = `<h2>Error</h2><p>${error.message}</p>`;
        });
    }
  
    // Add event listener to links
    links.forEach(link => {
     
      link.addEventListener('click', event => {
        event.preventDefault();
        links.forEach(l =>{
          l.classList.remove('active')
          
        });
        link.classList.add("active")
        const cust_line= document.querySelector(".cust_line")
        cust_line.classList.toggle("show")
        const page = link.getAttribute('data-page');
        loadContent(page);
      });
    });
  
  
    // Toggle the sidebar's collapsed state
  
    toggleButton.addEventListener('click', () => {

      sidebar.classList.toggle('collapsed');

      document.querySelector(".navbar").classList.toggle('collapsed')
      document.querySelector("#main-content").classList.toggle('collapsed')
      document.querySelector(".sidebar_parent").classList.toggle('collapsed')
      document.querySelector(".sider_main_head").classList.toggle('collapsed')
      const img = document.querySelector(".sidebar_heade")
      const logo = document.querySelector(".logo img")
      img.classList.contains("collapsed")?(logo.src = "./images/Logo.svg"):
      (logo.src = "./images/logo1.svg")
      
      
      img.classList.toggle('collapsed')
    
      
    });
    // Load default content (e.g., home page)
    loadContent('Dashboard');
  });
  add_icons.onclick = ()=>{
    document.querySelector(".adding").classList.toggle("active")
  }