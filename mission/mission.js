  let selectElm = document.querySelector('select');
  let logo = document.querySelector('img');

  selectElm.addEventListener('change', changeTheme)

  function changeTheme(){
    let current = selectElm.value;
    if (current == 'dark'){
      document.body.classList.add('dark')
      document.body.classList.remove('light')
      logo.src = 'byui-logo_white.png'
    }
    else if (current == 'light'){
      logo.src = 'byui-logo_blue.webp'
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    }

      
  }