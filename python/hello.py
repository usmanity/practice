import sys

# read
input = open(sys.argv[1], "r")
lines = input.readlines()
input.close()

# process
lines.reverse()

# write
output = open(sys.argv[2], "w")
for line in lines:
  print >> output, line.strip()
output.close()

