

function calculateTip(){ 
    var bills = [124,48,268];
    var tips = [];
    var totalBill = [];
    var tip = 0;
    for(i = 0; i < bills.length; i++){
        var bill = bills[i];
        if(bill < 50){
            tip = .2 * bill;
        }
        else if(bill >= 50 && bill <= 200){
            tip = .15*bill;
        }
        else if(bill > 200){
            tip = .10*bill;
        }
    
        tips.push(tip);
        totalBill.push(tip+bill);
    }
    console.log(tips);
    console.log(totalBill);
}

calculateTip();