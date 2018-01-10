from random import randint

def roll():
  return randint(1,6)

total = 0.0

for r in range(10000):
    total += roll()

print("Average of all rolls is "  + str(total / 10000))
