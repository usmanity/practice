while True:
    num = raw_input("Enter a number you want doubled: ")
    try:
        num = int(num)
        print(num * 2)
        break
    except ValueError:
        print("Please input a number")
