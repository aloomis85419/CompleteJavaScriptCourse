var tab = {
    bills: [124,48,268],
    tips:[],
    totalBills:[],
    calcTip:function(bill){
        var tip;
        if(bill < 50){
            tip = .2 * bill;
        }
        else if(bill >= 50 && bill <= 200){
            tip = .15*bill;
        }
        else if(bill > 200){
            tip = .10*bill;
        }
        return tip;
    },
    initializeTipsAndTotals:function(){
        for(i=0;i<this.bills.length;i++){
            var bill = this.bills[i];
            var tipForBill = this.calcTip(bill);
            this.tips[i] = tipForBill;
            this.totalBills[i]=(bill+tipForBill);
        }
    }  
};



tab.initializeTipsAndTotals();

console.log(tab.tips);
console.log(tab.totalBills);
console.log(tab);