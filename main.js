const calculateButton = document.getElementById('calculate');

const subtotal = document.getElementById('amount');

const tipPercent = document.getElementById('percent');
const numPeople = document.getElementById('numpeople');
const tipTotal = document.getElementById('tip-total');
const totalTotal = document.getElementById('total-total');
// const tipPerPerson = document.getElementById('tip-pp');
const totalPerPerson = document.getElementById('total-pp');

calculateButton.onclick = function() {
    const subtotalValue = Number(subtotal.value);
    const tipPercentValue = Number(tipPercent.value);
    const numPeopleValue = Number(numPeople.value);
    const tipTotalValue = Number(tipTotal.value);
    const totalTotalValue = Number(totalTotal.value);
    // const tipPerPersonValue = Number(tipPerPerson.value);
    const totalPerPersonValue = Number(totalPerPerson.value);

    tipTotal.innerHTML = "$" + (subtotalValue * (tipPercentValue/100)).toFixed(2);
    totalTotal.innerHTML = "$" + (subtotalValue + subtotalValue * (tipPercentValue/100)).toFixed(2);

    // tipPerPerson.innerHTML = "$" + ((subtotalValue * (tipPercentValue/100)) / numPeopleValue).toFixed(2);
    totalPerPerson.innerHTML = "$" + ((subtotalValue + subtotalValue * (tipPercentValue/100)) / numPeopleValue).toFixed(2);

}
