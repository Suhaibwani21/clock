const secondhand = document.querySelector('.sec-hand');
const minshand = document.querySelector('.min-hand');
const hourshand = document.querySelector('.hour-hand');
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondhand.style.transform= `rotate(${secondsDegree}deg)`;
    const mins = now.getMinutes();
    const mindegree = ((mins/60)* 360) + 90;
    minshand.style.transform = `rotate(${mindegree}deg)`;
    const hours = now.getHours();
    const hourdegree = ((hours/12)* 360)+90;
    hourshand.style.transform= `rotate(${hourdegree}deg)`;

}
setInterval(setDate, 1000);