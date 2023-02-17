document.getElementById('generate-pin').addEventListener('click',function(){
    const success = document.getElementById('pin-success');
    const failure = document.getElementById('pin-failure');
    failure.style.display='none';
    success.style.display='none';


    const typedPin = document.getElementById('typed-numbers');
    typedPin.value = '';




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
    const tryleft = document.getElementById('try-left');
    const tryleftString = tryleft.innerText;
    const tryleftNumber = parseFloat(tryleftString);

    if(tryleftNumber > 0){
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
            const tryleftNumberAfter = tryleftNumber - 1;
            tryleft.innerText = tryleftNumberAfter;
        }
   
    
    }
    else{
        
        alert('No more try left');
        

    }
    
    

})
