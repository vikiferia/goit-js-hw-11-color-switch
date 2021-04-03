
const refs = {
  startBut: document.querySelector('button[data-action="start"]'),
  stopBut: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
}



const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];



const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const timer = {

  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.randomColor = setInterval(() => {
      const min = 0;
      const max = colors.length - 1;
      let i = randomIntegerFromInterval(min, max)
      refs.body.style.background = colors[i];
    }, 1000);
  },

  stop() {
    clearInterval(this.randomColor);
    this.isActive = false;
  }
};

refs.startBut.addEventListener('click', timer.start.bind(timer));
refs.stopBut.addEventListener('click', timer.stop.bind(timer));

