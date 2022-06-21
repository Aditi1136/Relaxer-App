const container = document.getElementById('container');
const text =document.getElementById('text');
const quote= document.getElementById('para');


const totalTime = 10000;
const breatheTime= (totalTime/5) *2;
const holdTime = totalTime/5;

 function getQuote(){
    fetch("https://favqs.com/api/qotd")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    quote.innerHTML=`${data.quote.body}`;
  });
    
   // quotes.map(function(quotes){
   //     let li = document.createElement('li');
     //   let motivation = document.createElement('h2');

       // motivation.innerHTML = `${quotes.motivation}`;
       


        //li.appendChild(motivation);
        //list.appendChild(li);

    //})
  
  

    
}


breathAnimation()

function breathAnimation(){
    text.innerText = 'Breath In!'
    container.className = 'container grow';
    setTimeout(()=>{
        text.innerText = 'Hold'
    
    setTimeout(() => {
        text.innerText= 'Breathe Out';
        container.className = 'container shrink';
    }, holdTime);
}, breatheTime);
}


setInterval(breathAnimation, totalTime)
setInterval(getQuote, totalTime)