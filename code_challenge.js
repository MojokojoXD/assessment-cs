// Array elements adding up to zero

function addToZero(arr){

for(let i = 0;i < arr.length-1; i++){
            for (j = 1; j< arr.length; j++){
               if(arr[i] + arr[j] === 0){
                   return true
               }
            }
    }
    return false;
}

console.log(addToZero([1,2,3,-1]));


//Unique char

function unique(str){
    const hasUnique = new Set(str);
    return (str.length === hasUnique.size);
}

console.log(unique("Monday"))


//Pangram

function pangram(sentence) {
    let includes = true;
    sentence = sentence.toUpperCase().split(' ')
    let alpha = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z' ]

    console.log(sentence[0].includes(alpha[4]))
    console.log(sentence[0])
    alpha.forEach(element=>{
        for(i = 0; i < sentence.length;i++){
            if(sentence[i].includes(element) === false){
                includes = false
            }
        }})

        return includes;
    }
    

console.log(pangram('The quick brown fox jumps over the lazy dog'))


//longest word
function longest(arr){
    //sorry no time but
    let wordlengths = arr.map(element => element.length)
    console.log(wordlengths)
    let maxlength = Math.max(...wordlengths)
    return maxlength
}

console.log(longest(['hi', 'hello']))