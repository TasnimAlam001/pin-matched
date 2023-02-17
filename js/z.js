document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    const pinField = document.getElementById('display-pin');
    pinField.value = pin;    
})
document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const valueField = document.getElementById('typed-numbers');
    const priviousTyped = valueField.value;
    //valueField.value = + value;
    if(isNaN(number)){
        if(number === 'C'){
            valueField.value = ' ';
        }
        else if(number === '<'){
            const x = priviousTyped.split('');
            x.pop();
            const z = x.join('');
            valueField.value = z;           
        }
    }
    else{
        valueField.value = priviousTyped + number;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const genaratePin = getStringFromInput('display-pin');
    const typedPin = getStringFromInput('typed-numbers');
    console.log(genaratePin,typedPin);
    const success = document.getElementById('pin-success');
    const failure = document.getElementById('pin-failure');
    if(genaratePin === typedPin){       
        success.style.display='block';
        failure.style.display ='none';
        const valueField = document.getElementById('typed-numbers');
        valueField.value ='';
        const pinField = document.getElementById('display-pin');
        pinField.value = ''; 
    }
    else{
        failure.style.display='block';
        success.style.display='none';
    }
})