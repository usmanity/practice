puts "Reading Celsius temperature from data file"
num = File.read("temp.dat")
celsius = num.to_i
fahrenheit = (celsius * 9 / 5) + 32

puts "Celsius temperature: " + num
print "Fahrenheit temperature: "
puts fahrenheit
