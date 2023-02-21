function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById("phone-number-field");
    const phoneNumberFieldString = phoneNumberField.value;
    const phoneNumberFieldNumber = parseFloat(phoneNumberFieldString)
    let newPhoneNumber;
    if(isIncrease) {
        newPhoneNumber = phoneNumberFieldNumber + 1;
    }
    else {
        newPhoneNumber = phoneNumberFieldNumber - 1;

    }



    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;

}

function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById("phone-total");
    phoneTotalElement.innerText = phoneTotalPrice;
    
}



document.getElementById("btn-phone-plus").addEventListener("click",function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber)

    // calculate phoneTotalElement 
    calculateSubTotal ()

})








document.getElementById("btn-phone-minus").addEventListener("click", function (){
    const newPhoneNumber =updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber)
    calculateSubTotal ()
})