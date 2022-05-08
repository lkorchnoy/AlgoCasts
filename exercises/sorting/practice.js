/*
Many teams use a type of tool called a linter to scan code to insure it follows certain standards and best practices. One common rule a linter might check for is the depth of nesting of control flow. Functions with many levels of nesting are often overly complex, hard to read or modify, and can be bug farms. We're going to write a function to determine the depth of control flow for if statements so that teams can automatically warn if it gets too deep.
In Visual Basic (an old language I hope most of you never need to use), if statements are bounded by four keywords: if, elseif, else, and endif. Given a sequence of these keywords, return the max nesting depth or -1 if the structure is incorrect.
The structure is incorrect if:
The first keyword is anything other than an if.
If and endif keywords do not pair up or are out of order.
An else or elseif is not inside an if.
There are two else blocks in a row.
An elseif follows an else at a given level.
Start by implementing this with only if, and endif. Then add support for else. Once that is working, modify the code to support elseif as well.
Function Signature:
function vbNesting(controlFlow)
*/
/*
if
  if
    if
    endif
  endif
endif
=> 3

if
  if
endif
=> False? invalid? -1?

look for if
1st is current depth
2nd counter is maxDepth

if controlArray[i] == "endif"
  currentDepth += -1
if currentDepth == 0
  


*/



// function vbNesting(controlFlow){
//   let currentDepth = 0;
//   let maxDepth = 0;
  
//   let n = controlFlow.split();

//   for (let i = 0; i < n.length; i++) {
//     if(n[i] == "if") {
//       currentDepth += 1;
//       if(currentdepth > maxDepth) maxDepth = currentDepth;
//     }
//     if(n[i] == "endif") {
//       currentDepth += -1;
//       if(currentDepth == -1) return -1
//     } 
    
//   }
//   return maxDepth;
// }

function vbNesting(controlFlow){
  
  const counts = new Map();
  let array = controlFlow;

  array.forEach(("if", "endif") => {
    counts.set("if", (counts.get("if") || 0) + 1);
  });
   return Array.from(counts.values()).filter(count => count === 1).length > 0;
  
}

let test1 = ["if if endif endif endif"] // 3

let test2 = ["if if endif endif endif"] //-1

let test3 = ["if if endif endif"] // 2

let test4 = "endif" // -1

// console.log(vbNesting(test1))
// console.log(vbNesting(test2))
// console.log(vbNesting(test3))
// console.log(vbNesting(test4))
console.log(vbNesting([["if", "if"], ["endif", "endif"]]));

  //convert controlflow to array, (remove whitespace)

  //set up counters
  
  //iterate through array, checking for keywords
  
    //checking for if, incrementing currentDepth

    //checking if currentDepth is > maxDepth, then saving if it is
    
    //checking for endif, decrementing currentDepth

    //checking if currentDepth == -1, returning -1 if it is
  