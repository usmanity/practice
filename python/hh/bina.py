#!/bin/python3

import sys


n = 65535

binary_input = bin(n)
print(binary_input)
length_of_input = len(binary_input)
consecutive = 0
counter = 0
for i in range(0, length_of_input):
    try:
        current = binary_input[i]
        previous = binary_input[i - 1]
        next_digit = binary_input[i + 1]
        print(current, next_digit, previous)
        if (consecutive == 0 and current == '1'):
            consecutive = 1
        if ((current == next_digit or current == previous) and current == '1'):
            counter = counter + 1
            if (counter > consecutive):
                consecutive = counter
        else:
            counter = 0
    except IndexError:
        break

print(consecutive)
