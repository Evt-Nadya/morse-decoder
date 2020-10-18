const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var symbol = [];
    var result = '';
    for (i = 0; i < expr.length; i += 10) {
        symbol.push(expr.slice(i, i + 10));
    }

    for (i = 0; i < symbol.length; i++) {
        if (symbol[i] === "**********") {
            result += " ";
        } else {
            var num = '';
            for (j = 10; j > 0; j -= 2) {
                if (symbol[i].slice(j - 2, j) == '10') {
                    num = '.' + num
                };
                if (symbol[i].slice(j - 2, j) == '11') {
                    num = '-' + num;
                }
            }
            result += MORSE_TABLE[num];
        }
    }
    return result;
}

module.exports = {
    decode
}
