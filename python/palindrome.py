def palindrome(string):
    if len(string) > 1:
        n = len(string)
        if string[0] == string[n-1]:
            return palindrome(string[1:n-1])
        else:
            return False
    else:
        return True

print(palindrome('racecar'))
print(palindrome('daniel'))
print(palindrome('noon'))
print(palindrome('kayak'))
print(palindrome('radar'))
print(palindrome('muhammad'))
