/*
Write a javascript function called spotsFilledByWater that takes as input an array of numbers and returns a number that you calculate
which is described below through an algorithm that you determine and compose.  

Once you have a working solution, prepare a 5-10 minute presentation to demonstrate your method 
and walk us through how you solved it and your thought process in approaching the scenario.

The array is of the form [y0, y1, y2, yn]:
Each positive y-value element of this array represents the y-height value of a brick(s) stack.
The indices of the array represent the x-position of these bricks.
There is no limit to the maximum y-value for a brick height nor is there a limit on how wide (how many indices) the brick array 
could represent.
                                          
Consider the case of the array [2,0,1]:   
                                          |x|
Visual representation:                    |x|_|x|

This would be a structure that is 3 units wide and 2 units tall at the tallest point.  You can see that there is an empty space
at array index 1 (assuming array indices begin at 0).  

The number that the spotsFiledByWater function returns is the number of units of water that could potentially be held by the 
brick array structure above.  In our example, only 1 unit of water could be held by this brick structure because pouring a second
water unit would overflow off to the side and disappear.

Consider another case where the brick array is [1,0,0,1,2,1]:
                                                                          [x]
                                                                 [x]_ _[x][x][x]
This structure would hold 2 units of water at index 1 and 2.  

Consider another case where the brick array is [1,0,2,0,1]:
                                                                  [x]
                                                             [x]_ [x]_ [x]
This structure would also hold 2 units of water.



For the purposes of this thought exercise let us imagine that the water is/will
1. be affected by gravity
2. conform to the shape of where it is poured and does not compress
3. Uncontained water will leak out of the brick structure completely
4. 1 unit of water (one water pouring action) fills 1 empty "space" in the brick structure if available
5. Water will be poured until the structure can no longer hold any more.

Bricks are nonpermeable and also affected by gravity. The "brick" structure is placed on the "floor" which provides a non-permeable
surface on the bottom of the structure which can support an infinite number of bricks or water units.  Bricks come in positive, whole
units, i.e. you cannot have 1/2 of a brick.

*/


// ex.
// const bricks = [1, 0, 0, 2];
// spotsFilledByWater(bricks) when called will return 2
