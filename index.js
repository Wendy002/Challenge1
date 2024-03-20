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



/*checkin.0.color = none
status.0.style.color = STATUS_MAP.status.color
reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'
*/

//---------Controls for button1-------
checkinBtnBook1.color = none;
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
console.log(reserveBtnBook1.disabled);