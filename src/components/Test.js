import React, { useState } from 'react';

function Test() {

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const [num, setNum] = useState(0);



function calculateAnswer(someString) {
  let answer = "";
  for (let i = 0; i < someString.length; i++) {
    const character = someString[i].toLowerCase();
    const index = alphabet.indexOf(character);
    if (index < 0) {
      answer = answer + someString[i];
      continue;
    }
    answer = answer + shift(index, 0);
  }
  return answer
}


function shift(index, amountToShift) {
  let shiftedValue = index + amountToShift;
  if (shiftedValue > 25) {
    shiftedValue = shiftedValue - 26;
  }
return alphabet[shiftedValue];
}

function add() {
    setNum(num +1)
}

let i = 1
const someString = ""
const character = someString[i]
const index = alphabet.indexOf(character);
let shiftedValue = index + num;

return (
    <div>
        {/* {alphabet} */}
        <h3>{calculateAnswer("abcdef")}</h3>
        <button onClick={shift}>Test</button>
        <button onClick={add}>Add</button>
        <h3>{num}</h3>
        <h3>{shift(0,0)}</h3>
        <h3>{alphabet[shiftedValue +1]}</h3>
    </div>
  )

}
export default Test;