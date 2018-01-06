integer = input("Print a positive integer: ")

for i in range(1, integer + 1):
    if (integer % i == 0):
        print("{} is a divisor of {}".format(i, integer))

