  const sidebarIcon = document.getElementById('sidebarIcon');
  const closeButton = document.getElementById('closeButton');
  const sidebar = document.getElementById('sidebar');
  
  sidebarIcon.addEventListener('click', () => {
    sidebar.classList.add('active');
  });
  
  closeButton.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
  