import React, { useState } from 'react';

function Riddle() {


    const [num, setNum] = useState(-3); //useState(0);
    const [text1, setText1] = useState("");
    const [usekey, setUseKey] = useState()

    const message = "I have hidden a treasure nearby. The key to figuring it out lies within this riddle. Solve the cipher below and the treasure is yours."

    const answer = "The treasure is located under the solts deck stairs"

    function Add() {
        setNum(num + 1)
    }
    function Subtract() {
        setNum(num - 1)
    }
    function Reset() {
        setNum(-3)
    }

    const changeHandler = (e) => {
        setText1(e.target.value);
    };


    function CaesarCipher(str, num) {

        var lowerCaseStr = str.toLowerCase();
        var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
        var newStr = "";
        var amount = 0;

        for (var i = 0; i < lowerCaseStr.length; i++) {
            var currentLetter = lowerCaseStr[i];
            var emptyspace = 0;

            if (currentLetter === " ") {
                amount += emptyspace + 1
                newStr += currentLetter;
                continue;
            }
            var currentIndex = alphabet.indexOf(currentLetter);
            var newIndex = currentIndex + num;
            if (newIndex > 25) newIndex = newIndex - 26;
            if (newIndex < 0) newIndex = newIndex + 26;
            if (str[i] === str[i].toUpperCase()) {
                newStr += alphabet[newIndex].toLowerCase();
            }
            else newStr += alphabet[newIndex];
        }

        return (
            <div className="body1">
                <h4>{newStr}</h4>
                {/* <h6>Letters:{i - amount}</h6> */}
            </div>

        )
    }


    return (
        <div>
            <div className="body1">

                <h2>
                I hAve hidDen a treasure nearby. The key to figuRing it out lies witHin this riDdle. Solve the ciphEr below
                and the treEasure is yours.
                </h2>

                <h2>{CaesarCipher(answer, num)}</h2>

                <button onClick={Add}>Add</button>
                <button onClick={Subtract}>Subtract</button>
                <button onClick={Reset}>Reset</button>

                {/* <h2>{num}</h2> */}
            </div>

            

        </div>
    )
}
export default Riddle;