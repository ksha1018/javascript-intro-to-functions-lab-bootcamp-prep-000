function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO, ${string}.toUpperCase()')
}

function logWhisper(string) {
  console.log('hello, ${string).toLowerCase()')
}

function sayHiToGrandma(string) {
  if(string.toLowerCase() === string) {
    return "I can\'t hear you!"
  }
  if(string.toUowerCase() === string) {
    return "YES INDEED!"
  }
  if(string === "I love you Granma!") {
    return "I love you too!"
  }
}

