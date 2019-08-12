class Ticket
    VENUES = ["Fox Theatre", "Norse Hall"]
    def initialize(venue, date)
        if VENUES.include? venue
            @venue = venue
        else
            raise ArgumentError, "Unknown venue #{venue}"
        end
    end
end

puts "Just for reference, here are the venues:"
puts Ticket::VENUES

dave_c = Ticket.new "Fox Theatre", Time.new

# this should return an error for testing purposes
chris_r = Ticket.new "Folsom", Time.new
