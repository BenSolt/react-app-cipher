import React, { useState } from 'react';

function TextFile() {

    const BealeCode2 = 'bealeCipher2.txt';

    function Read() {
        console.log('read file')
        let file = document.querySelector("#file-input").files[0];
        let reader = new FileReader();
            reader.addEventListener('load', function(e) {
                let text = e.target.result;
            document.querySelector("#file-contents").textContent = text;
        	});
            reader.readAsText(file)
    }

    return (
        <div>
            {BealeCode2}

            <input type="file" id="file-input" />
            {/* <button id="read-button">Read File</button> */}
            <button onClick={Read}>Read File</button>
            <pre id="file-contents"></pre>
        </div>
    )

}

export default TextFile;