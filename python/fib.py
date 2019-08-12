#!/usr/local/bin/python

def fib1(n):
    if n == 1 or n == 2:
        return 1
    return fib1(n-1) + fib1(n-2)

userInput = input("How many fibonacci steps do you want to take? ")

for i in range(1, userInput):
    print (fib1(i))
