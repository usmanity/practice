
import math
def is_prime(n):
    if n % 2 == 0 and n > 2: 
        return False
    return all(n % i for i in range(3, int(math.sqrt(n)) + 1, 2))

prime_array = []
multipliers = []
evenly_divisible = 1
range_over = 10

for num in range(1, range_over + 1):
  if is_prime(num):
    prime_array.append(num)
    print num

for n in prime_array:
  for num in range(1, range_over + 1):
    if num != n and num % n == 0:
      multipliers.append(num)
  
print multipliers

# things to do
# 1. find out how to evenly divide a numer
# 2. test with 10, 20, 30 starters
