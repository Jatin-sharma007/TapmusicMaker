window.addEventListener("load", ()=>{
    const sounds = document.querySelectorAll(".sounds");
    const pianos = document.querySelectorAll(".pianos div")
    
    pianos.forEach((piano, index) => {
        piano.addEventListener("click", function() {
          sounds[index].currentTime = 0;
          sounds[index].play();
          window.addEventListener("keydown", checkpress , false);
          function checkpress(key){
              if(key.keyCode == "65"){
                  
                  sounds[0].play();
              }
              if(key.keyCode == "83"){
                  
                sounds[1].play();
            }
            if(key.keyCode == "68"){
                  
                sounds[2].play();
            }
            if(key.keyCode == "70"){
                  
                sounds[3].play();
            }
            if(key.keyCode == "71"){
                  
                sounds[4].play();
            }
            if(key.keyCode == "72"){
                  
                sounds[5].play();
            }
            if(key.keyCode == "74"){
                  
                sounds[6].play();
            }
            if(key.keyCode == "75"){
                  
                sounds[7].play();
            }
          }
});
 
});
});
