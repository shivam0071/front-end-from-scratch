const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let progressCounter = 1;

next.addEventListener('click', () => {
  progressCounter++;
  if(progressCounter >= circles.length){
    progressCounter = circles.length;
  }
  else if(progressCounter <= 1) {
    progressCounter = 1;
  }
  update()
});

prev.addEventListener('click', () => {
  progressCounter--;
  if(progressCounter >= circles.length){
    progressCounter = circles.length;
  }
  else if(progressCounter <= 1) {
    progressCounter = 1;
  }
  update()
});

function update(){
  circles.forEach((circle, idx) => {
    if(idx < progressCounter) {
        // First remove active-animate class from all circles
        circle.classList.remove('active-animate')
        
        // Add active class
        circle.classList.add('active')
        
        // Add animation class only to the current circle
        if(idx === progressCounter - 1) {
            circle.classList.add('active-animate')
            // Remove the animation class after animation completes
            setTimeout(() => {
                circle.classList.remove('active-animate')
            }, 300)
        }
    } else {
        circle.classList.remove('active')
    }
})

  const active = document.querySelectorAll('.active');
  progress.style.width = ((active.length - 1) / (circles.length - 1)) * 100 + '%'

  if(progressCounter == 1){
    prev.disabled = true;
  }
  else if(progressCounter == circles.length){
    next.disabled = true;
  }
  else{
    prev.disabled = false;
    next.disabled = false;
  }
}