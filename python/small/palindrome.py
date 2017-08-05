def palindrome(string):
    if len(string) > 1:
        n = len(string)
        if string[0] == string[n-1]:
            return palindrome(string[1:n-1])
        else:
            return False
    else:
        return True

words = ['racecar', 'noon', 'samson', 'kayak', 'bilo', 'heisenberg', 'radar']

print('Checking some words...')

for word in words:
  print(word, palindrome(word))
