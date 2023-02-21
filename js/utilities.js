function getTextElementById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotalInNumber = parseInt(phoneTotalString);
    return currentPhoneTotalInNumber;


}
function setTexElementById (elementId,value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}

function calculateSubTotal () {
    // calculate phoneTotalElement 
    const currentPhoneTotal = getTextElementById("phone-total");
    const currentCaseTotal = getTextElementById("case-total");
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    
    setTexElementById ("sub-total",currentSubTotal)

    // calculate tax 
    const taxAmountString =(currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat (taxAmountString);
    setTexElementById ("tax-amount",taxAmount)


    // final amount 
    const finalAmount = currentSubTotal + taxAmount;
    setTexElementById ("final-total",finalAmount)

}