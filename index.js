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
}

// Edit below line 

//--------BOOK1-----------
const statusBook1 = document.getElementById("book1");
const reserveBtnBook1 = document.querySelector(".reserve");
const checkoutBtnBook1 = document.querySelector(".checkout");
const checkinBtnBook1 = document.querySelector(".checkin");

//--------BOOK2-----------
const statusBook2 = document.getElementById("book2");
const reserveBtnBook2 = document.querySelector(".reserve");
const checkoutBtnBook2 = document.querySelector(".checkout");
const checkinBtnBook2 = document.querySelector(".checkin");

//--------BOOK3-----------
const statusBook3 = document.getElementById("book3");
const reserveBtnBook3 = document.querySelector(".reserve");
const checkoutBtnBook3 = document.querySelector(".checkout");
const checkinBtnBook3 = document.querySelector(".checkin");

//---------Controls for button1--------

checkinBtnBook1.style.color = none;
statusBook1.style.color = STATUS_MAP.statusBook1.color;
reserveBtnBook1.disabled = STATUS_MAP.statusBook1.canReserve ? false : true;
checkoutBtnBook1.disabled = STATUS_MAP.statusBook1.canCheckout ? false : true;
checkinBtnBook1.disabled = STATUS_MAP.statusBook1.canCheckIn ? false : true;

/*checkin.1.color = none
status.1.style.color = STATUS_MAP.status.color
reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'*/
console.log(statusBook1);