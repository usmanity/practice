module M
    def report(message)
        puts "'report' method in module M #{message.upcase}"
    end
end

class C
    include M
    def report(message)
        puts "'report' from class C"
        puts "About to trigger the next higher up report method..."
        super
        puts "Back from 'super' call"
    end
end

c = C.new

def c.report(message)
    puts "#{message} Report from singleton"
    super
end

c.report("hello")
