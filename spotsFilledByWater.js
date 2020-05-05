/*
Write a function called spotsFilledByWater that takes as input an array of numbers. Each element of this array represents
the amount of bricks that are stacked on top of each other at that position. So this array [2, 0, 1] means there are two
bricks stacked on each other on the left, then in the middle there are no bricks, and on the right there is one brick.
This function needs to return a number representing the amount of empty spots that would be filled if somebody were to pour water onto this structure.
*/

// ex.
// const bricks = [1, 0, 1]
// spotsFilledByWater(bricks) == 1
/*
  H = brick
  _ = empty, no bricks
  ~ = water

  brick structure:
   
  H_H
  
  after pouring water:
   
  H~H
  
  meaning:
  
  One spot would be filled after pouring water
   |
   |
   v
  H_H
  
  
  The function returns 1.
*/

// ex.
// const bricks = [1, 0, 0, 2];
// spotsFilledByWater(bricks) == 2
/*
  brick structure:
  
     H
  H__H

  after pouring water:
  
     H
  H~~H
  
  meaning:

  Two spots in the middle would be filled after pouring water 
   ||
   ||
   vv
     H  <-- No water stays on this level because it all pours out
  H__H
  
  The function returns 2.
*/

// ex.
// const bricks = [1, 0];
// spotsFilledByWater(bricks) == 0
/*
  brick structure:
  
  H_

  after pouring water:
  
  H_
  
  meaning:

  Water did not fill this spot because there was nothing to contain it on the right. 
   |
   |
   v
  H_
  
  The function returns 0.
*/