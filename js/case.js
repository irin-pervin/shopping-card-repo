// document.getElementById("btn-case-plus").addEventListener("click", function(){
//     const caseNumberField = document.getElementById("case-number-field");
//     const caseNumberFieldString = caseNumberField.value;
//     const PreviousCaseNumberFieldNumber = parseFloat(caseNumberFieldString);
//     const NewCaseNumberFieldNumber = PreviousCaseNumberFieldNumber + 1;
//     caseNumberField.value = NewCaseNumberFieldNumber;
    
// })

// document.getElementById("btn-case-minus").addEventListener("click",function(){
//     const caseNumberField = document.getElementById("case-number-field");
//     const caseNumberFieldString = caseNumberField.value;
//     const PreviousCaseNumberFieldNumber = parseFloat(caseNumberFieldString);
//     const NewCaseNumberFieldNumber = PreviousCaseNumberFieldNumber - 1;
//     caseNumberField.value = NewCaseNumberFieldNumber;
   
// })


function updateCaseNumber (isIncrease){
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberFieldString = caseNumberField.value;
    const PreviousCaseNumberFieldNumber = parseFloat(caseNumberFieldString);


    let NewCaseNumberFieldNumber;
    

    if(isIncrease === true) {
        NewCaseNumberFieldNumber = PreviousCaseNumberFieldNumber + 1;
    }

    else {
        NewCaseNumberFieldNumber = PreviousCaseNumberFieldNumber - 1;
    }

    caseNumberField.value = NewCaseNumberFieldNumber;

    return NewCaseNumberFieldNumber;
}

function updateCaseTotalPrice (NewCaseNumberFieldNumber){
    const caseTotalPrice = NewCaseNumberFieldNumber * 59;
   const caseTotalElement = document.getElementById("case-total");
   caseTotalElement.innerText = caseTotalPrice;

}
 
document.getElementById("btn-case-plus").addEventListener("click", function(){
   const NewCaseNumberFieldNumber = updateCaseNumber(true);

   updateCaseTotalPrice (NewCaseNumberFieldNumber)
   calculateSubTotal ();
})


document.getElementById("btn-case-minus").addEventListener("click",function(){
    const NewCaseNumberFieldNumber = updateCaseNumber(false);
    updateCaseTotalPrice (NewCaseNumberFieldNumber);
    calculateSubTotal ()

})



