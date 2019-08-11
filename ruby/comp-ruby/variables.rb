# local variables
2.times do
    x = "Local variable"
    p x
end

# global variables
$y = "Global variable"
2.times do
    p $y
end

# instance variable
2.times do
    @y = '123'
    p @y
end

# constant
PERSON = "Earthling"
# it will warn about redefining variable
PERSON = "Martian"
p PERSON

# class variable
class MyClass
    @@z = 'zebra'
end

puts MyClass[@@z]
