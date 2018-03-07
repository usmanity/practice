print("360 is a small but very divisible number, try dividing it a small number")

try:
    number = int(input('enter a number: '))
    if (360 / number) % 2 == 0:
        print("360 is divisible by {}!".format(number))
    else:
        print("try another number.")
except ValueError:
    print('Please input a number.')
except ZeroDivisionError:
    print('You can\'t divide using zero.')
except:
    pritn('Maybe there was a mistake')