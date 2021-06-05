const alphabet = "abcdefghijklmnopqrstuvwxyz";

const generateRotatedAlphabet = factor => {
  if (factor === 0) {
    return alphabet;
  }

  let newAlphabet = "";
  const alphabetLength = alphabet.length;
  for (let i = 0; i < alphabetLength; i++) {
    let index = i + factor;
    // index is outside the limits
    if (index < 0 || index >= alphabetLength) {
      // if factor < 0 => decrypt => shift to left
      // if factor > 0 => encrypt => shift to right
      index =
        factor > 0 ? i + factor - alphabetLength : i + factor + alphabetLength;
    }
    newAlphabet += alphabet[index];
  }
  return newAlphabet;
};

export function encrypt(text, factor) {
  if (factor === 0) {
    return text;
  }

  let newAlphabet = generateRotatedAlphabet(factor);
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    // check if the current caracter is a special character
    const currentCharacter = text[i];
    const alphabetIndex = alphabet.indexOf(currentCharacter.toLowerCase());
    if (alphabetIndex < 0) {
      encryptedText += currentCharacter;
    } else {
      if (currentCharacter === currentCharacter.toUpperCase()) {
        encryptedText += newAlphabet[alphabetIndex].toUpperCase();
      } else {
        encryptedText += newAlphabet[alphabetIndex];
      }
    }
  }

  return encryptedText;
}
export function decrypt(text, factor) {
  return encrypt(text, -factor);
}
