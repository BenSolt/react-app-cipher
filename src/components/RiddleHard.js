import React, { useState } from 'react';

function Riddle3() {

    var strPerson = "Thomas Jefferson";
    var sentence = "The key is an important document created in 1776"


    function reverseString() {
        var newStringPerson = "";

        for (var i = strPerson.length - 1; i >= 0; i--) {
            newStringPerson += strPerson[i];
        }
        return newStringPerson;
    }

    function reverseString2() {
        var newStringSentence = "";

        for (var i = sentence.length - 1; i >= 0; i--) {
            //newStringSentence += sentence[i]; 
            newStringSentence += sentence[i];
        }
        return newStringSentence;
    }


    // var s = 'ABCDEF';
    var sentence2 = "The key is an important document created in 1776"

    function getRandomInt(n) {
        return Math.floor(Math.random() * n);
    }
    function shuffle(sentence2) {
        var arr = sentence2.split('');           // Convert String to array
        var n = arr.length;              // Length of the array

        for (var i = 0; i < n - 1; ++i) {
            var j = getRandomInt(n);       // Get random of [0, n-1]
            var temp = arr[i];             // Swap arr[i] and arr[j]
            arr[i] = arr[j];
            arr[j] = temp;
        }
        sentence2 = arr.join('');
        // Convert Array to string
        return sentence2;                        // Return shuffled string
    }

    sentence2 = shuffle(sentence2);
    //console.log(sentence2);



    return (
        <div>
            {/* <h2>{sentence}</h2> */}
            <h2>{reverseString2('sentence')}</h2>
            {/* <h2>{reverseString('name')}</h2> */}
          
            {/* <h2>{shuffle(sentence2)}</h2> */}


            <h3>
            2,6,24,816,7,15,7,13,5,35,2,3,7,15,2,10,3,6,7,4,5,94,10,3,5,11,58,5,10,3,48,5,
            58,7,53,24,3,53,7,24,35,94,53,7,11,5,42,42,5,1,3,6,7,3,53,24,2,42,3,5,58,5,10,
            15,24,94,302,58,24,10,5,53,13,24,53,302,13,24,35,3,58,5,10,15,24,94,48,9,24,53,
            302,13,24,53,302,94,10,3,2,42,5,94,24,53,53,2,816,7,24,3,3,6,7,15,24,58,11,2,10,
            15,24,53,5,4,302,3,6,24,3,35,24,35,53,24,13,13,53,94,10,3,6,7,3,53,7,24,35,94,53,
            7,2,35,42,5,4,24,3,7,15,2,10,3,6,7,24,53,7,24,9,7,42,5,1,2,3,
            </h3>
        </div>
    )
}
export default Riddle3
