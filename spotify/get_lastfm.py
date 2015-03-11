import requests
import json
import codecs
import base64

songs = []
unfound = []
base64_client = base64.b64encode('f7723c8b67714b9e86669cef4d88d2d8:d8c7352ff6fb416fb06e1cf597db43ea')
auth_header = {'Authorization': 'Basic %s' % base64_client }
access_token = requests.post('https://accounts.spotify.com/api/token', data={'grant_type': 'refresh_token'}, headers=auth_header)
bearer_token = 'BQBKw75DjT9LOdcCyZcpxZYQy3gq8ihLrAopO0xnW4Oc9nMxuzSSho7A9iHsFPVwF3yyeGlvUt1dMBUxG2s3n0WL8eOOYTeJAFgDxosnEsmbB-XruTea-rK_dtbcw5FlArZnX9t8GKg0wsdyaAzO7gv4HznCO6ruA075vxUPS9eGEwz30n1HG0hH8A0iDUesOey6R6bWwXckVlWz55vYsA1w1BjM'
header = {'Accept': 'application/json', 'Authorization': 'Bearer %s' % bearer_token}

# get json from file
with open('kimonoData.json') as json_data:
    data = json.load(json_data)

# each song gets encoded to utf-8 for better searching and less errors
for song in data['results']['collection1']:
    song = "%s %s" % (song['track']['text'].encode('utf-8'), song['artist']['text'].encode('ascii', 'replace'))
    songs.append(song)

for song in songs:
  if "Jos?" in song:
      k = song.split(" ")[:-2]
      k.append('Jose Gonzalez')
      print k
      song = ' '.join(str(s) for s in k)

  song_url = "https://api.spotify.com/v1/search?type=track&q=%s&limit=1" % song
  get_song = requests.get(song_url)
  if get_song.json()['tracks']['total'] > 0:
    print "something found..."
    print get_song.json()
    track_id = get_song.json()['tracks']['items'][0]['uri']
    payload = {'uris': str(track_id)}
    print track_id
    add_song = requests.post('https://api.spotify.com/v1/users/usmanity/playlists/3QucpMRXHf9dR1HVvPRZOC/tracks?uris=%s' % track_id, headers=header)
    print add_song
  else:
    print "did not find %s" % song
    unfound.append(song + "\n")

unfound_songs = open('unfound.txt', 'w')

for song in unfound:
    print "writing %s to file" % song
    unfound_songs.write(song)

unfound_songs.close()

get_songs_again = open('unfound.txt', 'r')

for line in get_songs_again:
    print line
