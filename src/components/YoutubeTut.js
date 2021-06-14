import React, { useState } from 'react';


function YouTubeTut() {

    const [num, setNum] = useState(0);

    const [text1, setText1] = useState("");
    const [usekey, setUseKey] = useState("when in the course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation. We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn, that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.--Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government. The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world.He has refused his Assent to Laws, the most wholesome and necessary for the public good.")


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