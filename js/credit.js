class Credit extends Payment {

    constructor(dayOfPayment, sum, description, transactionStatus, formOfpayment, customer, creditNumber) {
        super(dayOfPayment, sum, description, transactionStatus, formOfpayment, customer);
        this.creditNumber = creditNumber;
    }

    savePayment() {
        console.log('Credit');
    }
}