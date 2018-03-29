import random

nouns = [
    "fossil", 
    "horse", 
    "aardvark",
    "judge",
    "chef",
    "mango",
    "extrovert",
    "gorilla"
]

verbs = [
    "kicks",
    "jingles",
    "bounces",
    "slurps",
    "meows",
    "explodes",
    "curdles"
]

adjectives = [
    "furry",
    "balding",
    "incredulous",
    "fragrant",
    "exuberant",
    "glistening"
]

prepositions = [
    "against",
    "after",
    "into",
    "beneath",
    "upon",
    "for",
    "in",
    "like",
    "over",
    "within"
]

adverbs = [
    "curiously",
    "extravagantly",
    "tantalizingly",
    "furiously",
    "sensously"
]

print(
    """
        The %s %s
    """
% (random.choice(nouns), random.choice(verbs)))
