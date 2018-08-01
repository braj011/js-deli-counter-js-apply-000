var katzDeli = [];

// Function 1
function takeANumber(katzDeli) {
  katzDeli.push(`${number}`)
  return (`Welcome, ${number}. You are number ${katzDeli.length} in line.`)
}  

// takeANumber(katzDeli);


//Function 2
function nowServing(katzDeli) {
  let i = 0;                                // DOES NOTHING!!! VALIDATE THIS!!!
  while  (i < katzDeli.length) {
    i ++;
  }     // this keeps the counter check  for > 0 going
  // if statement is separate to the while loop iterator
  if (katzDeli.length === 0) {
    return (`There is nobody waiting to be served!`);
  } else {
    return (`Currently serving ${katzDeli.shift()}.`);
    // bring the shift into the interpolated string - removes first element of array
  }
} 


//Function 3
//  NEED A NEW 'LINE' TO BE CREATED  - to hold the string format that goes into the output 
var line = [];

function currentLine(katzDeli) {
  let i = 0;
  while (i<katzDeli.length) {
    line.push(` ` +[i+1]+`. `  + katzDeli[i])   
    i++;
  }
  if (katzDeli.length ===0) {
    return (`The line is currently empty.`);
  } else { 
    // return ("The line is currently:" + line);
    return ("The line is currently:" + line.join());
  }
} 
    
    // join method with default comma separator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// katzDeli = array of names 
// line = the constructed order of number & names remaining in the line at any time

// when takeANumber() - need to count those served already + those in the current line 



