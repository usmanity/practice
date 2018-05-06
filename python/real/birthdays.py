birthdays = {
    'Luke Skywalker': '5/24/19',
    'Obi-Wan Kenobi': '3/11/57',
    'Darth Vader': '4/1/41'
}

if 'Yoda' not in birthdays:
    birthdays['Yoda'] = 'Unknown'

if 'Darth Vader' not in birthdays:
    birthdays['Darth Vader'] = 'Unknown'


for person in birthdays:
    print(person, birthdays[person])

del(birthdays['Darth Vader'])

print(birthdays)