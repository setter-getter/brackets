module.exports = function check(str, bracketsConfig) {
    bracketsConfig = bracketsConfig.map(el => el.join(''));

    while (bracketsConfig.length) {
      let counter = 0;
      bracketsConfig.forEach(el => {
        if (str.indexOf(el) != -1) {
          str = str.replace(el, '');
        } else {
         counter++;
        }
      });

      if (counter === bracketsConfig.length) {
        bracketsConfig.length = 0;
      }
    }
    return str.length === 0 ? true : false;
  }

