function capitalize(string) {

  let arrString = string.split(' ');

    function methodMap(callback) {
    
        let newArr = [];

        for (let i = 0; i < arrString.length; i++) {

            newArr.push(callback(arrString[i]));
        }

        return newArr;
    }

  let capitalizedArr = methodMap(function(word) {
      return `${word[0].toUpperCase()}${word.slice(1)}`;
  })

  return capitalizedArr.join(' ')

}


function upperCase(string) {

  let arrString = string.split(' ');

    function methodMap(callback) {
    
      let newArr = [];

      for (let i = 0; i < arrString.length; i++) {

          newArr.push(callback(arrString[i]));
      }

      return newArr;
    } 

  let upperArr = methodMap(function (word) {
      return word.toUpperCase()
  })

  return upperArr.join(' ');
}



function lowerCase(string) {

  let arrString = string.split(' ');

    function methodMap(callback) {
      
      let newArr = [];

      for (let i = 0; i < arrString.length; i++) {

          newArr.push(callback(arrString[i]));
      }

      return newArr;
    } 


  let lowerArr = methodMap(function (word) {
      return word.toLowerCase()
  })

  return lowerArr.join(' ');
}


function reducer(input, action) {

  switch (action) {
    case 'capitalize':
        return capitalize(input);
        break;

    case 'upperCase':
        return upperCase(input);
        break;

    case 'lowerCase':
        return lowerCase(input);
        break;

    default:
        console.log('Error action')

  }
  
}

module.exports = reducer;
