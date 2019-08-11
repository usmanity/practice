ticket = Object.new

def ticket.date
    "01/02/03"
end

def ticket.venue
    "Town hall"
end

def ticket.event
    "Author's reading"
end

def ticket.performer
    "Mark Twain"
end

def ticket.seat
    "Second balcony, row J, seat 12"
end

def ticket.price
    5.50
end

def ticket.available?
    true
end

# print "This ticket is for "
# print ticket.event + ", at "
# print ticket.venue + ", on "
# puts ticket.date + "."
# print "The performer is "
# puts ticket.performer + "."
# print "The seat is "
# print ticket.seat + ", "
# print "and it costs $"
# puts "%.2f." % ticket.price

puts "This ticket is for #{ticket.event}, at #{ticket.venue}. " +
    "The performer is #{ticket.performer}. " +
    "The seat is #{ticket.seat}. " + 
    "And it costs $#{"%.2f." % ticket.price}"

if ticket.available?
    puts "You're in luck! This ticket is still available!"
else
    puts "Sorry -- this ticket has been sold already."
end
