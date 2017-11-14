import sys


first_word = sys.argv[1]
second_word = sys.argv[2]

anagram = True


for letter in first_word:
    if letter not in second_word:
        anagram = False


if not anagram:
    print("Not anagrams")
else:
    print(first_word, second_word, 'are anagrams')

