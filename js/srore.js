class Store {
    constructor() {
        this.sumOfStore = 0;
        this.payments = [];
    }
}

const store = new Store();

function refund() {
    const amount = document.getElementById('amount').value;
    store.sumOfStore -= amount;
    console.log(store.sumOfStore)
}
function newPayment() {
    document.getElementById('newPayment').style.display = 'block';
}

function newRefund() {
    document.getElementById('newRefund').style.display = 'block';

}

function savePayment() {

    const dayOfPayment = document.getElementById('dayOfPayment').value;
    const sum = document.getElementById('sum').value;
    const description = document.getElementById('description').value;
    const transactionStatus = document.getElementById('transactionStatus').value;
    const formOfpayment = document.getElementById('formOfpayment').value;
    const userName = document.getElementById('userName').value;
    const userPhoneNumber = document.getElementById('userPhoneNumber').value;
    const userId = document.getElementById('userId').value;

    var payment;

    switch (formOfpayment) {
        case '💳credit':
            {
                debugger
                payment = new Credit(dayOfPayment, sum, description, transactionStatus, formOfpayment, userName, userPhoneNumber, userId,"1234");
            } break;
        case '🏢clearingCompany':
            {
                payment = new ClearingCompany(dayOfPayment, sum, description, transactionStatus, formOfpayment, userName, userPhoneNumber, userId, "1234");
            } break;
        default:
            payment = new Payment(dayOfPayment, sum, description, transactionStatus, formOfpayment, userName, userPhoneNumber, userId);
            break;
    }

    payment.savePayment();

    store.payments.push(newPayment);
    store.sumOfStore = store.sumOfStore + Number(sum);
    console.log(store.payments, store.sumOfStore);
}