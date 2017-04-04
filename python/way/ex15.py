from sys import argv

script, filename = argv

# use the file name from the arguments
txt = open(filename)

print "Here's your file %r:" % filename
# read the txt var which has the opened file assigned to it
print txt.read()

print "Type the filename again:"
# ask for another file name here
file_again = raw_input('-)> ')

# open the second file
file_again = open(file_again)
# and print it out
print file_again.read()
