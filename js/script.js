
function CreateRow (){
  let row =  document.createElement("div")
  row.classList.add("row")
  row.style.display= "flex"
  return row;
}

function CreateCell(value = 0){
  let cell = document.createElement("div")
  cell.classList.add("cell")
  cell.style.width = '97.5px';
  cell.style.height = '97.5px';
  cell.style.marginRight = '12px'
  cell.style.display = 'flex';
  cell.style.borderRadius = '3px'
  cell.style.alignItems = 'center';
  cell.style.justifyContent = 'center';
  cell.style.backgroundColor = " rgba(238,228,218,.35)"
  cell.style.margin = "7.3px"
  cell.style.color =  "#776e65";
  cell.style.fontFamily = 'clear sans,helvetica neue,Arial,sans-serif';
  cell.style.fontSize = '60px';
  cell.innerHTML = value

  
  return cell;
}

 function score( ){
  let score = document.getElementById("score")
  score.style.display = 'flex';
  score.style.height = '80px'
  score.style.width = '90px'
  score.style.alignItems = 'center';
  score.style.justifyContent = 'center';  
  score.style.margin= "auto"
  score.style.marginTop= "10px"
  score.style.backgroundColor = 'orange'
  score.style.border = "1px solid black"
  score.style.borderRadius = '6px'
  score.style.fontSize = '40px';


  document.body.appendChild(score)
}
 score()

function matrix() {
  let matrix = document.createElement('div');
  matrix.classList.add('matrix');
  matrix.style.display = 'flex';
  matrix.style.flexDirection = 'column';
  
  matrix.style.margin= "auto"
  matrix.style.marginTop= "40px"
  matrix.style.backgroundColor = ' #bbada0'
  matrix.style.borderRadius = '6px'
  matrix.style.width = '450px'
  matrix.style.height = '450px'

  for (let i = 0; i < 4; i++) {
      let row = CreateRow();
      for (let j = 0; j < 4; j++) {
          let cell  = CreateCell();
          row.appendChild(cell)
      }
      matrix.appendChild(row)
  }
  const win = document.getElementById('frame');
  win.innerHTML = ' ';
  
  win.appendChild(matrix);
}
matrix();
let Rows = document.querySelectorAll(".row")
let b = Rows[1].children[2]
b.innerHTML = '2'
let cell = []

function Click(){
  let Rows = document.querySelectorAll(".row")
  inn()
  function inn(){
    let x = Math.floor(Math.random() * 4);
    let v = Math.floor(Math.random() * 4);
    
    const cell= Rows[x].children[v] 
      if ( cell.innerHTML == 0){
            cell.innerHTML = 2
            GameOver()
            }else{
              inn()
            }
  }

}


function Left (){

Click()    
combineRow()
  let cell = document.getElementsByClassName('cell')
  for (let i = 0; i < 16;i++){
    if (i % 4 === 0){
      let one= cell[i].innerHTML
      let two=cell[i+1].innerHTML
      let three=cell[i+2].innerHTML
      let four=cell[i+3].innerHTML
      let row = [parseInt(one),parseInt(two),parseInt(three),parseInt(four) ]
      let filteredRow = row.filter(num => num)
      let missing = 4- filteredRow.length
      let zeros = Array(missing).fill(0)
      let newRow = filteredRow.concat(zeros)
     
      cell[i].innerHTML = newRow[0]
      cell[i+1].innerHTML = newRow[1]
      cell[i+2].innerHTML = newRow[2]
      cell[i+3].innerHTML = newRow[3]
      
    }
  }
}

function Right (){  
Click()
combineRow()
  let cell = document.getElementsByClassName('cell')
  for (let i = 0; i < 16;i++){
    if (i % 4 === 0){
      let one= cell[i].innerHTML
      let two=cell[i+1].innerHTML
      let three=cell[i+2].innerHTML
      let four=cell[i+3].innerHTML
      let row = [parseInt(one),parseInt(two),parseInt(three),parseInt(four) ]
      let filteredRow = row.filter(num => num)
      let missing = 4- filteredRow.length
      let zeros = Array(missing).fill(0)
      let newRow = zeros.concat(filteredRow)
      cell[i].innerHTML = newRow[0]
      cell[i+1].innerHTML = newRow[1]
      cell[i+2].innerHTML = newRow[2]
      cell[i+3].innerHTML = newRow[3]
    
    }
  }
}

