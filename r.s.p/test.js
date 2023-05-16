const computerdisplay = document.getElementById('computerch')
const userdisplay = document.getElementById('userch')
 const resultdislay  = document.getElementById('result')

 let userch
 let computerch
 let result

 userch = prompt('enter your value ')
 userdisplay.innerHTML = userch

 pcrandom()
 getruslt()


 function pcrandom() {

  const randomnum =  Math.floor(Math.random() *3) +1

  if (randomnum == 1){
    computerch = 'rock'
  }
  if (randomnum == 2){
    computerch = 'paper'
  }
  if (randomnum == 3){
    computerch = 'scissors'
  }
  computerdisplay.innerHTML =  computerch
    
 }


 function getruslt(){

    if(computerch == userch) {
        result = 'its draw'
        document.getElementsByTagName('h1')[0].style.color='blue'

    }
    if( computerch =='rock' && userch=='paper' ){
        result = 'you win '
        document.getElementsByTagName('h1')[0].style.color='green'
    }
    if( computerch =='rock' && userch=='scissors' ){
        result = 'you lose'
        document.getElementsByTagName('h1')[0].style.color='red'
    }
    if( computerch =='paper' && userch=='scissors' ){
        result = 'you win'
        document.getElementsByTagName('h1')[0].style.color='green'
    }
    if( computerch =='paper' && userch=='rock' ){
        result = 'you lose'
        document.getElementsByTagName('h1')[0].style.color='red'
    }
    if( computerch =='scissors' && userch=='rock' ){
        result = 'you win'
        document.getElementsByTagName('h1')[0].style.color='green'
    }
    if( computerch =='scissors' && userch=='paper' ){
        result = 'you lose'
        document.getElementsByTagName('h1')[0].style.color='red'
    }
    resultdislay.innerHTML =  result

 }


