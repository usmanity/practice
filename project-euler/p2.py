first = 0
second = 1
totalSum = 0
finalSum = 0
arrayOfFibos = []

def fiboTo(num):
  global totalSum
  global first
  global second
  global finalSum
  while True:
    if first + second >= num:
      break
    totalSum = first + second
    first = second
    second = totalSum
    if totalSum % 2 == 0:
      arrayOfFibos.append(second)
  
    print totalSum
  for num in arrayOfFibos:
    finalSum += num

fiboTo(4000000)


print "----"
print finalSum
print "----"
