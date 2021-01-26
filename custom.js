const circles = document.querySelectorAll('.circle'),
    trigger = document.querySelector('#trigger'),
    link = document.getElementById('link'),
    name = document.getElementById('name'),
    labelsArray = ['Circle 1', 'Circle 2', 'Circle 3'],
    labelsObject = [
        {
            name: 'Circle 1',
            color: 'red'
        }, 
        {
            name: 'Circle 2',
            color: 'blue'
        }, 
        {
            name: 'Circle 3',
            color: 'green'
        }
    ];

let getLoggedInUser = 'Renny';

console.log(labelsObject);

console.log(circles.length);

circles.forEach(function(elem, index) {
    elem.innerHTML = labelsArray[index];
});

function triggerButton(){
    // for(let i = 0; i < circles.length; i++) {
    //     console.log(`i: ${i}`);
    //     circles[i].classList.toggle('move-circles');
    // }

    circles.forEach(function(elem, index) {
        elem.classList.toggle('move-circles');
    });
}

trigger.addEventListener('click', triggerButton);