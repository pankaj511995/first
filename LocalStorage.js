let first=document.querySelector('#input1')
let second=document.querySelector('#input2')
let submit1=document.querySelector('#submit')
let warnig1=document.querySelector('#warning')
let newItem=document.querySelector('#added-item')
let i=0
submit1.addEventListener('click',addnewitem);
function addnewitem(e){
    
    if(first.value==' ' || second.value==''){
        warnig1.innerHTML='add both blank then enter add item  '
        setTimeout(()=>warnig1.remove(),3000)
    }
    else{
        let li=document.createElement('li')
      
        li.appendChild(document.createTextNode(`${first.value}  : 
        ${second.value}`))
       li.className='added-item'
       
       let itemValue= newItem.appendChild(li)
         localStorage.setItem(`${first.value}`,`${itemValue.innerText}`)
         console.log(itemValue.innerText)
         first.value=' '
         second.value=' '
        
    }

}
localStorage.setItem('pankaj','kr')
localStorage.setItem('pankaj','kr')
localStorage.setItem('abh','banking prep')
localStorage.setItem('raja','pradas')
// localStorage.removeItem('raja')