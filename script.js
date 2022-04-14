let icon = document.getElementById('icon_1');


icon.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('form').style.display = 'block';    
})

let x = document.getElementById('x');

x.addEventListener('click',function(e){
    e.preventDefault();
    e.target.parentElement.parentElement.remove();
})

let icon_2 = document.getElementById('icon_2');

icon_2.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('box').style.display = 'flex';
})