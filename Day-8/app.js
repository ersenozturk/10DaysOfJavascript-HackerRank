const btn = document.querySelector('#btn');
let count = 0;

btn.addEventListener('click',()=>{
    count ++;
    btn.innerHTML = count;
})