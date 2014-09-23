import math

def polygon(sides, length):
  area = (0.25) * sides * length ** 2 / math.tan(math.pi/sides)
  return area

print polygon(7, 3)
