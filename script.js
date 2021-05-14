function compute()
{
    /*taking the inputs from the html page */
    var principal = document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var p = document.getElementById("principal");
    /*Validating if the principal amount entered is a positive number */
    if (principal<=0){
        alert('Please enter a positive number');
        p.focus();
        return false;
    }
    var interest=principal*years*rate/100;
    var year=new Date().getFullYear()+parseInt(years);
    var result=document.getElementById("result");
    /*Dispalying the result */
    result.innerHTML="If you deposit <span class='highlight'>"+ principal + "</span><br/>at an interest rate of <span class='highlight'>"+rate+"%</span>."+ "<br/>You will receive an amount of <span class='highlight'>"+interest+"</span>,"+ "<br/>in the year <span class='highlight'>"+year+"</span>"  
}
function updateRate()
{
    /*Updating teh value based on the slider position */
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}   