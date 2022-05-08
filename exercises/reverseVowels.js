var reverseVowels = function(s) {
  if (s === null || s.length === 0) return s;
  let strArr = s.split("");
  let vowel = "aeiouAEIOU";
  let left = 0, right = strArr.length - 1;
  
  while (left < right) {
      while (left < right && vowel.indexOf(strArr[left]) === -1) {
          left++;
      }
      while (left < right && vowel.indexOf(strArr[right]) === -1) {
          right--;
      }
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
      left++;
      right--
  }
  return strArr.join("");
};

var reverseVowels = function(s) {
  if (s === null || s.length === 0) return s;
  let array = s.split("");
  let checker = "aeiouAEIOU";
  let left = 0, right = array.length - 1;
  
  while (left < right) {
      while (left < right && checker.indexOf(array[left]) === -1) {
          left++;
      }
      while (left < right && checker.indexOf(array[right]) === -1) {
          right--;
      }
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--
  }
  return array.join("");
};