from sys import argv

script, filename = argv

print "We're going to erase %r." % filename
print "If you don't want that, hit CTRL-C (^c)."
print "If you want to continue, hit Return."

raw_input("?")

print "Opening the file..."
target = open(filename, 'w')

print "Truncating the file, goodbye!"
target.truncate()

print "Now I'm going to ask you for three lines:"

line1 = raw_input("line 1: ")
line2 = raw_input("line 2: ")
line3 = raw_input("line 3: ")

print "Writing lines to file..."

target.write(line1)
target.write("\n")
target.write(line2)
target.write("\n")
target.write(line3)

print "file saved!"

target.close()
