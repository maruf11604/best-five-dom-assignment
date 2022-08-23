

function getValue(inputId){
        const playerNameField=document.getElementById(inputId);
        const playerNameString=playerNameField.innerText;
        return playerNameString
    }

function setValue(outputId,newValue){
    
    const players=document.querySelectorAll('#all-players li');
    const value=Object.values(players).length
    console.log(value);

    if(value>4){
        alert('stop you can select only five players');
    }
    else{
        const playerlist=document.getElementById(outputId);
        const li=document.createElement('li');
        li.innerText=newValue;
        playerlist.appendChild(li);
    }


    

    
}




document.getElementById('player-selected-messi').addEventListener('click',function(){
    const playerNameString=getValue('player-name-messi');
    setValue("all-players",playerNameString);  
        if(this.click){
        document.getElementById("player-selected-messi").disabled = true;
        document.getElementById("player-selected-messi").style.backgroundColor = "darkGray";
    } 
})

document.getElementById('player-selected-neymar').addEventListener('click',function(){
    const playerNameString=getValue('player-name-neymar');
    setValue("all-players",playerNameString); 
    
    if(this.click){
        document.getElementById("player-selected-neymar").disabled = true;
        document.getElementById("player-selected-neymar").style.backgroundColor = "darkGray";
    } 
})

document.getElementById('player-selected-mbappe').addEventListener('click',function(){
    const playerNameString=getValue('player-name-mbappe');
    setValue("all-players",playerNameString);  
    
    if(this.click){
        document.getElementById("player-selected-mbappe").disabled = true;
        document.getElementById("player-selected-mbappe").style.backgroundColor = "darkGray";
    } 
})


document.getElementById('player-selected-machado').addEventListener('click',function(){
    const playerNameString=getValue('player-name-machado');
    setValue("all-players",playerNameString); 
    if(this.click){
        document.getElementById("player-selected-machado").disabled = true;
        document.getElementById("player-selected-machado").style.backgroundColor = "darkGray";
    }   
})

document.getElementById('player-selected-ramos').addEventListener('click',function(){
    const playerNameString=getValue('player-name-ramos');
    setValue("all-players",playerNameString);   

    if(this.click){
        document.getElementById("player-selected-ramos").disabled = true;
        document.getElementById("player-selected-ramos").style.backgroundColor = "darkGray";
    }   
})

document.getElementById('player-selected-sanches').addEventListener('click',function(){
    const playerNameString=getValue('player-name-sanches');
    setValue("all-players",playerNameString);   

    if(this.click){
        document.getElementById("player-selected-sanches").disabled = true;
        document.getElementById("player-selected-sanches").style.backgroundColor = "darkGray";
    }   
})








