age = input("Please enter your age: ")
weight = input("Now, please enter your weight: ")

age = int(age)
weight = float(weight)
average = weight / age

print("You've gained {} lbs per year".format(average))
