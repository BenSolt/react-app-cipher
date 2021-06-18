import React, { useState } from 'react';
import $ from "jquery";



function MyBookCipher() {

    const [text1, setText1] = useState("");

    const [usekey, setUseKey] = useState("I have hidden a treasure nearby. The key to figuring it out lies with the number of letters in this riddle. Solve the cipher below and the treasure is yours.")


    const changeHandler = (e) => {
        //setText({ ...text, [e.target.name]: e.target.value });
        setText1(e.target.value);
        //setUseKey(e.target.usekey);
    };

    const changeHandlerKey = (e) => {
        // setUseKey();
    };

    function cypherText(a, b) {
        var text = a.toLowerCase();
        var cypheredText = "";
        var amount = 0
        var cryptic = b.toLowerCase().split("");
        for (var i = 0; i < text.length; i++) {

            var letter = cypherLetter(text[i], b);
            var empty = 0

            if (i === text.length - 1) {
                cypheredText += letter;
            } else if (letter === ""){
                console.log("remove")
                amount += empty + 1;
            } else {
                cypheredText += letter + ",";
            }
        }
        console.log("LETTER:",a,"INDEX:",i - amount)
        console.log(cypheredText)
        console.log(cryptic)
        console.log("Total Empty Spaces:", amount)
        console.log("Total Characters:",cryptic.length - amount)
        return cypheredText
    }

    //-,2,5,-
    //17,3,6,17
    
    
    //have hid

    function cypherLetter(a, b) {
        //var cryptic = b.split("");
        var cryptic = b.toLowerCase().split("");
        var amount = 0
        for (var i = 0; i < cryptic.length; i++) {

            if ( a === " ") {
                return ""
            }
           
            if (a === cryptic[i]) {
                return (i + 1) + "";
                //return (i ) + "";
            } 
          
        }
        // character not found in input text
        return undefined
    }

    //If key is equal to message..
    function decypherText(a, b) {

        var numbers = a.split(",");
        var decypheredText = "";
        //var cryptic = b.toLowerCase().split(" ");

        for (var i = 0; i < numbers.length; i++) {
            var number = numbers[i];
            //decypheredText += b.charAt(number - 1);
            decypheredText += b.charAt(number-1);
        }
        return decypheredText;
    }

    function CipherBtn() {
        var form = $(".ciphering-form2")
        var message = form.find("input").val();
        var key = form.find("textarea").val();
        showMessage(cypherText(message, key));
    }

    function DecipherBtn() {
        var form = $(".ciphering-form2")
        var message = form.find("input").val();
        var key = form.find("textarea").val();
        showMessage(decypherText(message, key));
    }

    function showMessage(message) {
        $(".cypher-text2").text(message);
        $("body").addClass("message-ready");
        setTimeout(function () {
            $("body").addClass("show-message");
        }, 10)
    }



    return (
        <div className="ciphering-form2">

            <h1>Cipher</h1>
            <h6>The treasure is located under your deck</h6>

            <h5>I have hidden a treasure nearby. The key to figuring it out lies with the number of letters in this riddle. Solve the cipher below and the treasure is yours.</h5>
            

                    <input className="input"
                        placeholder="Enter Message or Cipher"
                        value={text1}
                        onChange={changeHandler}
                    />

                    <button onClick={CipherBtn}>Cipher(letter)</button>
                    <button onClick={DecipherBtn}>Decipher (number)</button>

                    <h3>KEY</h3>
                    <textarea className="textarea2"
                        placeholder="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.?!,"
                        value={usekey}
                        onChange={changeHandlerKey}
                    />

                    <h3>RESULTS</h3>
                    <textarea className="cypher-text2"
                        placeholder="Cipher Message"
                    />

        </div>
                )

}
                export default MyBookCipher;