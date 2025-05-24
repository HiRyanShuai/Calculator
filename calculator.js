let show = '0';
let operate = '';

const screen = document.querySelector('#screen');
const numbers = document.querySelectorAll('.number > button');
const operators = document.querySelectorAll('.operator > button');
const ac = document.querySelector('#ac');
const back = document.querySelector('#back');

numbers.forEach(b=>b.addEventListener('click',(e)=>{
    if( !(b.id === '.' && show.includes('.')) )
        show += b.id;
    if( show[0] ==='0' && show[1] !== '.')
        show = show[1];
    screen.textContent = show;
}));

ac.addEventListener('click', (e)=>{
    show = '0';
    screen.textContent = show;
});

back.addEventListener('click', (e)=>{
    show = show.slice(0, -1);
    if( show.length === 0) 
        show = '0';
    screen.textContent = show;
});