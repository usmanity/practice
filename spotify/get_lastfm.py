import requests
import json
import string

songs = []

with open('kimonoData.json') as json_data:
    data = json.load(json_data)

    for song in data['results']['collection1']:
        song = str(song['track']['text']), str(song['artist']['text'])
        print song
