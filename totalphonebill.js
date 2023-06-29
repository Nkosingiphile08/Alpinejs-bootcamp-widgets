function totalPhoneBill() {
    const billList = document.getElementById("billList").value;
    let bill = billList.split(', ');
    let totalBill = 0;
  
    for (let i=0; i<bill.length; i++){
      if (bill[i] === 'call') {
        totalBill += 2.75; 
      } else if (bill[i] === 'sms') {
        totalBill += 0.65; 
      }
    } 
    document.getElementById("totalBill").innerHTML = 'R' + totalBill.toFixed(2);
  }
