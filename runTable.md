
 Insert function - 1.3202238s
 append funciton - 4.2785ms 



|Array Name  | Insert time | Append time |
|------------+-------------+-------------|
|tiny        | 41.8 μs     | 106.8 μs    |
|small       | 54.8 μs     | 121.8 μs    |
|medium      | 212.8 μs    | 174.3 μs    |
|large       | 11.5876 ms  | 687.4 μs    |
|extra large | 1.3565178 s | 4.43 ms     |


**doublerAppend funcition**
On function visual inspection of each line of code in the doublerAppend function. We see the following time complexity:

line 6: O(1) - array declaration(constant time)

line 8: O(n) - 'For' loop whose iteration is determined by the lenght N of       parameter nums.

line 9: O(1) - multiplication operation which is done with constant time every iteration of the loop.

line 10: O(1) - the push method which adds a number to the end of array new_num. It does so in a constant time because the position of where the new number to be added doesn't have to be found. Regardless of the size of array new_num the number to be added will always be at the end of it. No other operation is needed for existing elements.

Therefore the worst time for function doublerAppend to run is O(N). This is reflected on the table because the rate of change(gradient) of the times is nearly constant. (t5/t4 ~= t4/43.....).

**doublerInsert function**
For the doublerInsert function the only difference we see is the use of an unshift method:

line 10: O(n) - unshift has a linear time complexity because it adds the new variable at the beginning of the array new_array and has to perform an extra operation of moving all subsequent elements by one if they exist. The movement
is done n times the size of the array.

The unshift method thereby compounds the behavior of the for loop because for each step of the loop, unshift performs another loop. In conclusion, doublerInsert has a time complexity of O(n^2). The table reflects this because the gradient(rate of change) of the times on doublerInsert is linear.