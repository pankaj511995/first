const sub=document.querySelector('.submit')
const lab=document.querySelector('.my-form')

sub.style.background='yellow'
sub.addEventListener('click',click);
function click(e){
    console.log('thank you')
}
lab.addEventListener('mouseover',function(){
    console.log('mouse in ')
    // alert('hi')
});
lab.addEventListener('mouseout',function (){
    console.log('mouse out')
    // alert('hi')
});