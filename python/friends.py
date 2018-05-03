def friends(names, limit = None):
    if limit:
        others = len(names[limit:])
        named = ', '.join(names[0:limit])
        if limit != len(names):
            return f"{named} and {others} more"

    last_person = names[-1]
    sentence_beginning = ", ".join(names[:-1])
    return f"{sentence_beginning} and {last_person}"


print(friends(['Alice', 'Bob', 'Harold']))

print(friends(['Alice', 'Bob', 'Harold'], 1))

print(friends(['Jas', 'Joseph', 'Ahmad', 'Muhammad']))

print(friends(['Jesse', 'Joseph', 'Steven', 'Gabriel'], 4))
