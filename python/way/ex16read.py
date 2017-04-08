from sys import argv

script, filename = argv

print "Printing your file...\n"
file = open(filename)

print file.read()
