import math

def is_prime(n):
    if n % 2 == 0 and n > 2: 
        return False
    return all(n % i for i in range(3, int(math.sqrt(n)) + 1, 2))

number = 600851475143
arrayOfPrimes = []

for i in range(1, 10000):
  if is_prime(i) and number % i == 0:
     print i
     arrayOfPrimes.append(i)

print arrayOfPrimes
