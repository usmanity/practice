class Ticket
    attr_reader :venue, :date
    attr_accessor :price
    def initialize(venue, date)
        @venue = venue
        @date = date
    end
end

class MusicTicket < Ticket
    attr_accessor :artist
end

ticket = Ticket.new("Levi's Stadium", "06/12/2019")
# puts ticket.venue
# puts ticket.date
ticket.price = 400
# puts ticket.price


fleetFoxesConcert = MusicTicket.new('Fox Theatre', '7/1/19')
fleetFoxesConcert.artist = 'Fleet Foxes'
puts "#{fleetFoxesConcert.venue} presents #{fleetFoxesConcert.artist} on #{fleetFoxesConcert.date}"
