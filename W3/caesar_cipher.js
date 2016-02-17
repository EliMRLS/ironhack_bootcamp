function ceasarCipher (message, shift) {
  if (shift === undefined) {
      shift = -3;
    }

  return message.split('').map(function (char){
    return upperCase(char) || lowerCase(char)
      ? encode(char,shift)
      : char 
  }).join('')
}

function encode (char, shift) {
  var charCode = char.charCodeAt(0);
  var charCodeEncoded = charCode + shift;

  if ((upperCase(char) && charCodeEncoded > 90) || (lowerCase(char) && charCodeEncoded > 122)) {
    charCodeEncoded -= 26;
  } else if ((upperCase(char) && charCodeEncoded < 65) || (lowerCase(char) && charCodeEncoded < 97)) {
    charCodeEncoded += 26;
  } 
  return String.fromCharCode(charCodeEncoded);

}

function upperCase (char) {
  return char >= 'A' && char <= 'Z'; 
}

function lowerCase (char) {
  return char >= 'a' && char <= 'z';
}


console.log(ceasarCipher ('Hey Jude'));