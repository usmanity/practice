from random import randint

trials = 10000
flips = 0.0

for trail in range(0, trials):
    flips = flips + 1
    first_flip = randint(0, 1)
    while randint(0, 1) == first_flip:
        flips = flips + 1

print(flips/trials)