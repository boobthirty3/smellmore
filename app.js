const smellmoreMove = () => {
    const smellmore = document.querySelector('.smellmore');
    
    smellmore.addEventListener('mouseenter',() => {
        
        smellmore.classList.toggle('toggle');

    });
    
    smellmore.addEventListener('mouseleave',() => {
        
        smellmore.classList.toggle('toggle');
    
    });

}

smellmoreMove();