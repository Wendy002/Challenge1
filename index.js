// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: { 
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
};

// Edit below line 

//--------BOOK1-----------
const statusBook1 = document.querySelector("#book1 > p > .status");
const reserveBtnBook1 = document.querySelector("#book1 > .reserve");
const checkoutBtnBook1 = document.querySelector("#book1 > .checkout");
const checkinBtnBook1 = document.querySelector("#book1 > .checkin");

//--------BOOK2-----------
const statusBook2 = document.querySelector("#book2 > p > .status");
const reserveBtnBook2 = document.querySelector("#book2 > .reserve");
const checkoutBtnBook2 = document.querySelector("#book2 > .checkout");
const checkinBtnBook2 = document.querySelector("#book2 > .checkin");


//--------BOOK3-----------
const statusBook3 = document.querySelector("#book3 > p > .status");
const reserveBtnBook3 = document.querySelector("#book3 > .reserve");
const checkoutBtnBook3 = document.querySelector("#book3 > .checkout");
const checkinBtnBook3 = document.querySelector("#book3 > .checkin");

                              

//---------Controls for book1-------
checkinBtnBook1.style.color = "";
statusBook1.style.color = STATUS_MAP[statusBook1.textContent].color;
reserveBtnBook1.disabled = STATUS_MAP[statusBook1.textContent].canReserve ? false : true;
checkoutBtnBook1.disabled = STATUS_MAP[statusBook1.textContent].canCheckout ? false : true;
checkinBtnBook1.disabled = STATUS_MAP[statusBook1.textContent].canCheckIn ? false : true;

//---------Controls for book2-------
checkinBtnBook2.style.color = "";
statusBook2.style.color = STATUS_MAP[statusBook2.textContent].color;
reserveBtnBook2.disabled = STATUS_MAP[statusBook2.textContent].canReserve ? false : true;
checkoutBtnBook2.disabled = STATUS_MAP[statusBook2.textContent].canCheckout ? false : true;
checkinBtnBook2.disabled = STATUS_MAP[statusBook2.textContent].canCheckIn ? false : true;

//---------Controls for book3-------
checkinBtnBook3.style.color = "";
statusBook3.style.color = STATUS_MAP[statusBook3.textContent].color;
reserveBtnBook3.disabled = STATUS_MAP[statusBook3.textContent].canReserve ? false : true;
checkoutBtnBook3.disabled = STATUS_MAP[statusBook3.textContent].canCheckout ? false : true;
checkinBtnBook3.disabled = STATUS_MAP[statusBook3.textContent].canCheckIn ? false : true;