
function characterCounter(word) {
var process = word.split('');
var counted = {};
  //console.log(process);

  for ( var i = 0; i < process.length; i++) {
   var letter = process[i];
    if (!counted[letter]) {

      counted[process[i]] = [i];

    } else{
        counted[letter].push(i);

    }

      // console.log("counted", counted)
    //counted.process[i]['i'];

  }

 return counted;
}

console.log(characterCounter('bananas'));
console.log(characterCounter('guccimane'));
console.log(characterCounter('ddodod'));
console.log(characterCounter('orange'));