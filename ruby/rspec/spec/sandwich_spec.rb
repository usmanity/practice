Sandwich = Struct.new(:taste, :toppings)

# creates an group of tests/related tests
RSpec.describe 'An ideal sandwich' do
	let(:sandwich) { Sandwich.new('delicious', []) }

	# creates a specific test
	it 'is delicious' do
		taste = sandwich.taste

		# verifies the expected outcome
		expect(taste).to eq('delicious')
	end

	it 'lets me add toppings' do
		sandwich.toppings << 'cheese'
		toppings = sandwich.toppings

		expect(toppings).not_to be_empty
	end
end
