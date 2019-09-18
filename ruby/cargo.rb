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

class Suitcase
end

class CargoHold
    include Stacklike
    def load_and_report(suitcase)
        puts "adding to cargo hold"
        loaded = self.add_to_stack(suitcase)
        puts loaded.object_id
    end

    def unload
        self.take_from_stack
    end
end

c = CargoHold.new
s = Suitcase.new

c.load_and_report(s)
