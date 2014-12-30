import sys

# handle no given arguments
num = int(sys.argv[1])
rangeOfNumbers = range(1, num)
matches = []
totalSum = 0

def findMatches(numbers):
  global matches
  for num in numbers:
    if num % 3 == 0:
      matches.append(num)
    elif num % 5 == 0:
      matches.append(num)

findMatches(rangeOfNumbers)

print matches

for num in matches:
  global totalSum
  totalSum += num

print totalSum
