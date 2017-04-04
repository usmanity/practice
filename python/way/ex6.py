x = "There are %d types of people." % 10
binary = "binary"
do_not = "don't"
y = "Those who know %s and those who %s" % (binary, do_not)

# print the first sentence with a digit inserted
print x
# print the punchline
print y

# trying %r instead of %s for strings
print "I said: %r." % x
print "I also said: '%s'." % y

# making the two vars separate lines
hilarious = False
joke_evaluation = "Isn't that joke so funny?! %r"

# evaluation works!
print joke_evaluation % hilarious

w = "This is the left side of..."
e = "a string with a right side."

# join two strings
print w + e
