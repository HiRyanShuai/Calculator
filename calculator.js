let show = '0';
let operandA = '';
let operate = '';
let operandB = '';
let last = '';

const screen = document.querySelector('#screen');
const equation = document.querySelector('#equation');
const neg = document.querySelector('#neg');
const numbers = document.querySelectorAll('.number > button');
const operators = document.querySelectorAll('.operator > button');
const ac = document.querySelector('#ac');
const back = document.querySelector('#back');

const ops = {
    add: '+',
    sub: '-',
    mul: '×',
    div: '÷',
}

numbers.forEach(b=>b.addEventListener('click',(e)=>{
    back.disabled = false;
    neg.disabled = false;
    if(operate!==''&&last==='op'){
        show = '0';
    }
    if(last==='eq'){
        show = '0';
        operate = '';
    }
    if( !(b.id === '.' && show.includes('.')) )
        show += b.id;
    if( show[0] ==='0' && show[1] !== '.')
        show = show[1];
    screen.textContent = show;
    equation.textContent = '';
    last = 'mu';
}));

neg.addEventListener('click', (e)=>{
    if(show==='0') return;
    if(show[0]==='-')
        show = show.slice(1);
    else
        show = '-' + show;
    screen.textContent = show;
})

ac.addEventListener('click', (e)=>{
    show = '0';
    operandA = '';
    operate = '';
    operandB = '';
    back.disabled = false;
    neg.disabled = false;
    screen.textContent = show;
    equation.textContent = '';
    last = 'ac';
});

back.addEventListener('click', (e)=>{
    show = show.slice(0, -1);
    if( show.length === 0 ) 
        show = '0';
    screen.textContent = show;
    last = 'ba';
});

const operation = (op, a, b) => {
    switch(op){
        case 'add':
            return (a + b).toString();
        case 'sub':
            return (a - b).toString();
        case 'mul':
            return (a * b).toString();
        case 'div':
            return (a / b).toString();
        default:
            return '0';
    }
}

operators.forEach(b=>b.addEventListener('click', (e)=>{
    switch(b.id){
        case 'equ':
            if(operate!==''){
                if(last!=='eq'){
                    operandB = show;
                }else{
                    operandA = show;
                }
                equation.textContent = `${operandA} ${ops[operate]} ${operandB} =`;
                show = operation(operate, Number.parseFloat(operandA), Number.parseFloat(operandB) );
            }
            screen.textContent = show;
            last = 'eq';
            back.disabled = true;
            neg.disabled = true;
            return;
        default:
            operandA = show;
            operate = b.id;
            last = 'op';
            return;
    }
}));