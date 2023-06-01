"use strict";


/*

We will now add lines to gridMaker() so that it also fills the grid with "numberDivs".

You must solve this in two different ways:
1) Use nested for-loops to do this. Use one for loop for the columns and one for the rows.
2) Use only one for-loop. How many times must it iterate?


VIDEO:  Record a video where you explain the two different ways (see above) of creating the right
        amount of numberDivs. The video should be called loopExplainer


*/



// TEST

gridMaker(document.querySelector("#grid"), 4, 6);
      

function createNumberDiv () {
      
        // Create each numberDiv
        let numberDiv = document.createElement("div");
        numberDiv.innerHTML = randomNumber(100);
      
        return numberDiv;
      
      }

function gridMaker (gridContainer, R, C) {
      
        gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
        gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
      
        // WITH NESTED LOOPS
        // for (let c = 0; c < C; c++) {
        //   for (let r = 0; r < R; r++) {
        //     gridContainer.appendChild( createNumberDiv() );
        //   }
        // }
      
        // WITH ONE LOOP
        let nTotal = R * C;
        for (let i = 0; i < nTotal; i++) {
          gridContainer.appendChild( createNumberDiv() );
        }
      
      }


function randomNumber (max) {
        return Math.floor(max * Math.random());
      }