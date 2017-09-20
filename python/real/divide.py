array = [2, 5, 8, 1, 6, 7]

def sort(a):
    array_length = len(a)
    half = array_length / 2
    if array_length > 2:
        left = sort(a[:half])
        right = sort(a[half:])
    else:
        if array_length == 1:
            return a[0]
        else:
            if a[0] > a[1]:
                b = a[0]
                a[0] = a[1]
                a[1] = b
                return a[0], a[1]
            else:
                return a

array = sort(array)
print(array)
