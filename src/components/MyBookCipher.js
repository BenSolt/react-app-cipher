import React, { useState } from 'react';
import $ from "jquery";

function YouTubeTut() {

    const [text1, setText1] = useState("");
    const [usekey, setUseKey] = useState("when in the course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation. We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn, that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.--Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government. The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world.He has refused his Assent to Laws, the most wholesome and necessary for the public good.")
    
    //var declar = usekey.split(" ");
    var bealecode = "115 73 24 807 37 52 49 17 31 62 647 22";
    //var bealecodeSplit = bealecode.split("");
    
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
        for (var i = 0; i < text.length; i++) {
       
            var letter = cypherLetter(text[i], b);

            if (letter === undefined) {
               continue
            }

            if (i === text.length - 1) {
                cypheredText += letter
            } else {
                cypheredText += letter + ","
            }
        }
        return cypheredText
    }



//If key is equal to message..
    function decypherText(a, b) {
        // 3,1
        var numbers = a.split(",");
        var decypheredText = "";
        //t,w
        var cryptic = b.toLowerCase().split(" ");

        for (var i = 0; i < numbers.length; i++) {
            var number = numbers[i];
            var word = cryptic[number - 1];

           decypheredText += word[0];
            
            //decypheredText += b.charAt(text[i] - 1);
        }
        return decypheredText;
    }


    function cypherLetter(a, b) {
        //var cryptic = b.split("");
        var cryptic = b.toLowerCase().split(" ");
        for (var i = 0; i < cryptic.length; i++) {
            
            if (a === cryptic[i][0]) {
                return (i + 1) + "";  
            }
        }
        // character not found in input text
        return undefined
    }

    // function CipherBtn() {
    //     cypherText(text1, usekey);
    //     setText1(text1, usekey);
    //     console.log(cypherText(text1, usekey))
    // }

    // function DecipherBtn() {
    //     decypherText(text1, usekey);
    //     setText1(text1, usekey);
    //     console.log(decypherText(text1, usekey))
    // }


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

            {/* <h3>RESULT</h3>
            <textarea className="textarea2"
                placeholder="Created Cipher"
                value={cypherText(text1, usekey)}
                onChange={changeHandlerKey}
            /> */}

            <h3>RESULTS</h3>
            <textarea className="cypher-text2"
                placeholder="Cipher Message"
            />

        </div>
    )

}
export default YouTubeTut;