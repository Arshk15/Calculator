let string = "";
let display = document.querySelector('input');
let buttons = document.querySelectorAll('.button,.button_operator');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML === '='){
            string = eval(string).toString();
            document.querySelector('input').value = string;
           
        }
        else if(e.target.innerHTML === 'AC'){
            string = "";
        }
        else{
            console.log(e.target) ;
            string = string + e.target.innerHTML;
        }
        display.value = string;
    })
})