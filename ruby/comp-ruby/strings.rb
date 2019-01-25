print "Name an animal\n> "
animal = gets.chomp

print "Name a noun (to jump over)\n> "
noun = gets.chomp

p "The quick brown #{animal.upcase} jumped over the lazy #{noun.downcase}"
