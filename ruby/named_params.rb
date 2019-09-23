def say(person, greeting)
	if person and greeting
		puts "#{greeting} #{person}."
	else
		puts "Hello #{person}"
	end

end

say("kristen", greeting="hey there")
