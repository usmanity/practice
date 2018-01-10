from random import random
from random import randint

jeb = 0 # please clap
clinton = 0

def election():
    return randint(0,1)

for e in range(0, 10000):
    if (election() == 1):
        jeb += 1
    else:
        clinton += 1

print("Jeb got " + str(jeb / 100.0) + " of the votes")
print("Clinton got " + str(clinton / 100.0) + " of the votes")
