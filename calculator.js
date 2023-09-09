const numberElements = document.getElementsByClassName("calc_number");


for(const numberElement of numberElements) {
    numberElement.addEventListener("click", () => {

        console.log("click" + numberElement.innerText);


    }
    
    )
}


