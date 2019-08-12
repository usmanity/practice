class User
    attr_accessor :username

    def initialize(username)
        @username = username
    end
end


me = User.new :usmanity

puts me.username
