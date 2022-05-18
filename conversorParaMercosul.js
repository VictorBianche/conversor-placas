let placas =[]; 
let convertedPlate = '';
let row = [];
let botao = [];

function converte(plate){
    let beginPlate = plate.slice(0, 4)
    let charactersPlate = plate.slice(4, 5)
    let endPlate = plate.slice(5, 7)


        switch (charactersPlate) {
        case "0":
        convertedPlate = charactersPlate.replace("0", "A");
        break;
        case "1":
        convertedPlate = charactersPlate.replace("1", "B");
        break;
        case "2":
        convertedPlate = charactersPlate.replace("2", "C");
        break;
        case "3":
        convertedPlate = charactersPlate.replace("3", "D");
        break;
        case "4":
        convertedPlate = charactersPlate.replace("4", "E");
        break;
        case "5":
        convertedPlate = charactersPlate.replace("5", "F");
        break;
        case "6":
        convertedPlate = charactersPlate.replace("6", "G");
        break;
        case "7":
        convertedPlate = charactersPlate.replace("7", "H");
        break;
        case "8":
        convertedPlate = charactersPlate.replace("8", "I");
        break;
        case "9":
        convertedPlate = charactersPlate.replace("9", "J");
        break;
        }
        //console.log(beginPlate + convertedPlate + endPlate)
        row.push(beginPlate + convertedPlate + endPlate)
    }

//placas.forEach(converte)

function areaTexto(){
    let tag = document.createElement("p");
    let texto = document.createTextNode(placas[1])
    tag.appendChild(texto)
    alert(texto);
};

function exibePlaca(){
    placas.forEach(converte)
    for(i=0; i < row.length; i++){
        let ul = document.getElementById('placaRetorno');
        let li = document.createElement("li");
        ul.appendChild(li);
        li.appendChild(document.createTextNode(row[i]))
        ul.classList.add('placas-convertidas')
        //areaTexto()
    }
}



function clipboardCopy(){
    var textCopy = document.getElementById('placaRetorno')
    console.log(textCopy)
    // textCopy.select();
    navigator.clipboard.writeText(textCopy.value)
}