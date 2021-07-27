// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

// Return the output array, and ignore all non-op characters
function parse( data )
{
  let resultArr = [];
  let curentValue = 0;
  
  for (let i = 0; i < data.length; i++) {
    switch(data[i]){
        case 'i':
        curentValue++;
        break;
        case 'd':
        curentValue--;
        break;
        case 's':
        curentValue *= curentValue;
        break;
        case 'o':
        resultArr.push(curentValue);
        break;
    }
  }
  return resultArr;
}
