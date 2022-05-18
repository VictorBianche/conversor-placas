let placas =[];
let convertedPlate = '';
let row = [];
let botao = [];


function converte(plate){
    let beginPlate = plate.slice(0, 4)
    let charactersPlate = plate.slice(4, 5)
    let endPlate = plate.slice(5, 7)
        switch (charactersPlate) {
        case "A":
        convertedPlate = charactersPlate.replace("A", "0");
        break;
        case "B":
        convertedPlate = charactersPlate.replace("B", "1");
        break;
        case "C":
        convertedPlate = charactersPlate.replace("C", "2");
        break;
        case "D":
        convertedPlate = charactersPlate.replace("D", "3");
        break;
        case "E":
        convertedPlate = charactersPlate.replace("E", "4");
        break;
        case "F":
        convertedPlate = charactersPlate.replace("F", "5");
        break;
        case "G":
        convertedPlate = charactersPlate.replace("G", "6");
        break;
        case "H":
        convertedPlate = charactersPlate.replace("H", "7");
        break;
        case "I":
        convertedPlate = charactersPlate.replace("I", "8");
        break;
        case "J":
        convertedPlate = charactersPlate.replace("J", "9");
        break;
        }
        // console.log(beginPlate + convertedPlate + endPlate)
        row.push(beginPlate + convertedPlate + endPlate)
        //console.log(beginPlate + convertedPlate + endPlate);
    };

function exibePlaca(){
    placas.forEach(converte)
    for(i=0; i < row.length; i++){
        let ul = document.getElementById('placaRetorno');
        let li = document.createElement("li");
        ul.appendChild(li);
        li.appendChild(document.createTextNode(row[i]))
    }
}
