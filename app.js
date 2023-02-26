const enter = () => {
    const button = document.querySelector('.button');
    const cover = document.querySelector('.cover')
    button.addEventListener('click',() => {
        
        cover.classList.toggle('toggle');
  
    });
    
  
  }

  enter ();