

function tellStory(array){
 const  [namee, mood , activity] = array
const story = `this is ${namee} he is very good person and ${namee} is very ${mood} and he now whant to go to ${activity} `
return story
}
const story = tellStory(["Martin" , "nervous" , "sleep"])
console.log(story)


console.log("====================")
function arrayNumbers (numbers){
    let sum = 0
    for (let i = 0 ; i < numbers.length; i++){
        sum += numbers[i]
    } return sum
}
const zbir = arrayNumbers([5,5,5,5,5])
console.log(zbir)
console.log("========================")

function createBigString(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]; 
        if (i < arr.length - 1) { 
            result += ' '; 
        }
    }
    return result;
}


const result = createBigString(["Hello", "there", "students", "of", "SEDC", "!"]);
console.log(result); 


console.log("===========================")


function oneToTwenty(){
    for(let i = 1; i<=20; i++){
        if(i%2===0){
        console.log(i)}
        else{
           console.log(i + "")
    }
    }
}
oneToTwenty()


function homewrok(SEDC) {
    const max = Math.max(...SEDC);
    const min = Math.min(...SEDC);
    
    const sum = max + min;
    
    return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

const SEDC = [24, 7, 9, 2, 21];
console.log(homewrok(SEDC)); 
