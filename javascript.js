const gridSquare = document.getElementsByClassName("gridSquare");

function genDivs(){ 
    let btnDiv = document.querySelector('.btn')
    let clearBtn = document.createElement('button')
    clearBtn.className='clearButton'
    clearBtn.innerText='Clear'
    clearBtn.addEventListener('click', () => {
        window.location.reload();
    })
    btnDiv.appendChild(clearBtn)
    v = prompt("How many rows would you like? (Max 100)")
    if(v <= 100){
        var e = document.querySelector('.grid-container'); // whatever you want to append the rows to: 
        for(var i = 0; i < v; i++){ 
        var row = document.createElement("div"); 
        row.className = "row"; 
        for(var x = 1; x <= v; x++){ 
            var cell = document.createElement("div"); 
            cell.className = "gridSquare"; 
            cell.style.width = "100%";
            let height = 900 / parseInt(v);
            cell.style.height = `${height}px`
            //   cell.innerText = (i * v) + x;
            row.appendChild(cell); 
        } 
        e.appendChild(row); 
        }
        for (let i = 0; i < gridSquare.length; i++) {
            gridSquare[i].addEventListener("mouseover", () => {
            gridSquare[i].className += " squareBlack";
            });
        } 
    }
    else if(v<0){
        alert("Please enter a positive integer")
    }
    else{
        alert("Please enter a number up to 100")
    }

}
