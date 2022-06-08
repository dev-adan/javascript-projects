// let budget  =  parseInt(prompt('Enter your Budget'));
let budget = 500;
const c = budget;
let id  = 1;


//Event Listener

const submit = document.querySelector('#submit') ;
const remove1 = document.querySelector('.list');
const budgetIncrease = document.querySelector('#budget');
const increase = document.querySelector('#increase');


//Loader
Loaded();
function Loaded(){ 
    submit.addEventListener('click',getData);
    remove1.addEventListener('click',remove);
    budgetIncrease.addEventListener('dblclick',budgetInc)
    increase.addEventListener('click',increaseFunc)
}




//functions

function getData(e){
    
    let name = document.querySelector('#name').value;
    let amount = parseInt(document.querySelector('#amount').value);
    budget = budget - amount;

    if(name && amount || amount === 0){
    insertDate(name,amount,budget);
}
    e.preventDefault();

}


function insertDate(name,amount,budget){

    let li = document.createElement('li');
    id= id + 1;
    li.id = id;
    li.innerHTML  = `${name} <i class='remove' href="#">$ ${amount}</i>`;

    
 if(budget < 1){
        document.getElementById('submit').disabled= true;
        document.querySelector('#message').style.display = 'block'; 
    }


    document.querySelector('#left').innerText= `left: $${budget}`;
   
    let percentage  = budget / c * 100;

    if (percentage >= 75) {
        document.querySelector('#left').style.backgroundColor = '#9fe6a0';
    }else if(percentage >= 35){
        document.querySelector('#left').style.backgroundColor = '#ffd56b';
    }else if(percentage >= 0){
        document.querySelector('#left').style.backgroundColor = '#f55c47';
    }else{
        document.querySelector('#left').style.backgroundColor = '#eec4c4';
    }

   
    addIntoList(li);
}




function addIntoList(li){

    let ul = document.querySelector('#list');

    ul.appendChild(li);

}



function remove(e){
   
    if(e.target.classList.contains('remove')){
       let count = e.target.innerText;
       count = parseInt(count.slice(2));
       
       budget = budget + count;
       document.querySelector('#left').innerText= `left: $${budget + count}`;

       if(budget > 0){
        document.querySelector('#message').style.display = 'none'; 
        document.getElementById('submit').disabled= false;
       }
        e.target.parentElement.remove()
    }

    

    e.preventDefault();
}

function budgetInc(){
   
    document.getElementById('budgetinput').style.display = 'inline';
    document.querySelector('#increase').style.display = 'inline';
    
   

}

function increaseFunc(){
    
    let val =  parseInt(document.getElementById('budgetinput').value);

   
    
    budget = budget + val;


    document.querySelector('#budget').textContent = `Budget: $${budget}`;
    document.querySelector('#left').textContent = `Left: $${budget}`;
    document.getElementById('budgetinput').style.display = 'none';
    document.querySelector('#increase').style.display = 'none';

    if(budget < 1){
        document.getElementById('submit').disabled= true;
        document.querySelector('#message').style.display = 'block'; 
    }else{
        document.getElementById('submit').disabled= false;
        document.querySelector('#message').style.display = 'none'; 

    }
    document.querySelector('#budget').innerText  = `Budget: $${budget}`;

}


document.querySelector('#budget').innerText  = `Budget: $${budget}`;

