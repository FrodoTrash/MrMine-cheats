//smetko pulpetko
//enable cheats
cheatsEnable = true

function createTrainer(){
  document.write( '<div id=\"trainer\" class=\"trainer\">\n' );
  document.write( '  <div class=\"trainer-content\">\n' );
  document.write( '    <h4>Big thanks to FrodoTrash!!! FrodoTrash&Smetana Mr.Mine Mod</h4>\n' );
  document.write( '    <span class=\"close\">X</span>\n' );


  document.write( '    <button id="tAutoOpen" value="off" onClick="autoOpenToggle()" >open chests OFF</button>\n' ); //<br> breake line
  document.write( '    <button id="tAutoSell" onClick="autoSellToggle()" >sell minerals OFF</button>\n' );
  document.write( '    <button id="tAutoMineral" onClick="autoMineralToggle()" >mine minerals OFF</button>\n' );
  document.write( '    <button id="tAutoBattle" onClick="autoBattleToggle()" >battle OFF</button>\n' );
  document.write( '    <button id="tAutoCompress" onClick="autoCompressToggle()" >compress OFF</button><br><br>\n' );

  document.write( '    <button id="tAutoCraft" onClick="autoCraftToggle()" >craft red OFF</button>\n' );
  document.write( '    <button id="tAutoCraft2" onClick="autoCraftToggle2()" >craft blue OFF</button>\n' );
  document.write( '    <button id="tAutoCraft3" onClick="autoCraftToggle3()" >craft green OFF</button>\n' );
  document.write( '    <button id="tAutoCraft4" onClick="autoCraftToggle4()" >craft purple OFF</button>\n' );
  document.write( '    <button id="tAutoCraft5" onClick="autoCraftToggle5()" >craft yellow OFF</button><br><br>\n' );

  document.write( '    <button id="tAutoApply" onClick="autoApplyToggle()" >superminers collect OFF</button> <span>For Goldalf, Thoth the Wise(rewards) and Diana(buff)</span> ' );

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
  if(button.innerText == "sell minerals OFF"){
    isAutoSelling = true
    windowState[1]=1
    button.innerText = "sell minerals ON"
  }
  else{
    isAutoSelling = false
    windowState[1]=0
    button.innerText = "sell minerals OFF"
  }
}
function autoOpenToggle(){
  button = document.getElementById('tAutoOpen')
  if(button.innerText == "open chests OFF"){
    isAutoOpening = true
    button.innerText = "open chests ON"
  }
  else{
    isAutoOpening = false
    button.innerText = "open chests OFF"
  }
}

function autoMineralToggle(){
  button = document.getElementById('tAutoMineral')
  if(button.innerText == "mine minerals OFF"){
    isAutoMineral = true
    button.innerText = "mine minerals ON"
  }
  else{
    isAutoMineral = false
    button.innerText = "mine minerals OFF"
  }
}

function autoBattleToggle(){
  button = document.getElementById('tAutoBattle')
  if(button.innerText == "battle OFF"){
    isAutoBattling = true
    button.innerText = "battle ON"
  }
  else{
    isAutoBattling = false
    button.innerText = "battle OFF"
  }
}

function autoCompressToggle(){
  button = document.getElementById('tAutoCompress')
  if(button.innerText == "compress OFF"){
    isAutoCompressing = true
    button.innerText = "compress ON"
  }
  else{
    isAutoCompressing = false
    button.innerText = "compress OFF"
  }
}

function autoCraftToggle(){
  button = document.getElementById('tAutoCraft')
  if(button.innerText == "craft red OFF"){
    isAutoCrafting = true
    button.innerText = "craft red ON"
  }
  else{
    isAutoCrafting = false
    button.innerText = "craft red OFF"
  }
}

function autoCraftToggle2(){
  button = document.getElementById('tAutoCraft2')
  if(button.innerText == "craft blue OFF"){
    isAutoCrafting2 = true
    button.innerText = "craft blue ON"
  }
  else{
    isAutoCrafting2 = false
    button.innerText = "craft blue OFF"
  }
}

function autoCraftToggle3(){
  button = document.getElementById('tAutoCraft3')
  if(button.innerText == "craft green OFF"){
    isAutoCrafting3 = true
    button.innerText = "craft green ON"
  }
  else{
    isAutoCrafting3 = false
    button.innerText = "craft green OFF"
  }
}

function autoCraftToggle4(){
  button = document.getElementById('tAutoCraft4')
  if(button.innerText == "craft purple OFF"){
    isAutoCrafting4 = true
    button.innerText = "craft purple ON"
  }
  else{
    isAutoCrafting4 = false
    button.innerText = "craft purple OFF"
  }
}

function autoCraftToggle5(){
  button = document.getElementById('tAutoCraft5')
  if(button.innerText == "craft yellow OFF"){
    isAutoCrafting5 = true
    button.innerText = "craft yellow ON"
  }
  else{
    isAutoCrafting5 = false
    button.innerText = "craft yellow OFF"
  }
}

