#!/usr/bin/python3
import string
import random
 
wordlist = ['APPLE', 'PLEAS', 'PLEASE']
puzzles = []
puzzles = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPXY', 'XAELPSY']

for i in range(2500000):
    puzzles.append(''.join(random.choice(string.ascii_uppercase) for _ in range(7)))
retlist = []
for puzzle in puzzles:
    retval = 0
    for i in range(len(wordlist)):
        flag = 1
        for j in range(len(wordlist[i])):
            if wordlist[i][j] not in puzzle or puzzle[0] not in wordlist[i]:
                flag = 0
        if flag == 1:
            retval += 1
    retlist.append(retval)
print(retlist)
