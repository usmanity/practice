#!/bin/python3

import sys


n = 65535

binary_input = bin(n)[2:]
array_of_ones = binary_input.split('0')
largest = len(max(array_of_ones))

print(largest)
