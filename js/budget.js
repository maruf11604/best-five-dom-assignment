function getAmountValue(playercostId){
    const perPlayerAmount=document.getElementById(playercostId);
    const perPlayerString=perPlayerAmount.value ;
    const perPlayerCost=parseInt(perPlayerString);
    return perPlayerCost
}


function total(playercost){
    const perPlayerCost= getAmountValue(playercost);
    let totalPlayerCost=perPlayerCost * 5;
    return totalPlayerCost
}

document.getElementById('calculate-player-total').addEventListener('click',function(){

    const totalPlayerCost=total('player-cost-id');
   
    const playerExpense=document.getElementById('player-expense-id');
    playerExpense.innerText=totalPlayerCost;

})

document.getElementById('total-calculation-btn').addEventListener('click',function(){
    const totalPlayerCost=total('player-cost-id');
    const managerAmount=getAmountValue('manager-cost-id');
    const coachAmount=getAmountValue('coach-cost-id');

    const totalExpense=totalPlayerCost + managerAmount + coachAmount;
    const totalFiled=document.getElementById('total-field-id');
    totalFiled.innerText=totalExpense;
    
    
    
})