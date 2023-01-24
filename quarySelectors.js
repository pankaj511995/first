// let item=document.querySelector('.item-list:nth-child(1)')
let item=document.querySelectorAll('.item-list')
item[1].style.background='green'
console.log(item[1])
let odd=document.querySelectorAll('li:nth-child(odd)')
let even=document.querySelectorAll('li:nth-child(even)')
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='yellow'
    even[i].style.backgroundColor='green'
    
}