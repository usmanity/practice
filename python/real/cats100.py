cats = {}
OFF = 0
ON = 1

for cat in range(1, 100):
    cats[cat] = ON

for j in range(1, 99):
    for cat in range(1, 100):
        print(cat, cats[cat])
        if cats[cat] % j == 0:
            cats[cat] = ON
        else:
            cats[cat] = OFF

print(cats)
