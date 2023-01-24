addItem=document.getElementsByClassName('item-list')
addItem[2].style.background='yellow'
console.log(addItem[1])
for(let i=0;i<addItem.length;i++){
    if(i==2){
        continue;
    }else{
        addItem[i].style.fontWeight = 'bolder';
    }
   
}