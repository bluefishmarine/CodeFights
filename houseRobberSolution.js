// You are planning to rob houses on a specific street, 
// and you know that every house on the street has a 
// certain amount of money hidden. The only thing stopping 
// you from robbing all of them in one night is that 
// adjacent houses on the street have a connected security system. 
// The system will automatically trigger an alarm if two adjacent 
// houses are broken into on the same night.

// Given a list of non-negative integers nums representing the 
// amount of money hidden in each house, determine the maximum amount 
// of money you can rob in one night without triggering an alarm.

// Example

// For nums = [1, 1, 1], the output should be
// houseRobber(nums) = 2.

// The optimal way to get the most money in one night is to rob the first and the third houses for a total of 2.

// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer nums

// An array representing the amount of money that each house on the 
// street has.

// Guaranteed constraints:
// 0 ≤ nums.length ≤ 100,
// 0 ≤ nums[i] ≤ 500.

// [output] integer

function houseRobber(houses){
  var sum = 0;
  var houseSum = [0,houses[0],houses[1]];
  var houseLength = houses.length;
  if (houseLength <= 1){
    return houses[0]||0;
  } 
  if (houseLength <= 3){
    return (Math.max(houses[0]+houses[2],houses[1])||Math.max(houses[0],houses[1]));
  }
  for (var index = 0; index<houseLength-2; index++){
    runningtotal = Math.max((houseSum[index]+houses[index+2]),(houseSum[index+1]+houses[index+2]));
    houseSum.push(runningtotal);
    sum = runningtotal >= sum ? runningtotal : sum;
    }
 return (sum);
}
var houses = [155, 44, 52, 58, 250, 225, 109, 118, 211, 73, 137, 96, 137, 89, 174, 66, 134, 26, 25, 205, 239, 85, 146, 73, 55, 6, 122, 196, 128, 50, 61, 230, 94, 208, 46, 243, 105, 81, 157, 89, 205, 78, 249, 203, 238, 239, 217, 212, 241, 242, 157, 79, 133, 66, 36, 165,155, 44, 52, 58, 250, 225, 109, 118, 211, 73, 137, 96, 137, 89, 174, 66, 134, 26, 25, 205, 239, 85, 146, 73, 55, 6, 122, 196, 128, 50, 61, 230, 94, 208, 46, 243, 105, 81, 157, 89, 205, 78, 249, 203, 238, 239, 217, 212, 241, 242, 157, 79, 133, 66, 36, 165]; //8905
var houses1 = [213, 59, 76, 87, 209, 98, 94, 175, 249, 123, 109, 233, 199, 162, 51, 92, 146, 154, 146, 118, 183]; //1711
var houses2 = [114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223, 58, 170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187, 69, 129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144, 240]; //4173
var houses3 = [104, 209, 137, 52, 158, 67, 213, 86, 141, 110, 151, 127, 238, 147, 169, 138, 240, 185, 246, 225, 147, 203, 83, 83, 131, 227, 54, 78, 165, 180, 214, 151, 111, 161, 233, 147, 124, 143]; //3176
var houses4 = [1,1];

houseRobber(houses);
