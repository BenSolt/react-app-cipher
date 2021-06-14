import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { CypherText } from './CipherText'
import { PlainText } from './PlainText'
import { Shift } from './Shift'

import { textToCypher, cypherToText } from './Cipher'


function App() {
  const [cypherText, setCypherText] = useState('')
  const [plainText, setPlainText] = useState('')
  const [shift, setShift] = useState(0)

  const onChangeCypherText = cypherText => {
    setCypherText(cypherText)
    setPlainText(cypherToText(cypherText, shift))
  }

  const onChangePlainText = plainText => {
    setPlainText(plainText)
    setCypherText(textToCypher(plainText, shift))
  }

  const onChangeShift = shift => {
    setShift(shift)
    setCypherText(textToCypher(plainText, shift))
  }
  

  return (
    <div className="ciphering-form">
      <div>
        {/* <div item xs={12}>   */}
        <div className="shift">
          <h1>Caesar's Cipher</h1>
          
          <Shift onChange={onChangeShift} />
        </div>
        <div>
        {/* <div item xs={12}> */}

            <div>    
              {/* <div item>  */}
              <div>
                <h2>Plain Text</h2>
                <PlainText value={plainText} onChange={onChangePlainText} shift={shift} />
              </div>
              {/* <div item> */}
              <div>   
                <h2>Cypher Text</h2>
                <CypherText value={cypherText} onChange={onChangeCypherText} shift={shift} />
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default App;
