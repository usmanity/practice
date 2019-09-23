class Words
    def self.say phrase
        puts phrase
    end
end


class Sentence < Words
    def self.speak words
        say words
    end
end

Sentence.speak "woof"
