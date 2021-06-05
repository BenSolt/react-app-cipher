import React, { useState } from 'react';
import { encrypt, decrypt } from "./Key";

function Cipher2() {

    // const [num, setNum] = useState(0);

    const [info, setInfo] = useState({
        factor: 0,
        unencryptedText: "",
        encryptedText: ""
    })

    const FACTOR = 100;


    const handleFactorChange = e => {
        e.persist();
        const factor = parseInt(e.target.value, 10);
        setInfo(prevState => ({
            factor,
            encryptedText: encrypt(prevState.unencryptedText, factor)
        }));
    };


    const onChangeUnencryptedText = e => {
        e.persist();
        setInfo(prevState => ({
            factor: 0,
            unencryptedText: e.target.value,
            encryptedText: encrypt(e.target.value, info.factor)
        }));
    };

    const onChangeEncryptedText = e => {
        e.persist();
        setInfo(prevState => ({
            unencryptedText: decrypt(e.target.value, info.factor),
            encryptedText: e.target.value
        }));
    };

    // const addNumber = e => {
    //     setNum(num +1)
    // }
    // const subNumber = e => {
    //     setNum(num -1)
    // }

    return (
        <div>
            <h3>Cipher2 File</h3>
            <p>Select the factor to rotate the text</p>
            <select onChange={handleFactorChange}>
                {[...Array(FACTOR)].map((x, i) => (
                    <option key={i} value={i}>
                        {i}
                    </option>
                ))}
            </select>

            {/* <button onClick={addNumber}>Add</button>
            <button onClick={subNumber}>Subtract</button>
            <h3>{num}</h3> */}

            <p>Enter the text to encrypt</p>
            <input
                type="text"
                value={info.unencryptedText}
                onChange={onChangeUnencryptedText}
            />

            <p>Encrypted Text</p>
            <input
                type="text"
                value={info.encryptedText}
                onChange={onChangeEncryptedText}
            />

        </div>
    );
}

export default Cipher2;