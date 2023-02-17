function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pin2 = pin + '';
    if(pin2.length === 4){
        return pin2;
    }
    else{
        return getPin();
    }
}





function getStringFromInput(id){
    const x = document.getElementById(id);
    const xString = x.value;
    return xString;
}