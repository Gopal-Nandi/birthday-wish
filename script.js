function moveAndBurst() {
    var balloon = document.getElementById('balloon');
    balloon.style.animation = 'move-up 2s forwards';

    // balloon.classList.add('burst-animation');
    
    setTimeout(function() {
      balloon.style.display = 'none';
      window.location.href = 'birthday.html';
    }, 1500); // Change to 2000ms (2s) to match the animation duration
  }

  
// const balloon = document.getElementById('balloon');

// balloon.addEventListener('click', () => {
  
//   // Add burst animation
//   balloon.classList.add('burst-animation');
// });
