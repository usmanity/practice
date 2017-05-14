# this file contains code from other github repos for learning purposes
# I've credited and linked to the original repos


# this is taken from https://github.com/TheAlgorithms/Python/blob/master/sorts/merge_sort.py
# all comments were removed so I can comment and try to understand it

# import print_function from future
# here, print_function is being imported for 3.x support
# it becomes a function so that print() is used instead of the keyword print
# more reading here: http://stackoverflow.com/questions/7075082/what-is-future-in-python-used-for-and-how-when-to-use-it-and-how-it-works
from __future__ import print_function

# start the function definition
# arguments: a collection (array) of numbers
def merge_sort(collection):
    # find the length of the collection
    length = len(collection)
    # if the length of the collection is more than one
    if length > 1:
        # since the length is greater than 1, we're going to split it
        midpoint = length // 2
        # make left and right halves
        # ...came back to this and realized it's actually
        # recursive and keeps calling itself
        left_half = merge_sort(collection[:midpoint])
        right_half = merge_sort(collection[midpoint:])
        # don't know what these are for yet...
        i = 0
        j = 0
        k = 0
        # get length of each half now
        left_length = len(left_half)
        right_length = len(right_half)
        # as long as length for each half is greater than 0, do this
        while i < left_length and j < right_length:
            # using the i, j, and k vars are indices
            # e.g. if the 0th element in left half is less than
            # the 0th element in the right half
            # add it to the collection's 0th (k) index
            # otherwise, add the right half's 0th element
            if left_half[i] < right_half[j]:
                # adding to col
                collection[k] = left_half[i]
                # count up
                i += 1
            else:
                collection[k] = right_half[j]
                j += 1
            # count up for k
            k += 1
            # one thing that's not entirely apparent to me is that
            # the counter only increments for the left (i) or right (j) halves
            # once while it always incremenets for k

        # I think this is when there are no elements in the
        # second half, only one half contains elements
        while i < left_length:
            collection[k] = left_half[i]
            i += 1
            k += 1

        while j < right_length:
            collection[k] = right_half[j]
            j += 1
            k += 1

    return collection


if __name__ == '__main__':
    # weird seeing a module imported down here...
    import sys

    # determine which version is being used
    if sys.version_info.major < 3:
        # get input from user
        input_function = raw_input
    else:
        input_function = input

    # get the unsorted list of numbers and make them an array
    # then run them thru the merge_sort method
    user_input = input_function('Enter numbers separated by a comma:\n')
    unsorted = [int(item) for item in user_input.split(',')]
    print(merge_sort(unsorted))
