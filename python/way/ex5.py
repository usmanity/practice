# -*- coding: utf-8 -*-
name = 'Muhammad Usman'
age = 26
height = 66
weight = 134
eyes = 'Brown'
teeth = 'White-ish'
hair = 'Black'

print "Let's talk about %s." % name
print "He's %d inches tall." % height
print "He's %d pounds heavy." % weight
print "Actually that's not too heavy."
print "He's got %s eyes and %s hair." % (eyes, hair)
print "His teeth are usually %s depending on the coffee" % teeth

print "If I add %d, %d, and %d I get %d." % (
    age, height, weight, age + height + weight
)
