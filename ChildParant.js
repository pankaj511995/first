/*parentElement
lastelementchild
lastchild
createchild---
firstelementchild
firstchild
nextsibling
nextelementsibling
previoussibling
previouselementsibling
createelement
setAttribute
createtesxtnode
appendchild
*/
let p=document.querySelector('.my-form')
console.log(p)
console.log(p.parantNode)
console.log(p.lastElementChild)
console.log(p.lastChild)
p.children[0].value='pankaj'
p.children[1].style.color='red'
console.log(p.children[1])
console.log(p.firstElementChild)
console.log(p.firstChild)
console.log(p.nextSibling)
console.log(p.nextElementSibling)
console.log(p.previousSibling)
console.log(p.previousElementSibling)


let Div=document.createElement('div')
Div.className='newClass'
Div.id='newId'
Div.setAttribute('title','Hello new one')
let text=document.createTextNode(' enjoing adding text node ')
Div.appendChild(text)
console.log(Div)
let cont=document.querySelector('.field')
console.log(cont)
let field=document.querySelector('add')
cont.insertBefore(Div,field)
// cont.insertAdjacentElement(Div)