/*
  TODO: Expected output from the program for size = 10
             *
            ***
           *****
          *******
         *********
        ***********
       *************
      ***************
     *****************
    *******************
*/
const size = 10;

const printSquare = size => console.log(">>> SQUARE " + size);

function printTriangle() {
    let i = 0;
    let str = '';
    while(i < size) {
        str = getChars(size - i - 1, ' ');
        str += getChars(2 * (i + 1), '*');
        console.log(str);
    }
}

const getChars = (length, character) => {
	let str = '';
	
	for(let i = 0; i < length; i++) {
		str += character;
	}
	
	return str;
}