let width = 4
function Down (){
Click()
combineColumn()
  let cell = document.getElementsByClassName('cell')
  for (let i = 0; i< 4;i++){
    let one= cell[i].innerHTML
    let two=cell[i+ width] .innerHTML
    let three=cell[i+(width*2)].innerHTML
    let four=cell[i+(width*3)].innerHTML
    let column = [parseInt(one),parseInt(two),parseInt(three),parseInt(four) ]
  
    let filteredColumn=column.filter(num=>num)
    let missing = 4- filteredColumn.length
    let zeros = Array(missing).fill(0)
    let newColumn = zeros.concat(filteredColumn)
    
    cell[i].innerHTML = newColumn[0]
    cell[i+ width].innerHTML = newColumn[1]
    cell[i+(width*2)].innerHTML = newColumn[2]
    cell[i+(width*3)].innerHTML = newColumn[3]
  
  }
}
function Up (){  
Click()
combineColumn()
  let cell = document.getElementsByClassName('cell')

  for (let i = 0; i< 4;i++){
    let one= cell[i].innerHTML
    let two=cell[i+ width] .innerHTML
    let three=cell[i+(width*2)].innerHTML
    let four=cell[i+(width*3)].innerHTML
    let column = [parseInt(one),parseInt(two),parseInt(three),parseInt(four) ]
    let filteredColumn=column.filter(num=>num)
    let missing = 4- filteredColumn.length
    let zeros = Array(missing).fill(0)
    let newColumn =  filteredColumn.concat(zeros)
    
    cell[i].innerHTML = newColumn[0]
    cell[i+ width].innerHTML = newColumn[1]
    cell[i+(width*2)].innerHTML = newColumn[2]
    cell[i+(width*3)].innerHTML = newColumn[3]
    
    
  }
}
let sco = 0
function combineRow(){
  let score = document.getElementById("score")
  let cell = document.getElementsByClassName('cell')
  for (i = 0; i<15;i++){
    if(cell[i].innerHTML === cell[i+1].innerHTML){
      let combined = parseInt(cell[i].innerHTML)  +  parseInt(cell[i+1].innerHTML)
      cell[i].innerHTML=combined
      cell[i+1].innerHTML= 0
    
      sco += combined
      score.innerHTML = sco
      console.log(combined);
    }
  }
  Win()
}

function combineColumn(){
  let score = document.getElementById("score")
  let cell = document.getElementsByClassName('cell')
  for( i = 0; i<12;i++){
    if(cell[i].innerHTML===cell[i+width].innerHTML){
      let combined = parseInt(cell[i].innerHTML)  +  parseInt(cell[i+width].innerHTML)
      cell[i].innerHTML=combined
      cell[i+width].innerHTML=0
      sco += combined
      score.innerHTML = sco
    }
  }
  Win()
}
function Win(){
  let score = document.getElementById("score")
  let cell = document.getElementsByClassName('cell')
  for(let i = 0;i<cell.length;i++){
    if(cell[i].innerHTML == 2048){
      score.innerHTML = "You Win!"
    }
  }
}
function GameOver(){
  let score = document.getElementById("score")
  let cell = document.getElementsByClassName('cell')
  let zeros = 0
  for(let i = 0;i<cell.length;i++){
    if(cell[i].innerHTML == 0){
      zeros++
    }
  }
  if (zeros === 0){
    score.innerHTML = "You Lose!"
  }
}

function Aq(){
 
document.addEventListener('keydown', function(event) {
  if(event.keyCode == 37) {
    Left() 
  }
  else if(event.keyCode == 38) {
      Up()
  }
  else if(event.keyCode == 39) {
      Right()   
  }
  else if(event.keyCode == 40) 
       Down()
    });

}
Aq()

