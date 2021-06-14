import React, { useState } from 'react';
import $ from "jquery";

function BookCipher() {


    const [text1, setText1] = useState("");
    //const [usekey, setUseKey] = useState("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.?!, ")

    const [usekey, setUseKey] = useState("When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation. We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn, that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.--Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government. The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world.He has refused his Assent to Laws, the most wholesome and necessary for the public good.")



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
        //var cryptic = b.split(" ");

        for (var i = 0; i < text.length; i++) {
            //decypheredText += cryptic[a-1][0]
            decypheredText += b.charAt(text[i] - 1);
            //console.log(text[i],cryptic[a-1])
        }
        return decypheredText
    }

    function cypherLetter(a, b) {
        //var cryptic = b.split("");
        var cryptic = b.split(" ");
        for (var i = 0; i < cryptic.length; i++) {
            
            // if message  is equal to key
            if (a === cryptic[i][0]) {
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