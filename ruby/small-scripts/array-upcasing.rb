original_array = [
    ["First", "Second", "Third"],
    ["one", "two", "three"],
    ["Alpha", "Beta", "Charlie"],
]

lowercase_words = []
uppercase_words = []
capitalized_words = []

def convert_to_lowercase(array)
    list_of_converted_words = []
    array.each do |word|
        list_of_converted_words << word.downcase
    end
    list_of_converted_words
end

original_array.each do |array|
    lowercase_words << convert_to_lowercase(array)
end

# print lowercase_words
# puts ''

def convert_to_uppercase(array)
    list_of_converted_words = []
    array.each do |word|
        list_of_converted_words << word.upcase
    end
    list_of_converted_words
end

original_array.each do |array|
    uppercase_words << convert_to_uppercase(array)
end

# print uppercase_words
# puts ""

def convert_to_capitalize(array)
    list_of_converted_words = []
    array.each do |word|
        list_of_converted_words << word.split.map(&:capitalize)[0]
    end
    list_of_converted_words
end

original_array.each do |array|
    capitalized_words << convert_to_capitalize(array)
end

# print capitalized_words
# puts ""


final_array = original_array.concat(uppercase_words)
final_array = final_array.concat(lowercase_words)
final_array = final_array.concat(capitalized_words)

puts "final array: "
print final_array
puts "\n ---- "


# [x] capitalize
# [ ] see if string has link in it
