import React, { useEffect, useState } from 'react';

import { encrypt, decrypt } from "./Key";

const FACTOR = 100;

class Cipher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      factor: 0,
      unencryptedText: "",
      encryptedText: ""
    };
  }

  handleFactorChange = event => {
    event.persist();
    const factor = parseInt(event.target.value, 10);
    this.setState(prevState => ({
      factor,
      encryptedText: encrypt(prevState.unencryptedText, factor)
    }));
  };

  onChangeUnencryptedText = event => {
    event.persist();
    this.setState(prevState => ({
      unencryptedText: event.target.value,
      encryptedText: encrypt(event.target.value, this.state.factor)
    }));
  };

  onChangeEncryptedText = event => {
    event.persist();
    this.setState(prevState => ({
      unencryptedText: decrypt(event.target.value, this.state.factor),
      encryptedText: event.target.value
    }));
  };

  render() {
    const { encryptedText, unencryptedText } = this.state;
    return (
      <div>
        <p>Select the factor to rotate the text</p>
        <select onChange={this.handleFactorChange}>
          {[...Array(FACTOR)].map((x, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>

        <p>Enter the text to encrypt</p>
        <input
          type="text"
          value={unencryptedText}
          onChange={this.onChangeUnencryptedText}
        />

        <p>Encrypted Text</p>
        <input
          type="text"
          value={encryptedText}
          onChange={this.onChangeEncryptedText}
        />
      </div>
    );
  }
}
export default Cipher;
