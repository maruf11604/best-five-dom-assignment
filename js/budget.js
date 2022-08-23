
//get value from this function
function getAmountValue(playercostId){
    const perPlayerAmount=document.getElementById(playercostId);
    const perPlayerString=perPlayerAmount.value ;
    const perPlayerCost=parseInt(perPlayerString);
    return perPlayerCost
}

//total player cost function 

function total(playercost){
    const perPlayerCost= getAmountValue(playercost);
    const players=document.querySelectorAll('#all-players li');
    const value=Object.values(players).length;
    let totalPlayerCost=perPlayerCost * value;
    return totalPlayerCost
}

//player expense

document.getElementById('calculate-player-total').addEventListener('click',function(){

    const totalPlayerCost=total('player-cost-id');
   
    const playerExpense=document.getElementById('player-expense-id');
    playerExpense.innerText=totalPlayerCost;

})

//total

document.getElementById('total-calculation-btn').addEventListener('click',function(){
    const totalPlayerCost=total('player-cost-id');
    const managerAmount=getAmountValue('manager-cost-id');
    const coachAmount=getAmountValue('coach-cost-id');

    const totalExpense=totalPlayerCost + managerAmount + coachAmount;
    const totalFiled=document.getElementById('total-field-id');
    totalFiled.innerText=totalExpense;
    
    
    
})