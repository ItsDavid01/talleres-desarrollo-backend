//Desarrolle una funcion llamada desglosarString que reciba una string, y la string "vocales" o "consonantes", y retorne la cantidad de vocales o consonantes de la string recibida
function desglosarString(palabra, modo) {
    if (modo === "vocales"){
        return [...palabra].filter(item => "aeiou".includes(item.toLowerCase())).length
    }
    if (modo === "consonantes"){
        return [...palabra].filter(item => "bcdfghjklmnpqrstvwxyz".includes(item.toLowerCase())).length
    }
}

//Desarrolle una funcion llamada twoSum que reciba una lista de numeros enteros y otro numero entero y retorne los indices de los numeros del arreglo que sumados sean el otro numero

function twoSum(lis, num) {

    valx = lis.findIndex((x, i) => lis.findIndex(elem => x+elem===num) !== -1 && lis.findIndex(elem => x+elem===num) !== i)
    if (valx !== -1) {
        valy = lis.findIndex((y, j) => lis[valx] + y === num && j !== valx)
        if (valy !== -1) {
            return [valx, valy]
        }
    } else {
        return []
    }
}

//Desarrolle una funcion llamada conversionRomana que reciba una string de cifras romanas y retorne el equivalente en cifras arábigas
function conversionRomana(s){
    let nums = [...s].map(l => l==="I" ? 1 : 
                               l==="V" ? 5 :
                               l==="X" ? 10 :
                               l==="L" ? 50 :
                               l==="C" ? 100 :
                               l==="D" ? 500 :
                               l==="M" ? 1000 : 0)
    
    nums.reverse()
    return nums.reduce((acc, val, index, array) => val < array[index-1] ? acc - val : acc + val)
}


