module FirstModule
  def say_hello
    puts "Hello"
  end
end

module Stacklike
  def stack
    @stack ||= []
  end

  def add_to_stack(obj)
    stack.push(obj)
  end

  def take_from_stack
    stack.pop
  end
end

class ModuleTester
  # include FirstModule
  include Stacklike
end

# mt = ModuleTester.new
# mt.say_hello

s = ModuleTester.new
s.add_to_stack('test')
s.add_to_stack('another test')

puts s.stack
