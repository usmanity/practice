# this is more of a doc than a script

# defining variables
a = "a variable that contains a string of letters"
b = 1 # number
c = True # boolean

# def starts a function definition (declaration)
# `simple_print` is the name of the function, could be anything
# () hold the arguments that I want to use in this function
# *args a special arguments keyword in python that allows
# ...passing in any number of arguments
# the colon : is used to denote the start of the function body
# calling print() with the args is going to print other strings
# notice the indentation, that's required, but does need to be a
# ...specific number of spaces or tabs, just has to stay consistent
# dedenting (removing indentation) will happen when we want to finish
# ...the function definiton
def simple_print(*args):
    print(*args)

# this is outside the function now
print('outside')
