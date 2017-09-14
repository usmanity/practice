phrase = input("Enter your phrase \n")

query = input("What are you looking for? ")

if phrase.find(query) != -1:
    print("This exists in the string at {}".format(phrase.find(query)))
else:
    print("{} does not exist in this string".format(query))
