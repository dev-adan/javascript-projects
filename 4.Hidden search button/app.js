const search = document.querySelector('.search');
const button = document.querySelector('.btn');
const input = document.querySelector('.input');


button.addEventListener('click', () => {

    if(search.classList.contains('active')){
        search.classList.remove('active');

    }else{
         search.classList.add('active');
         input.focus();
    }

   
})



