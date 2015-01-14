from sys import argv

script, user_name = argv
prompt = "> "

print "Hi %s, I'm the %s script" % (user_name, script)
print "Where do you live?"
lives = raw_input()

print """
This script's name is: %s
You live in %s.
""" % (script, lives)
