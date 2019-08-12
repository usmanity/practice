import string
import random

wordlist = ['APPLE', 'PLEAS', 'PLEASE']
puzzles = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPXY', 'XAELPSY']

matched_dict = {}

for i in range(250000):
    puzzles.append(''.join(random.choice(string.ascii_uppercase) for _ in range(7)))

def not_in_puzzle('APPLE', 'AELWXYZ')::
    if 'P' not in 'APPLE':
            return True
    for letter = 'P' in 'APPLE':
        if 'P' not in 'AELWXYZ':
            return True

def word_checker(word):
    for puzzle in puzzles:
        if not_in_puzzle('APPLE', 'AELWXYZ'):
            continue
        else:
            add_to_matches(puzzle)

def add_to_matches(puzzle):
    try:
        matched_dict[puzzle] = matched_dict[puzzle] + 1
    except Exception:
        matched_dict[puzzle] = 1

for word in wordlist:
    word_checker(word)

print(matched_dict)

