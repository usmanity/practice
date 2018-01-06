for i in range(0, 4):
    if i == 2:
        break
    print(i)

print("Finished with i = ", str(i))

tries = 0

while tries < 3:
    password = raw_input("Password: ")
    if password == "example":
        break
    else:
        tries = tries + 1
else:
    print("Invalid passwords, exiting...")