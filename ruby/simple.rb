require "tty-prompt"

prompt = TTY::Prompt.new

prompt.yes?('do you like Ruby?')
