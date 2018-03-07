from random import randint

tosses = [0, 0, 0, 0, 0, 0]

for toss in range(0, 100000):
    side = randint(0, 6)
    tosses[side - 1] = tosses[side - 1] + 1

print("Tosses: {}".format(tosses))