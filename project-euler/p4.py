for i in range(900, 1000):
  for j in range(900, 1000):
    iString = str(i * j)
    if iString == iString[::-1]:
      print i*j
