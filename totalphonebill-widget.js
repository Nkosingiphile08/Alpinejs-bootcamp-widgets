document.addEventListener('alpine:init', () => {
    
    Alpine.data('totalPhoneBillWidget', function(){

        return {
            statement : '',
            billMessage : '',
            calculateBill() {
               this.billMessage = totalPhoneBill(this.statement);

               setTimeout(() => {
                this.billMessage = '',
                this.statement = ''
               }, 3000);
            }
        }
    });
})