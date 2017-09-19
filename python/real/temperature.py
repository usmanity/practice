def to_celsius(F):
    return (F - 32) * 5 / 9

def to_farenheit(C):
    return C * 9 / 5 + 32

print("72 degrees F = {} degrees C".format(to_celsius(72)))
print("37 degrees C = {} degrees F".format(to_farenheit(37)))
