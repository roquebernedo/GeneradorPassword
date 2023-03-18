const tamaño = document.querySelector('#length')
const result = document.querySelector('#result')
const generate = document.querySelector('#generate')
console.log(result)

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbols(){
    return String.fromCharCode(Math.floor(Math.random() * 16) + 32)
}

function RandomUpper(){
    let Lower = ''
    for(i=0; i<tamaño.value; i++){
        Lower = Lower + getRandomUpper()
    }
    return Lower
}

function RandomLower(){
    let Lower = ''
    for(i=0; i<tamaño.value; i++){
        Lower = Lower + getRandomLower()
    }
    return Lower
}

function RandomNumber(){
    let Lower = ''
    for(i=0; i<tamaño.value; i++){
        Lower = Lower + getRandomNumber()
    }
    return Lower

}


function GeneratePassword(){
    
        return result.textContent = RandomLower()
}



//console.log(mezcla)
//mezcla.charAt(indice)

generate.addEventListener('click', ()=> {
    const upper = document.querySelector('#uppercase')
    const lower = document.querySelector('#lowercase')
    const numbers = document.querySelector('#numbers')
    const symbols = document.querySelector('#symbols')

    let cadenaAleatoria = ''
    const mezcla = RandomUpper() + RandomLower()
    //const indice = Math.floor(Math.random() * mezcla.length)
    for (let i = 0; i < tamaño.value; i++){
        const indice = Math.floor(Math.random() * mezcla.length)

        cadenaAleatoria = cadenaAleatoria + mezcla.charAt(indice)
    }

    let cadenaAleatoria2 = ''
    const mezcla2 = RandomUpper() + RandomLower() + RandomNumber()
    //const indice = Math.floor(Math.random() * mezcla.length)
    for (let i = 0; i < tamaño.value; i++){
        const indice = Math.floor(Math.random() * mezcla2.length)

        cadenaAleatoria2 = cadenaAleatoria2 + mezcla2.charAt(indice)
    }

    let cadenaAleatoria3 = ''
    const mezcla3 = RandomUpper() + RandomNumber()
    //const indice = Math.floor(Math.random() * mezcla.length)
    for (let i = 0; i < tamaño.value; i++){
        const indice = Math.floor(Math.random() * mezcla3.length)

        cadenaAleatoria3 = cadenaAleatoria3 + mezcla3.charAt(indice)
    }

    let cadenaAleatoria4 = ''
    const mezcla4 = RandomLower() + RandomNumber()
    //const indice = Math.floor(Math.random() * mezcla.length)
    for (let i = 0; i < tamaño.value; i++){
        const indice = Math.floor(Math.random() * mezcla4.length)

        cadenaAleatoria4 = cadenaAleatoria4 + mezcla4.charAt(indice)
    }
      
    if(lower.checked){
        if(upper.checked){
            if(numbers.checked){
                return result.textContent = cadenaAleatoria2
            }
            return result.textContent = cadenaAleatoria
        }
        GeneratePassword()
    }
    if(upper.checked){
        if(numbers.checked){
            return result.textContent = cadenaAleatoria3
        }
        return result.textContent = RandomUpper()
    }
    if(numbers.checked){
        if(lower.checked){
            return result.textContent = cadenaAleatoria4
        }
        return result.textContent = RandomNumber()
    }

})
//result.textContent = RandomLower()
/*
let cadenaAleatoria = "";

// Define una lista de caracteres que quieres que aparezcan en la cadena aleatoria
const caracteres = "0123456789abcdefghijklmnopqrstuvwxyz";

// Recorre un bucle 5 veces para agregar 5 caracteres aleatorios a la cadena
for (let i = 0; i < 5; i++) {
  // Genera un número aleatorio entre 0 y el número de caracteres disponibles
  const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
  // Agrega el carácter aleatorio correspondiente al índice a la cadena
  cadenaAleatoria += caracteres.charAt(indiceAleatorio);
}

// Imprime la cadena aleatoria en la consola
console.log(cadenaAleatoria);
if(lower.checked){
    return result.textContent = RandomLower()
}else if(lower.checked && upper.checked){
    let cadenaAleatoria = ''
    const mezcla = RandomUpper() + RandomLower()
    for (let i = 0; i < length.value; i++){
        const indice = Math.floor(Math.random() * mezcla.length)
        cadenaAleatoria = cadenaAleatoria + mezcla.charAt(indice)
    }
    return result.textContent = cadenaAleatoria
}
*/





