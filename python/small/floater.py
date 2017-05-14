"""
returns a float or tells the user to enter a real number
"""
def floater(x):
  try:
    return float(x)
  except ValueError:
    return "Please enter a real number"

print(floater("5"))
print(floater("s"))  