function autoApplyToggle(){
  button = document.getElementById('tAutoApply')
  if(button.innerText == "superminers collect OFF"){
    isAutoApplying = true
    button.innerText = "superminers collect ON"
  }
  else{
    isAutoApplying = false
    button.innerText = "superminers collect OFF"
  }
}


isAutoSelling = false
isAutoOpening = false
isAutoMineral = false
isAutoBattling = false
isAutoCompressing = false
isAutoCrafting = false
isAutoCrafting2 = false
isAutoCrafting3 = false
isAutoCrafting4 = false
isAutoCrafting5 = false
isAutoApplying = false

if(cheatsEnable){
  createTrainer()
  Trainer = document.getElementById('trainer')
  TrainerClose = document.getElementsByClassName("close")[0]
  createTrainerIcon(Trainer)
  TrainerClose.onclick= function(){ trainerClose(TrainerClose) }
  tAutoSell = document.getElementById('tAutoSell')
  tAutoOpen = document.getElementById('tAutoOpen')
  tAutoMineral = document.getElementById('tAutoMineral')
  tAutoBattle = document.getElementById('tAutoBattle')
  isAutoCompress = document.getElementById('tAutoCompress')
  isAutoCraft = document.getElementById('tAutoCraft')
  isAutoCraft2 = document.getElementById('tAutoCraft2')
  isAutoCraft3 = document.getElementById('tAutoCraft3')
  isAutoCraft4 = document.getElementById('tAutoCraft4')
  isAutoCraft5 = document.getElementById('tAutoCraft5')
  isAutoApply = document.getElementById('tAutoApply')
  execute()
}
 
async function execute(){
  while (cheatsEnable){
    await new Promise(r => setTimeout(r, 1500))
    if(isAutoSelling && isCapacityFull()){ 
      if(windowState[1] != 1 ) //ce okno za prodajat ni odprto
      windowState[1] = 1 // nastavi na 1, 0 = ni odprto, [1] pozicija
      //earth
      sellAllMinerals(0) //ores
      //sellAllMinerals(1) //isotopes
      //moon
      moon.mineralIdsToSell.forEach(mineralID => sellMineral(mineralID)) //ores
      //moon.isotopeIdsToSell.forEach(isotopeID => sellMineral(isotopeID)) //isotopes
      //titan
      titan.mineralIdsToSell.forEach(mineralID => sellMineral(mineralID))//ores
      //titan.isotopeIdsToSell.forEach(isotopeID => sellMineral(isotopeID)) //isotopes
      windowState[1] = 0
    } 

    // mineral clicker
    if (isAutoMineral){
      //worldClickables array mineralov
      for(var i in worldClickables){
        while(worldClickables[i]){
          onClickedMineralDeposit(worldClickables[i])
        }
      }
    }
    // chest opener
    if(isAutoOpening){
      while (chestService.chests != 0){
        chestService.chests.forEach(chest => {
          chestService.giveChestReward(chest)
        })
      }
    }
    // battles
    if(isAutoBattling){
      if(battleWaiting != 0){
        panToViewDepth(battleWaiting[1])
        preparebattle()
        depthOfMonster = battleWaiting[1]
        battleWaiting = []
        wonBattle()
      } 
    }
    // add chests to compressor
    if(isAutoCompressing){
      if(chestCompressor.canQueueChest(ChestType.gold) == 1){
        chestCompressor.addChestToQueue(ChestType.gold)
      }
      else if(chestCompressor.addChestToQueue(ChestType.black)){
      }
    }
    //gem crafting
    if(isAutoCrafting){
      if(GemForger.canQueueGem(RED_FORGED_GEM_INDEX) == 1){
        GemForger.addGemToQueue(RED_FORGED_GEM_INDEX)
      }
    }
    if(isAutoCrafting2){
      if(GemForger.canQueueGem(BLUE_FORGED_GEM_INDEX) == 1){
        GemForger.addGemToQueue(BLUE_FORGED_GEM_INDEX)
      }
    }
    if(isAutoCrafting3){
      if(GemForger.canQueueGem(GREEN_FORGED_GEM_INDEX) == 1){
        GemForger.addGemToQueue(GREEN_FORGED_GEM_INDEX)
      }
    }
    if(isAutoCrafting4){
      if(GemForger.canQueueGem(PURPLE_FORGED_GEM_INDEX) == 1){
        GemForger.addGemToQueue(PURPLE_FORGED_GEM_INDEX)
      }
    }
    if(isAutoCrafting5){
      if(GemForger.canQueueGem(YELLOW_FORGED_GEM_INDEX) == 1){
        GemForger.addGemToQueue(YELLOW_FORGED_GEM_INDEX)
      }
    }
    // super miners goodies
    if(isAutoApplying){
      for(superMiner of superMinerManager.currentSuperMiners){
        superMiner.onButtonPress()
      }
    }  
  }
}
execute()