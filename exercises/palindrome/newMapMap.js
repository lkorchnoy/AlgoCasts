/*

[ {"oliver": 2, "pixel": 1, "pinky": 4}, {"michael": 2, "oliver": 3", "pinky": 3}, {"michael: 1, "oliver": 1, "pixel": 1}]



Return the Fellow with the highest average rating ("pinky")

Return the Fellow with the lowest average rating ("pixel")

Return the Fellow with the most consistent rating ("pixel")

Return the Fellow that was in the most number of sessions ("oliver")

*/

/*

Return the Fellow with the highest average rating ("pinky")

we create a map that holds all students
key is student, value is array of scores

we can have a variable that holds our highest average seen so far
we also need a variable that holds the student associated with that average

for each student, calculate average and compare current student's average to our running max, update as necessary



*/


const getHighestAvg = (sessions) => {
  const map = new Map()

  for (const session of sessions) {

      for (const [ key, value ] of session) {
          const existing = map.get(key)

          if (existing) {

              existing.push(value)
          } else {
              map.set(key, [value])
          }
      }
  }

  let highestAvg = 0
  let highestStudent = ''

  for (const [ key, value ] of map) {
      const average = value.reduce((acc, value) => acc += value, 0) / value.length;
      
      if (average > highestAvg) {
          highestAvg = average
          highestStudent = key
      }
  }

  return highestStudent
}

const getLowestAvg = (sessions) => {
const map = new Map()

for (const session of sessions) {

    for (const [ key, value ] of session) {
        const existing = map.get(key)

        if (existing) {

            existing.push(value)
        } else {
            map.set(key, [value])
        }
    }
}

let lowestAvg = Infinity
let lowestStudent = ''

for (const [ key, value ] of map) {
    const average = value.reduce((acc, value) => acc += value, 0) / value.length;
    
    if (average < lowestAvg) {
        lowestAvg = average
        lowestStudent = key
    }
}

return lowestStudent
}


// Return the Fellow with the most consistent rating ("pixel")
/*
key: student
value: {rating : occurences}

for each student
first we check if this current stud

update map, if value object has the current rating, increment its respective value, otherwise create it
check if the new occurences is greater than our current running occurences, update as necessary


map = {student, {rating, occurences}}

*/



const getMostConsistent = (sessions) => {
const map = new Map()

let maxOccurences = 0;
let maxStudent;

for (const session of sessions) {
    for (const [ student, rating ] of session) { // student : score
        const existing = map.get(student) // {rating : occurences}
        if (existing) { // we have seen student
          let count = existing.get(rating) ? existing.get(rating) + 1 : 1;
          existing.set(rating, count);
        } else {  
            let newMap = new Map();
            newMap.set(rating, 1)
            map.set(student, newMap);
        }

        if (existing && existing.get(rating) > maxOccurences) {
          maxOccurences = existing.get(rating);
          maxStudent = student;
        }
    }
  
}
return maxStudent;
}

// [ {"oliver": 2, "pixel": 1, "pinky": 4}, {"michael": 2, "oliver": 3", "pinky": 3}, {"michael: 1, "oliver": 1, "pixel": 1}]
// new Map(Object.entries(array))
let entry1 = new Map()
entry1.set("oliver", 2)
entry1.set("pixel", 1)
entry1.set("pinky", 4)

let entry2 = new Map();
entry2.set("michael", 2)
entry2.set("oliver", 3)
entry2.set("pinky", 3)

let entry3 = new Map();
entry3.set("michael", 1)
entry3.set("oliver", 1)
entry3.set("pixel", 1)

let test = [entry1, entry2, entry3];

console.log(getMostConsistent(test), 'expect pixel');

