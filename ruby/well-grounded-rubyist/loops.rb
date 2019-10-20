n = 0
while n < 10
    puts n
    n = n + 1
end
puts "Done with regular while loop"


begin
    puts n
    n = n + 2
end while n < 20
puts "Done with begin/end while loop"

def my_loop
    yield while true
end

# my_loop { puts "looping forever"}

class Integer
    def my_times
        c = 0
        until c == self
            yield(c)
            c += 1
        end
        self
    end
end

# 3.my_times { |n| puts n + 5}

class Array
    def my_each
        size.my_times do |i|
            yield(self[i])
            i += 1
        end
        self
    end
    def my_map
        acc = []
        my_each { |e| acc << yield(e) }
        acc
    end
end

arr = [1,2,3,4]

# arr.each { |v| puts "from each: #{v}" }
puts arr.my_map { |v| v + 5 }
