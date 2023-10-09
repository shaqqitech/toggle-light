const shade = document.getElementById('shade');
const pullChain = document.querySelector('.pull-chain');
let isLightOn = false;
let isPulling = false;

let initialY = 0;
let chainY = 0;

pullChain.addEventListener('mousedown', (event) => {
  isPulling = true;
  initialY = event.clientY;
  chainY = pullChain.offsetTop;
  pullChain.style.transition = 'none'; // Disable transition during dragging
});

document.addEventListener('mousemove', (event) => {
  if (isPulling) {
    const deltaY = event.clientY - initialY;
    pullChain.style.top = chainY + deltaY + 'px';
  }
});

document.addEventListener('mouseup', () => {
  if (isPulling) {
    isPulling = false;
    const deltaY = pullChain.offsetTop - chainY;

    if (deltaY > 10) {
      toggleLight();
    }

    // Smoothly return the chain to its original position
    pullChain.style.transition = 'top 0.3s ease-in-out';
    pullChain.style.top = '220px';
  }
});

function toggleLight() {
  isLightOn = !isLightOn;
  updateLight();
}

function updateLight() {
  if (isLightOn) {
    shade.classList.add('light-on');
  } else {
    shade.classList.remove('light-on');
  }
}

updateLight(); // Initialize the light state
