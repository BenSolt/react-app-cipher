import React, { useState } from 'react';

function Test() {

    var message = "I have hidden a treasure nearby"
    const [usekey, setUseKey] = useState(message)

    var amount = 0
    var cryptic = usekey.toLowerCase().split("");

    function cypherText(a, b) {
        var text = a.toLowerCase();
        var cypheredText = "";

        for (var i = 0; i < text.length; i++) {

            var letter = cypherLetter(text[i], b);
            var empty = 0

            if (i === text.length - 1) {
                cypheredText += letter;
            } else if (letter === "") {
                amount += empty + 1;
            } else {
                cypheredText += letter + ",";
            }
        }
        // console.log("LETTER:", a, "INDEX:", i - amount)
        // console.log(cryptic)
        // console.log("Total Empty Spaces:", amount)
        // console.log("Total Characters:", cryptic.length - amount)
        return cypheredText
    }

    var cryptic1 = usekey.toLowerCase().split("");



    function cypherLetter(a, b) {
        //var cryptic = b.split("");
        for (var i = 0; i < cryptic.length; i++) {

            if (a === " ") {
                return ""
            }

            if (a === cryptic[i]) {
                return (i + 1) + "";
            }
        }
        // character not found in input text
        return undefined
    }


    var str = "I like coding";
    var char_pos = 0
    var indx1 = 0
    var amount1 = 0

    const [num, setNum] = useState(0)

    function add() {
        setNum(num + 1)
    }

    function reset() {
        setNum(-1)
    }

    function remove_character(a, char_pos) {

        var part1 = str.substring(0, char_pos);
        var part2 = str.substring(char_pos + 1, str.length);
        //var cypheredText = "";

        for (var i = 0; i < str.length; i++) {
            
            if (str[i] === " ") {
                amount1 += 1
                indx1 += i 
                continue
            }
        }
        return (part1 + part2);
    }


    function remove_spaces2(input) {
        var result = "";
        var result_index = 0;
        for (var i = 0; i < input.length; i++) {
            if(input[i] !== " ") {
                result += input[i]
                result_index += 1
                //console.log(result_index, input[i])
            }
            else {
                console.log("skip","[" + input[i] + "]")
            }

        }
        //console.log(result)
        return result
    }


    function remove_spaces(input) {
        var result = "";
        for (var i = 0; i < input.length; i++) {
            if(input[i] !== " ") {
                result += input[i]
            }
        }
        return result
    }
  
    function makeIndexList(input) {

        var indexnum = "";
        var cleaned_input = remove_spaces(input)

        for (var i = 0; i < cleaned_input.length; i++) {

            if (i === cleaned_input.length - 1) {
                indexnum += i + 1 
            } 
            else {
                indexnum += i + 1 + ","
            }
        }
        return indexnum
    }


///////////////////////////////////////////////////////////////////////////////////////

    return (
        <div>

            <button onClick={add}>Add</button>
            <button onClick={reset}>Reset</button>
            
            {/* <h3>STRING: {part1 + part2}</h3> */}
            <h3>Index: {num + 1}</h3>
            <h3>{remove_character(str, char_pos + num)}</h3>

            <h3>{makeIndexList(str)}</h3>
            <h3>{remove_spaces(str)}</h3>
            <h3>[{remove_spaces2("    ")}]</h3>
            
            <h3>---------------------------------------------------------</h3>

            <h3>Length: {str.length}</h3>
            <h3>Empty Space: {amount1}</h3>
            <h3>Length - empty space: {str.length - amount1}</h3>

            <h3>---------------------------------------------------------</h3>

            <h3>{message}</h3>
            <h3>{cypherText(message, usekey)}</h3>
            {/* <h3>{cryptic1}</h3> */}
            {/* <h3>Total Empty Spaces: {amount}</h3>
            <h3>Total Characters: {cryptic.length - amount}</h3> */}
        </div>
    )

}

export default Test;