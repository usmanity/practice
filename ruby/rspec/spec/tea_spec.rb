class Tea
    def flavor
        :earl_grey
    end
    def temperature
        217.0
    end
end

RSpec.configure do |config|
    config.example_status_persistence_file_path = 'spec/example.txt'
end

RSpec.describe Tea do
    let(:tea) { Tea.new }

    it 'tastes like Earl Grey' do
        expect(tea.flavor).to be :earl_grey
    end

    it 'is hot' do
        expect(tea.temperature).to be > 200.0
    end
end
