function totalPhoneBill(bill) {
    let total = 0
       const phoneBill = bill.split(', ')
       for (i=0;i<phoneBill.length;i++) {
           if (phoneBill[i].startsWith("call")) {
           total += 2.75 }
   
           else if (phoneBill[i].startsWith("sms")) {
           total += 0.65 }
           
           else if (!bill) {
               return "Please enter usage"
           }
   
       } 
   
       return 'R'+total.toFixed(2);
   }
   
   
