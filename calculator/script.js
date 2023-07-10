const display=document.getElementById('display');
const buttons=Array.from(document.getElementsByClassName('button'));
buttons.map(button =>{
 button.addEventListener('click',(e)=>{
    switch(e.target.innerText){
        case 'AC':
            display.innerText='';
            break;
        case '←' :
            display.innerText=display.innerText.slice(0,-1);
            break;
        case '=':
            try{
                display.innerText=eval(display.innerText);
                break;
            }
            catch{
                display.innerText="Invalid!";
                break;
            }
        default:
            display.innerText+=e.target.innerText;    
    }
 })
});