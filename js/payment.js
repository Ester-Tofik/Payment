
class Payment {

    constructor(dayOfPayment, sum, description, transactionStatus, formOfpayment, customer) {
        this.dayOfPayment = dayOfPayment;
        this.sum = sum;
        this.description = description;
        this.transactionStatus = transactionStatus;
        this.formOfpayment = config.type[formOfpayment];
        this.customer = new Customer(customer);
    }

    savePayment() {
        console.log('Payment');
    }

}

class Customer {
    constructor(name, phoneNumber, id) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.id = id;
    }
}


function Enum(values) {
    for (var i = 0; i < values.length; ++i) {
        this[values[i]] = i;
    }
    return this;
}
var config = {};
config.type = new Enum(["credit", "check", "cash", "clearingCompany"]);



