const themeSelector = document.querySelector('#mode-select');

function changeTheme() {
  const currentValue = themeSelector.value;
  const body = document.body;
  const logo = document.querySelector('#logo');

  if (currentValue === 'dark-mode') {
    body.classList.add('dark-mode');
    console.log("Dark mode applied");
    logo.src = 'byui-logo_white.png';
  } else {
    body.classList.remove('dark-mode');
    console.log("Light mode applied");
    logo.src = 'byui-logo_blue.webp';
  }
  
}

themeSelector.addEventListener('change', changeTheme);
