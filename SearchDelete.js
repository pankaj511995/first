
let search=document.querySelector('.submit')
let error=document.querySelector('#error')
let deleteBtn=document.getElementById('addItem')
// let deleteBtn=document.querySelectorALl('.delete')
// let addItem=document.querySelectorAll('.addItem')
 let inputItem=document.getElementById('item')
let addItem=document.getElementById('addItem')
search.addEventListener('click',addItemElement);
deleteBtn.addEventListener('click',removeItem)
function addItemElement(e){
    e.preventDefault()
   
    if(inputItem.value==' '){
        error.innerHTML='plese first enter your intem then Submit  '
        // Error.classList.add()
        setTimeout(()=>error.remove(),3000)
    }
    else{
        let li=document.createElement('li')
        li.appendChild(document.createTextNode(inputItem.value))
        li.className='list'
       
        let deleteB=document.createElement('button')
        deleteB.appendChild(document.createTextNode('X'))
        deleteB.id='delete'
        deleteB.className='delete'
        li.appendChild(deleteB)

        addItem.appendChild(li)
        inputItem.value=' '
    }
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        let li=e.target.parentElement;
        addItem.removeChild(li)
    // console.log('delete')
    }
}
