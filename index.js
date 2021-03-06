// Переключатель цветов

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
]

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    bodyPage: document.querySelector("body"),
    isActive: false
}
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let colorBlinking = null;
const changeColor = refs.startBtn.addEventListener("click", () => {
    
    if (refs.isActive === true) {
        return
    }
    
    colorBlinking = setInterval(() => {
        const randomIntegerFromInterval = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
                 }
            refs.bodyPage.style.backgroundColor = colors[randomIntegerFromInterval(0, (colors.length - 1))];
        console.log('hello,  ', colors[randomIntegerFromInterval(0, (colors.length - 1))])
        refs.isActive = true;
        // console.log();
    }, 1000);    
    return
})

refs.stopBtn.addEventListener("click", () => {
    refs.isActive = false;
    clearInterval(colorBlinking);
    })