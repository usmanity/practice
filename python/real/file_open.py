my_output_file = open('hello.txt', 'w')

my_output_file.writelines('Hello world')

my_output_file.close()

input_file = open('hello.txt', 'r')

print(input_file.readlines())

input_file.close()
