// https://codepen.io/kumarpankja511995/pen/VwBxZjd
let search=document.querySelector('.submit')
let error=document.querySelector('#error')
// let deleteBtn=document.getElementById('addItem')
let deleteBtn=document.querySelector('#addItem')
// let addItem=document.querySelectorAll('.addItem')
 let name1=document.getElementById('item')
 let last=document.querySelector('#last')
 let phone=document.querySelector('#phone')
let inputItem=document.querySelector('#item')
let addItem=document.getElementById('addItem')
search.addEventListener('click',addItemElement);
deleteBtn.addEventListener('click',removeItem)
let searchItem=document.querySelector('#search-item')
searchItem.addEventListener('keyup',searching)
function addItemElement(e){
    e.preventDefault()
   
    if(name1.value==' ' || last.value==' ' || phone.value==' '){
        error.innerHTML='plese first enter your intem then Submit  '
        // Error.classList.add()
        setTimeout(()=>error.remove(),3000)
    }
    else{
        let li=document.createElement('li')
        li.appendChild(document.createTextNode(`${name1.value} :
         ${last.value} : ${phone.value}`))
        li.className='list'
       
        let deleteB=document.createElement('button')
        deleteB.appendChild(document.createTextNode('X'))
        deleteB.id='delete'
        deleteB.className='delete'
        li.appendChild(deleteB)

        addItem.appendChild(li)
        name1.value=' '
        last.value=' '
        phone.value=' '
    }
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        let li=e.target.parentElement;
        addItem.removeChild(li)
    // console.log('delete')
    }
}
function searching(e){
    let text=e.target.value.toLowerCase()
let item=document.getElementsByTagName('li')
Array.from(item).forEach(function (g){
let name=g.firstChild.textContent;
if(name.toLowerCase().indexOf(text) !=-1){
    g.style.display='block'
    // console.log('yes')
}else{
    g.style.display='none';
    // console.log('no')
}
})
}