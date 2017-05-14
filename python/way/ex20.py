from sys import argv

script, input_file = argv

# read the entire contents of the file...
# weird that you don't have to open() the file first...
def print_all(f):
    print f.read()

# rewind by going to the beginning of the file
def rewind(f):
    f.seek(0)

def print_a_line(line_count, f):
    print line_count, f.readline()

current_file = open(input_file)

print "First let's print the whole file: \n"

print_all(current_file)

print "Now let's rewind, kind of like a tape."
rewind(current_file)

current_line = 1
print_a_line(current_line, current_file)

current_line = current_line + 1
print_a_line(current_line, current_file)

current_line = current_line + 1
print_a_line(current_line, current_file)

# use a shorthand to add one to the current variable
current_line += 1
print_a_line(current_line, current_file)
