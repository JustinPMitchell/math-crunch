// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

// The restriction is that the characters in part1 and part2 are in the same order as in s.

// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

function isMerge(s, part1, part2) {
  while(part1.length || part2.length) {
    if(part1[0] === s[0]) {
      part1 = part1.slice(1, part1.length);
      s = s.slice(1, s.length);
    }
    else if(part2[0] === s[0]) {
      part2 = part2.slice(1, part2.length);
      s = s.slice(1, s.length);
    }
    else
      return false;
  }
  if(!s.length) {
    return true;
  }
  else
    return false;
}

isMerge('codewars', 'code', 'wars');

// PROS: Code is easy to read and solves the problem
// CONS: Slicing each step can cause some time complexity issues, may be better to split and join