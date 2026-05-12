document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('themeToggle');

  
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  toggleButton.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      
      document.documentElement.setAttribute('data-theme', newTheme);
      
      localStorage.setItem('theme', newTheme);
  });
});
