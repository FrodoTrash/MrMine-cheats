//smetko pulpetko
//enable cheats
cheatsEnable = true

function createTrainer(){
  document.write( '<div id=\"trainer\" class=\"trainer\">\n' );
  document.write( '  <div class=\"trainer-content\">\n' );
  document.write( '    <h4>FrodoTrash Auto-Trainer</h4>\n' );
  document.write( '    <span class=\"close\">X</span>\n' );


  document.write( '    <button id="tAutoOpen" value="off" onClick="autoOpenToggle()" >auto open chests OFF</button><br>\n' );
  document.write( '    <button id="tAutoSell" onClick="autoSellToggle()" >auto sell OFF</button><br>\n' );
  document.write( '    <button id="tAutoMineral" onClick="autoMineralToggle()" >auto mine minerals OFF</button><br>\n' );
  document.write( '    <button id="tAutoBattle" onClick="autoBattleToggle()" >auto battle OFF</button><br>\n' );
  document.write( '  </div>\n' );
  document.write( '</div>' );
  var style = document.createElement('style')
  style.innerHTML = `
    .trainer {
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 5; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* trainer Content */
    .trainer-content {
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
    }

    /* The Close Button */
    .close {
      color: #aaaaaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  `
  document.head.appendChild(style);
}

// location L4gap8
function createTrainerIcon(Trainer){
  trainerMenuIco = document.createElement('img')
  trainerMenuIco.src="Shared/Assets/Relics/GoldChest.png"
  trainerMenuIco.id="trainerIco"
  trainerMenuIco.style.width = "50%";
  document.getElementById("L4gap10").appendChild(trainerMenuIco);
  trainerMenuIco.onclick= function() { 
    trainerOpen(Trainer);
  };
}
function trainerOpen(Trainer){
  Trainer.style.display = "block"
}
function trainerClose(TrainerClose){
  Trainer.style.display = "none"
}
function autoSellToggle(){
  button = document.getElementById('tAutoSell')
  if(button.innerText == "auto sell OFF"){
    isAutoSelling = true
    windowState[1]=1
    button.innerText = "auto sell ON"
  }
  else{
    isAutoSelling = false
    windowState[1]=0
    button.innerText = "auto sell OFF"
  }
}
function autoOpenToggle(){
  button = document.getElementById('tAutoOpen')
  if(button.innerText == "auto open chests OFF"){
    isAutoOpening = true
    button.innerText = "auto open chests ON"
  }
  else{
    isAutoOpening = false
    button.innerText = "auto open chests OFF"
  }
}

function autoMineralToggle(){
  button = document.getElementById('tAutoMineral')
  if(button.innerText == "auto mine minerals OFF"){
    isAutoMineral = true
    button.innerText = "auto mine minerals ON"
  }
  else{
    isAutoMineral = false
    button.innerText = "auto mine minerals OFF"
  }
}

function autoBattleToggle(){
  button = document.getElementById('tAutoBattle')
  if(button.innerText == "auto battle OFF"){
    isAutoBattling = true
    button.innerText = "auto battle ON"
  }
  else{
    isAutoBattling = false
    button.innerText = "auto battle OFF"
  }
}


isAutoSelling = false
isAutoOpening = false
isAutoMineral = false
isAutoBattling = false

if(cheatsEnable){
  createTrainer()
  Trainer = document.getElementById('trainer')
  TrainerClose = document.getElementsByClassName("close")[0]
  createTrainerIcon(Trainer)
  TrainerClose.onclick= function(){ trainerClose(TrainerClose) }
  tAutoSell = document.getElementById('tAutoSell')
  tAutoOpen = document.getElementById('tAutoOpen')
  tAutoMineral = document.getElementById('tAutoMineral')
  tAutoBattling = document.getElementById('tAutoBattle')
  execute()
}


async function execute() {
  while (cheatsEnable) {
    await new Promise(resolve => setTimeout(resolve, 1500));
	if(isAutoSelling && isCapacityFull()) { 
    if(windowState[1] != 1 ) //ce okno za prodajat ni odprto
      windowState[1] = 1;    // nastavi na 1, 0 = ni odprto, [1] pozicija
      ///earth
      sellAllMinerals(0)  //ores
      //sellAllMinerals(1)  //isotpes
      //moon
      moon.mineralIdsToSell.forEach(mineralID => sellMineral(mineralID));
      //moon.isotopeIdsToSell.forEach(isotopeID => sellMineral(isotopeID));

      windowState[1] = 0

  } 

    // auto mineral clicker
    if (isAutoMineral){
      //worldClickables array mineralov
      for(var i in worldClickables){
        while(worldClickables[i]){
          onClickedMineralDeposit(worldClickables[i]);
        }
      }
    }
    // auto chest opener
    if(isAutoOpening){
      while (chestService.chests != 0){
        chestService.chests.forEach(chest => {
          chestService.giveChestReward(chest)
        });
      }
    }

    // auto battleing
    if(isAutoBattling){
      if(battleWaiting != 0){
        panToViewDepth(battleWaiting[1])
        preparebattle()
        depthOfMonster = battleWaiting[1]
        battleWaiting = []
        wonBattle()
      } 
    }
  }
}
