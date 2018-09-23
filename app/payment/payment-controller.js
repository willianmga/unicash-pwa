class PaymentController {
    
    constructor() {
        this.paymentTemplate = new PaymentTemplate();
    }
    
    render() {
        this.paymentTemplate.render();
    }

}