def invest(amount, rate, time):
	"""
	Prints out the amount of investment for every year
	usage: invest(100, 0.05, 8) -> 
	"""
	print("Principle amount: ${}".format(amount))
	print("Annual rate of return: {}".format(rate))
	total = amount + (amount * rate)
	for n in range(1, time + 1):
		print("year {}: ${}".format(n, total))
		total = total + (total * rate)

invest(100, 0.05, 8)
