c = Class.new do
    def say_hello
        puts "hello"
    end
end

c_instance = c.new

c_instance.say_hello

# classes are objects, instances of the class called Class
