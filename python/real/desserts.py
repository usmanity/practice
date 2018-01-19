# an array containing my favorite desserts
desserts = ['ice cream', 'brownies'];

print("Unsorted list of desserts:", desserts);

desserts.sort()
print("Sorted list of desserts:", desserts)

print("Index of 'ice cream':", desserts.index('ice cream'))

food = desserts[:]
food.extend(['broccoli', 'turnips'])

print('-----------------------------')
print("Deserts:", desserts)
print("All foods:", food)

food.remove('ice cream')
print("Removed 'ice cream'")
print(food[:2])

cookies = 'cookies, cookies, cookies'

breakfast = cookies.split(', ')
print("And this is all I eat for breakfast:", breakfast)

num_list = [2, 4, 8, 16, 32, 64]

def tens_twenties(list):
    inclusives = []
    for i in range(0, len(list)):
        if list[i] <= 20 and list[i] >= 1:
            inclusives.append(list[i])
    return inclusives

print(tens_twenties(num_list))