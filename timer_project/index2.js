var timer = document.getElementById('timer');
var button = document.getElementById('button');
var input = document.getElementById('input')
console.log(timer.textContent);
console.log(button);
console.log(input);

// function x(){
//     console.log("hello");
// }
// var x = 0;

// var interval= setInterval(function() {
//     x++;
//     if(x == 5 )clearInterval(interval)
//     console.log("hello");
// },1000)

button.addEventListener('click',function(){
    var x = input.value;
    console.log(x);
    timer.textContent=x;
   var interval= setInterval(function() {
        x--;
        if(x == 0 )clearInterval(interval);
        console.log(x);
        timer.textContent=x;
    },1000)
});