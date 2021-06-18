import React, { useState } from 'react';


function YouTubeTut() {

    const [num, setNum] = useState(0);

    const [text1, setText1] = useState("");

    function Add() {
        setNum(num + 1)
    }
    function Subtract() {
        setNum(num - 1)
    }
    function Reset() {
        setNum(0)
    }

    function CaesarCipher(str, num) {

        var lowerCaseStr = str.toLowerCase();
        var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
        var newStr = "";

        for (var i = 0; i < lowerCaseStr.length; i++) {
            var currentLetter = lowerCaseStr[i];
            if (currentLetter === " ") {
                newStr += currentLetter;
                continue;
            }
            var currentIndex = alphabet.indexOf(currentLetter);
            var newIndex = currentIndex + num;
            if (newIndex > 25) newIndex = newIndex - 26;
            if (newIndex < 0) newIndex = newIndex + 26;
            if (str[i] === str[i].toUpperCase()) {
                newStr += alphabet[newIndex].toUpperCase();
            }
            else newStr += alphabet[newIndex];
        }
        return newStr
    }

    function CaesarCipher2() {

        var lowerCaseStr = text1.toLowerCase();
        var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
        var newStr = "";
        
/////////////////////////////////////////////////////////////////////////////////        
        // var amount = 0
        // var ii = 0
        // for (; ii < alphabet.length; ii++) {

        //     var add = 0
        //     var letr = alphabet[ii];
        //     if (letr === " ") {
        //         amount += add + 1
        //         continue
        //     }
        // }
        // console.log(amount)
        // console.log(ii - amount)
/////////////////////////////////////////////////////////////////////////////////

        for (var i = 0; i < lowerCaseStr.length; i++) {

            var currentLetter = lowerCaseStr[i];
            if (currentLetter === " ") {
                newStr += currentLetter;
                continue;
            }

            var currentIndex = alphabet.indexOf(currentLetter);
            //var newIndex = currentIndex + num;
            var newIndex = currentIndex;
          
            if (newIndex > 25) newIndex = newIndex - 26;
            if (newIndex < 0) newIndex = newIndex + 26;
           
            else newStr += newIndex + 1 + ",";
        }
        return newStr
    }

    const changeHandler = (e) => {
        setText1(e.target.value);
    };

    return (
        <div className="ciphering-form2">

            <div>
                <input className="input"
                    placeholder="Enter Message or Cipher"
                    value={text1}
                    onChange={changeHandler}
                />

                <button onClick={Add}>Add</button>
                <button onClick={Subtract}>Subtract</button>
                <button onClick={Reset}>Reset</button>
                <h2>{num}</h2>

                <h1>RESULT:{CaesarCipher('coding is fun', num)}</h1>
                <h1 >RESULT:{CaesarCipher2()}</h1>

            </div>

        </div>
    )
}
export default YouTubeTut;