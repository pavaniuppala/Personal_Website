
// function bgcolor()
// {
//     document.getElementById("demo").style.background="white";
    
// }
// bg.addEventListener('click',(e) =>{
//     const bg=document.querySelector('.mode');
//     if(bg.classList.contains('mode'))
//     {
//         bg.classList.remove('mode')
//         e.target.innerHTML="Dark Mode"
//         // document.getElementById("lt").innerHTML="Dark Mode";
//     }
//     else{
//         bg.classList.add('dark')
//         e.target.innerHTML="Light Mode"
//     }
// });

var content=document.getElementsByTagName('body')[0];
var darkmode=document.getElementById('dark-change');
darkmode.addEventListener('click',function()
{
    darkmode.classList.toggle('active');
    content.classList.toggle('night');
})