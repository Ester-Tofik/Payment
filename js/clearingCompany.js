class ClearingCompany extends Payment {
    constructor(dayOfPayment, sum, description, transactionStatus, formOfpayment, customer,clearingNumber) {
        super(dayOfPayment, sum, description, transactionStatus, formOfpayment, customer, clearingNumber);
        this.clearingNumber = clearingNumber;
    }

    savePayment() {
        console.log('ClearingCompany');
    }
}

