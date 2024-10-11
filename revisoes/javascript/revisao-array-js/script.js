let arr = []

function adicionar() {
    arr.push(document.getElementById("objeto").value)

        console.log(document.getElementById("objeto").value);
        
        document.getElementById("array").innerText = arr.join(", ")
    
}

function remover() {
    const arrTemp = arr.filter((obj) => obj!== document.getElementById("objeto").value)

    arr = arrTemp

    document.getElementById("array").innerText = arr.join(", ")
    
}
