const translate = () => {
  let oldword = document.getElementById("wordInput").value.trim();
  if (oldword.match(/ /)) {
    oldword = oldword.toLowerCase().trim();
    let wordArr = oldword.split(' ');
    let result = '';
    for (let i = 0; i < wordArr.length; i++) {
      if (i > 0) {
        result += ' ';
      }
      result += translateWord(wordArr[i]);
    }
    document.getElementById("showTranslation").innerHTML = result;
    return result;
  }
  return translateWord(oldword);
}

const translateWord = (oldword) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let newWord = "";
  if (vowels.indexOf(oldword[0]) > -1) {
    newWord = oldword + "yay";
    return newWord;
  } else {
    let firstLetter = oldword.match(/[aeiou]/);
    let vowelIndex = oldword.indexOf(firstLetter[0]);
    newWord = oldword.substring(vowelIndex) + oldword.substring(0, vowelIndex) + "ay";
    return newWord;
  }
}
