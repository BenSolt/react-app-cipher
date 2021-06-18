import React, { useState } from 'react';
import $ from "jquery";

function BookCipher() {


    const [text1, setText1] = useState("");
    //const [usekey, setUseKey] = useState("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.?!,")
    
    const [usekey, setUseKey] = useState("I have hidden a treasure nearby. The key to figuring it out lies with the length and letters of this riddle. Solve the cipher below and the treasure is yours.")

    function CipherBtn() {
        var form = $(".ciphering-form")
        var message = form.find("input").val();
        var key = form.find("textarea").val();
        showMessage(cypherText(message, key));
    }

    function DecipherBtn() {
        var form = $(".ciphering-form")
        var message = form.find("input").val();
        var key = form.find("textarea").val();
        showMessage(decypherText(message, key));
    }


    // a = message  b = key


    function cypherText(a, b) {
        var text = a.split("");
        var cypheredText = "";
        for (var i = 0; i < text.length; i++) {
            cypheredText += cypherLetter(text[i], b);
        }
        return cypheredText.substring(0, cypheredText.length - 1)
    }

  
    function decypherText(a, b) {
        var text = a.split(",");
        var decypheredText = "";

        for (var i = 0; i < text.length; i++) {
            decypheredText += b.charAt(text[i] - 1);
        }
        return decypheredText
    }

    function cypherLetter(a, b) {
        var cryptic = b.split("");
        //var cryptic = b.split(" ");
        for (var i = 0; i < cryptic.length; i++) {
            
            // if message  is equal to key
            if (a === cryptic[i]) {
                return (i + 1) + ",";
            }
            
        }
    }


    function showMessage(message) {
        $(".cypher-text").text(message);
        $("body").addClass("message-ready");
        setTimeout(function () {
            $("body").addClass("show-message");
        }, 10)
    }

    const changeHandler = (e) => {
        //setText({ ...text, [e.target.name]: e.target.value });
        setText1(e.target.value);
        setUseKey(e.target.usekey);
    };

    //Commented out setUseKey() disables changing key
    const changeHandlerKey = (e) => {
        // setUseKey();
    };


    return (
        <div>

            <div className="ciphering-form">
                <h1> Cipher</h1>

                <h3>Message or Cipher</h3>
                <input
                    placeholder="Enter Message or Cipher"
                    value={text1}
                    onChange={changeHandler}
                />

                <h3>Key</h3>

                <textarea className="textArea"
                    placeholder="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.?!,"
                    value={usekey}
                    onChange={changeHandlerKey}
                />


                <button onClick={CipherBtn} className="cipher-btn">Cipher</button>

                <button onClick={DecipherBtn} className="decipher-btn">Decipher</button>
            

                <div className="final-cipher">
                <h3>Results</h3>
                    <textarea className="cypher-text"
                        placeholder="Cipher Message"
                    />
                 
                </div>

            </div>
        </div>
    )
}
export default BookCipher;