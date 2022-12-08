
function calculadora() {
    let array = []
    let array2 = []
    let residuo = 0
    let numero = document.getElementById("numero").value
    let operacion = numero
    let potencia
    let espacios
    let bariable

    // Decima a decimal 

    if (document.getElementById("l1").value === "1" && document.getElementById("l2").value === "1") {
        document.getElementById("resultado").innerHTML = numero
    }

    // Decimal a octal

    if (document.getElementById("l1").value === "1" && document.getElementById("l2").value === "2") {

        while (operacion > 0) {
            residuo = operacion % 8
            operacion = Math.floor(operacion / 8)
            array.push(residuo)
            console.log(operacion);
        }
        let revertido = array.reverse()
        let binario = revertido.join("")
        console.log(binario);
        document.getElementById("resultado").innerHTML = binario
    }



    //  Decimal a Binario

    if (document.getElementById("l1").value === "1" && document.getElementById("l2").value === "3") {

        while (operacion > 0) {
            let residuo = operacion % 2
            operacion = Math.floor(operacion / 2)
            array.push(residuo)
            console.log(residuo);
        }
        let revertido = array.reverse()
        let binario = revertido.join("")
        console.log(binario);
        document.getElementById("resultado").innerHTML = binario
    }

    // Decimal a Exadecimal

    if (document.getElementById("l1").value === "1" && document.getElementById("l2").value === "4") {

        array.push(operacion)

        while (true) {

            let ultimo = array[array.length - 1]

            let residuo = ultimo % 16
            let final = ultimo / 16

            let final2 = parseInt(final)

            array.push(final2)
            if (residuo === 10) {
                residuo = "A"
            } else if (residuo === 11) {
                residuo = "B"
            } else if (residuo === 12) {
                residuo = "C"
            } else if (residuo === 13) {
                residuo = "D"
            } else if (residuo === 14) {
                residuo = "E"
            } else if (residuo === 15) {
                residuo = "F"
            }

            array2.push(residuo)

            console.log(array2);

            if (final2 === 0) {
                break
            }
        }
        console.log(array2);

        revertido = array2.reverse()
        let exadecimal = revertido.join("")
        console.log(exadecimal);
        document.getElementById("resultado").innerHTML = exadecimal
    }

    // Octal a Octal 


    if (document.getElementById("l1").value === "2" && document.getElementById("l2").value === "2") {
        document.getElementById("resultado").innerHTML = numero
    }

    // Octal a decimal

    if (document.getElementById("l1").value === "2" && document.getElementById("l2").value === "1") {
        let string = operacion.toString()
        espacios = string.split('')
        revertido = espacios.reverse()

        for (let i = 0; i < revertido.length; i++) {

            potencia = Math.pow(8, i)
            let res = espacios[i] * potencia
            array2.push(res)
        }
        let rta = array2.reduce((a, b) => a + b, 0)
        document.getElementById("resultado").innerHTML = rta
        console.log(rta);
    }

    // Octal a Binario

    if (document.getElementById("l1").value === "2" && document.getElementById("l2").value === "3") {

        for (let i = 0; i < numero.length; i++) {

            let espacios = operacion[i]

            if (espacios == 0) {
                espacios = "000"
            } if (espacios == 1) {
                espacios = "001"
            } if (espacios == 2) {
                espacios = "010"
            } if (espacios == 3) {
                espacios = "011"
            } if (espacios == 4) {
                espacios = "100"
            } if (espacios == 5) {
                espacios = "101"
            } if (espacios == 6) {
                espacios = "110"
            } if (espacios == 7) {
                espacios = "111"
            }

            array.push(espacios)
        }

        console.log(array);
        let bi = array.join("").split("")
        console.log(bi);


        for (let i = 0; i < bi.length; i++) {
            if (bi[0] == 0) {

                bi.shift()
                console.log(bi + " if");
                console.log(i + " po");
            } else if (bi[0] == 0 && bi[1] == 1) bi.splice(0, 2)
        }

        console.log(bi);
        console.log(bi.join(''));
        document.getElementById("resultado").innerHTML = bi.join("")

    }

    // Octal a Hexadecimal

    if (document.getElementById("l1").value === "2" && document.getElementById("l2").value === "4") {

        for (let i = 0; i < numero.length; i++) {

            let espacios = operacion[i]

            if (espacios == 0) {
                espacios = "000"
            } if (espacios == 1) {
                espacios = "001"
            } if (espacios == 2) {
                espacios = "010"
            } if (espacios == 3) {
                espacios = "011"
            } if (espacios == 4) {
                espacios = "100"
            } if (espacios == 5) {
                espacios = "101"
            } if (espacios == 6) {
                espacios = "110"
            } if (espacios == 7) {
                espacios = "111"
            }

            array.push(espacios)
        }

        console.log(array);
        let bi = array.join("").split("")
        console.log(bi);




        console.log(bi);
        console.log(bi.join(''));


        // paso 2

        let masCuatro = 4

        let arrayBina1 = []

        residuo = parseInt(bi.length % 4)

        console.log("Reciduo " + residuo);

        if (residuo == 1) {
            bi.unshift("0", "0", "0")
        }
        if (residuo == 2) {
            bi.unshift("0", "0")
        }
        if (residuo == 3) {
            bi.unshift("0")
        }

        console.log(bi + " Array bi 1");

        for (let i = 0; i < bi.length; i += masCuatro) {

            bariable = bi.slice(i, i + masCuatro)

            bariable = bariable.join("")

            console.log(bariable);

            if (bariable == "0000") {

                arrayBina1.push("0")
            }
            if (bariable == "0001") {
                arrayBina1.push("1")
            }
            if (bariable == "0010") {
                arrayBina1.push("2")
            }
            if (bariable == "0011") {
                arrayBina1.push("3")
            }
            if (bariable == "0100") {
                arrayBina1.push("4")
            }
            if (bariable == "0101") {
                arrayBina1.push("5")
            }
            if (bariable == "0110") {
                arrayBina1.push("6")
            }
            if (bariable == "0111") {
                arrayBina1.push("7")
            }
            if (bariable == "1000") {
                arrayBina1.push("8")
            }
            if (bariable == "1001") {
                arrayBina1.push("9")
            }
            if (bariable == "1010") {
                arrayBina1.push("A")
            }
            if (bariable == "1011") {
                arrayBina1.push("B")
            }
            if (bariable == "1100") {
                arrayBina1.push("C")
            }
            if (bariable == "1101") {
                arrayBina1.push("D")
            }
            if (bariable == "1110") {
                arrayBina1.push("E")
            }
            if (bariable == "1111") {
                arrayBina1.push("F")
            }

            for (let i = 0; i < arrayBina1.length; i++) {
                if (arrayBina1[0] == 0) {

                    arrayBina1.shift()
                    console.log(arrayBina1 + " if");
                    console.log(i + " po");
                } else if (arrayBina1[0] == 0 && arrayBina1[1] == 1) arrayBina1.splice(0, 2)
            }

        }

        let fin = arrayBina1.join("")
        console.log(arrayBina1.join());
        console.log(fin);
        document.getElementById("resultado").innerHTML = fin
    }

    // Binario A Decimal

    if (document.getElementById("l1").value === "3" && document.getElementById("l2").value === "1") {

        let string = operacion.toString()
        espacios = string.split('')
        revertido = espacios.reverse()

        for (let i = 0; i < revertido.length; i++) {

            potencia = Math.pow(2, i)
            let res = espacios[i] * potencia
            array2.push(res)
        }
        let rta = array2.reduce((a, b) => a + b, 0)
        document.getElementById("resultado").innerHTML = rta
        console.log(rta);

    }

    // Binario a Octal 

    if (document.getElementById("l1").value === "3" && document.getElementById("l2").value === "2") {

        let cont = 0
        let partes = 3

        cont = operacion.split("");
        let residuo = parseInt(cont.length % 3)

        if (residuo == 2) {
            cont.unshift("0")
        } if (residuo == 1) {
            cont.unshift("0", "0")
        }

        for (i = 0; i < cont.length; i += partes) {
            let part = cont.slice(i, i + partes)
            part = part.join("")

            if (part == "000") {
                array.unshift("0")
            } else if (part == "001") {
                array.unshift("1")
            } else if (part == "010") {
                array.unshift("2")
            } else if (part == "011") {
                array.unshift("3")
            } else if (part == "100") {
                array.unshift("4")
            } else if (part == "101") {
                array.unshift("5")
            } else if (part == "110") {
                array.unshift("6")
            } else if (part == "111") {
                array.unshift("7")
            }
        }

        array.reverse();
        let respuesta = array.join("")
        document.getElementById("resultado").innerHTML = respuesta
    }


    // binario a binario

    if (document.getElementById("l1").value === "3" && document.getElementById("l2").value === "3") {
        document.getElementById("resultado").innerHTML = numero
    }


    // binario hExadecimal

    if (document.getElementById("l1").value === "3" && document.getElementById("l2").value === "4") {
        
        let contador = 0
        let espacios = 4
       
        contador = operacion.split("");
        let residuo = parseInt(contador.length % 4)

        if(residuo==3){
            contador.unshift("0")
        }
        if (residuo == 2) {
            contador.unshift("0","0")
        } if (residuo == 1) {
            contador.unshift("0", "0","0")
        }

        console.log(contador);

        for (i = 0; i < contador.length; i += espacios) {
            let part = contador.slice(i, i + espacios)
            part = part.join("")
            console.log(part);

            if (part == "0000") {
                array.unshift("0")
            } else if (part == "0001") {
                array.unshift("1")
            } else if (part == "0010") {
                array.unshift("2")
            } else if (part == "0011") {
                array.unshift("3")
            } else if (part == "0100") {
                array.unshift("4")
            } else if (part == "0101") {
                array.unshift("5")
            } else if (part == "0110") {
                array.unshift("6")
            } else if (part == "0111") {
                array.unshift("7")
            } else if (part == "1000") {
                array.unshift("8")
            }else if (part == "1001") {
                array.unshift("9")
            }else if (part == "1010") {
                array.unshift("A")
            }else if (part == "1011") {
                array.unshift("B")
            }
            else if (part == "1100") {
                array.unshift("C")
            }else if (part == "1101") {
                array.unshift("D")
            }else if (part == "1110") {
                array.unshift("E")
            }
            else if (part == "1111") {
                array.unshift("F")
            }
        }

        array.reverse();
        let respuesta = array.join("")
        document.getElementById("resultado").innerHTML = respuesta
    }



    // Exadecimal a decimal

    if (document.getElementById("l1").value === "4" && document.getElementById("l2").value === "1") {

        hexa = operacion.toUpperCase().split("")

        for (let i = 0; i < hexa.length; i++) {
            if (hexa[i] == "A") {

                let i = hexa.indexOf("A")
                hexa[i] = 10

            } else if (hexa[i] == "B") {

                let i = hexa.indexOf("B")
                hexa[i] = 11

            } else if (hexa[i] == "C") {

                let i = hexa.indexOf("C")
                hexa[i] = 12

            } else if (hexa[i] == "D") {

                let i = hexa.indexOf("D")
                hexa[i] = 13

            } else if (hexa[i] == "E") {

                let i = hexa.indexOf("E")
                hexa[i] = 14

            } else if (hexa[i] == "F") {

                let i = hexa.indexOf("F")
                hexa[i] = 15

            }

        }

        console.log(hexa)

        n = 0
        e = 0
        hexa2 = []

        for (let i = hexa.length - 1; i >= 0; i--) {
            p = parseInt(hexa[i]) * Math.pow(16, n)
            n++;
            e = e + p
            hexa2.push(e)
        }

        console.log(hexa2);

        let ultimo = hexa2[hexa2.length - 1]
        document.getElementById("resultado").innerHTML = ultimo
        console.log(ultimo);
    }

    //hexadecimal a binario

    if (document.getElementById("l1").value === "4" && document.getElementById("l2").value === "2") {

        hexa = operacion.toUpperCase().split("")
        console.log(hexa);
        for (let i = 0; i < hexa.length; i++) {
            if (hexa[i] == "0") {
                let i = hexa.indexOf("0")
                hexa[i] = '0000'
            } else if (hexa[i] == "1") {
                let i = hexa.indexOf("1")
                hexa[i] = '0001'
            } else if (hexa[i] == "2") {
                let i = hexa.indexOf("2")
                hexa[i] = '0010'
            } else if (hexa[i] == "3") {
                let i = hexa.indexOf("3")
                hexa[i] = '0011'
            } else if (hexa[i] == "4") {
                let i = hexa.indexOf("4")
                hexa[i] = '0100'
            } else if (hexa[i] == "5") {
                let i = hexa.indexOf("5")
                hexa[i] = '0101'
            } else if (hexa[i] == "6") {
                let i = hexa.indexOf("6")
                hexa[i] = '0110'
            } else if (hexa[i] == "7") {
                let i = hexa.indexOf("7")
                hexa[i] = '0111'
            } else if (hexa[i] == "8") {
                let i = hexa.indexOf("8")
                hexa[i] = '1000'
            } else if (hexa[i] == "9") {
                let i = hexa.indexOf("9")
                hexa[i] = '1001'
            } else if (hexa[i] == "A") {
                let i = hexa.indexOf("A")
                hexa[i] = '1010'
            } else if (hexa[i] == "B") {
                let i = hexa.indexOf("B")
                hexa[i] = '1011'
            } else if (hexa[i] == "C") {
                let i = hexa.indexOf("C")
                hexa[i] = '1100'
            } else if (hexa[i] == "D") {
                let i = hexa.indexOf("D")
                hexa[i] = '1101'
            } else if (hexa[i] == "E") {
                let i = hexa.indexOf("E")
                hexa[i] = '1110'
            } else if (hexa[i] == "F") {
                let i = hexa.indexOf("F")
                hexa[i] = '1111'
            }
        }
        let final = hexa.join('').split('')
        console.log(final);
        for (let i = 0; i < final.length; i++) {
            if (final.indexOf('0') == 0) final.shift()
            else if (final.indexOf('0') == 0 && final.indexOf('0') == 1) final.splice(0, 2)
            else if (final.indexOf('0') == 0 && final.indexOf('0') == 1 && final.indexOf('0') == 2) final.splice(0, 3)
        }
        console.log(final);
        let resu = final.join('')
        console.log(resu);

        //binario a octal paso 2

        let contador = 0
        let partes = 3

        let numero2 = resu
        contador = numero2.split("");
        let residuo = parseInt(contador.length % 3)
        if (residuo == 2) {
            contador.unshift("0")
        } if (residuo == 1) {
            contador.unshift("0", "0")
        }
        for (i = 0; i < contador.length; i += partes) {
            let part = contador.slice(i, i + partes)
            part = part.join("")
            if (part == "000") {
                array2.unshift("0")
            } else if (part == "001") {
                array2.unshift("1")
            } else if (part == "010") {
                array2.unshift("2")
            } else if (part == "011") {
                array2.unshift("3")
            } else if (part == "100") {
                array2.unshift("4")
            } else if (part == "101") {
                array2.unshift("5")
            } else if (part == "110") {
                array2.unshift("6")
            } else if (part == "111") {
                array2.unshift("7")
            }
        }
        array2.reverse();
        let hexadecimal = array2.join("")
        document.getElementById("resultado").innerHTML = hexadecimal

    }

    // herxadecimal a binario

    if (document.getElementById("l1").value === "4" && document.getElementById("l2").value === "3") {

        arrayB = operacion.toUpperCase().split("") //hexadecimal a binario
        console.log(arrayB);
        for (let i = 0; i < arrayB.length; i++) {
            if (arrayB[i] == "0") {
                let i = arrayB.indexOf("0")
                arrayB[i] = '0000'
            } else if (arrayB[i] == "1") {
                let i = arrayB.indexOf("1")
                arrayB[i] = '0001'
            } else if (arrayB[i] == "2") {
                let i = arrayB.indexOf("2")
                arrayB[i] = '0010'
            } else if (arrayB[i] == "3") {
                let i = arrayB.indexOf("3")
                arrayB[i] = '0011'
            } else if (arrayB[i] == "4") {
                let i = arrayB.indexOf("4")
                arrayB[i] = '0100'
            } else if (arrayB[i] == "5") {
                let i = arrayB.indexOf("5")
                arrayB[i] = '0101'
            } else if (arrayB[i] == "6") {
                let i = arrayB.indexOf("6")
                arrayB[i] = '0110'
            } else if (arrayB[i] == "7") {
                let i = arrayB.indexOf("7")
                arrayB[i] = '0111'
            } else if (arrayB[i] == "8") {
                let i = arrayB.indexOf("8")
                arrayB[i] = '1000'
            } else if (arrayB[i] == "9") {
                let i = arrayB.indexOf("9")
                arrayB[i] = '1001'
            } else if (arrayB[i] == "A") {
                let i = arrayB.indexOf("A")
                arrayB[i] = '1010'
            } else if (arrayB[i] == "B") {
                let i = arrayB.indexOf("B")
                arrayB[i] = '1011'
            } else if (arrayB[i] == "C") {
                let i = arrayB.indexOf("C")
                arrayB[i] = '1100'
            } else if (arrayB[i] == "D") {
                let i = arrayB.indexOf("D")
                arrayB[i] = '1101'
            } else if (arrayB[i] == "E") {
                let i = arrayB.indexOf("E")
                arrayB[i] = '1110'
            } else if (arrayB[i] == "F") {
                let i = arrayB.indexOf("F")
                arrayB[i] = '1111'
            }
        }
        let final = arrayB.join('').split('')
        console.log(final);
        for (let i = 0; i < final.length; i++) {
            if (final.indexOf('0') == 0) final.shift()
            else if (final.indexOf('0') == 0 && final.indexOf('0') == 1) final.splice(0, 2)
            else if (final.indexOf('0') == 0 && final.indexOf('0') == 1 && final.indexOf('0') == 2) final.splice(0, 3)
        }
        console.log(final);
        let hexa = final.join('')
        console.log(hexa);

        document.getElementById("resultado").innerHTML = hexa
    }

    // hexadecimal a exadecimal

    if (document.getElementById("l1").value === "4" && document.getElementById("l2").value === "4") {

        document.getElementById("resultado").innerHTML = operacion

    }

}











