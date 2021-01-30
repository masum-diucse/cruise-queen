function handlePriceChange(classType, isIncrease) {
    let ticketQuantity = getInputInNumber(classType);
    if (isIncrease == true) {
        ticketQuantity++;
    }
    if (isIncrease == false && ticketQuantity > 0) {
        ticketQuantity--;
    }
    document.getElementById(classType + '-count').value = ticketQuantity;
    calculateTicketPrice();
}


function getInputInNumber(id) {
    const inputString = document.getElementById(id + '-count').value;
    const inputNumber = parseInt(inputString);
    return inputNumber;
}


function calculateTicketPrice() {
    const subTotal = getInputInNumber('first-class') * 150 + getInputInNumber('economy-class') * 100;
    document.getElementById('sub-total').innerText = subTotal;
    const vat = Math.round(subTotal * .1)
    document.getElementById('vat').innerText = vat;
    const grandTotal = subTotal + vat;
    document.getElementById('grand-total').innerText = grandTotal;
}

function showinfo(firstClassId, economyClassId) {
    const firstClassTicketQuantity = getInputInNumber(firstClassId);
    const economyClassTicketQuantity = getInputInNumber(economyClassId);
    const subTotal = firstClassTicketQuantity * 150 + economyClassTicketQuantity * 100;
    const vat = Math.round(subTotal * .1);
    const grandTotal = subTotal + vat;
    alert("Would you book it?" + "\n\n" +
        "First Class Ticket Quantity: " + firstClassTicketQuantity + "\n" +
        "Economy Class Ticket Quantity: " + economyClassTicketQuantity + "\n" +
        "Total Price(With 10% VAT) : $" + grandTotal);
}