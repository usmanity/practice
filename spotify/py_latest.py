import base64
from bs4 import BeautifulSoup
import json
import requests
import re
import string
from twilio.rest import TwilioRestClient

# get page in xml from rss url
page = requests.get('http://pitchfork.com/rss/reviews/best/tracks/')
content = page.content

# make a soup out of xml rss page content
soup = BeautifulSoup(page.content)

songs = []

def get_songs():
  global songs
  pattern = re.compile('([^\s\w]|_)+')
  for item in soup.find_all('item'):
     song = item.title.string
     song = song.c
     song = pattern.sub('', song).lower()
     song = song.replace(' ', '+')
     songs.append(song)
  return songs

print songs

songs = get_songs()
refresh_token = 'AQB0R6HeC87u99cttvDet8zhvmAHETkqQOhiqxNWhtP9U6Te2Q1XBI-5vGbf3lAjQShi7CDUtRStQjnJvmkdgf2mcNLpKYKa1u77cjR3eSNW8uoAtzbLBChH-q7-MUS8rkw>'

base64_client = base64.b64encode('f7723c8b67714b9e86669cef4d88d2d8:d8c7352ff6fb416fb06e1cf597db43ea')

auth_header = {'Authorization': 'Basic %s' % base64_client }
access_token = requests.post('https://accounts.spotify.com/api/token', data={'grant_type': 'refresh_token', 'refresh_token': refresh_token}, headers=auth_header)
print access_token.content

bearer_token = 'BQAI8D1NjyiLTwyIpU7s7LHiqTtQlbk2UvaAChGYk2oI4tp4PntOQ-KIxxU4nUV8a51TWwClcWiITHHjwGpsCyQM5dLua9jdO5joi-2FpcCMqiSGcvtxwA0SwlvDxpbeg7fQi3pXCTgrryRp3pOAteRIU5-AgVdiG7CFWCWSfMwI_bCpPvqEcnr1ioy3W81Gl2IWvvwXgy78Dtv7he_SW9ye162D'

# print songs[0]
header = {'Accept': 'application/json', 'Authorization': 'Bearer %s' % bearer_token}

for song in songs:
  song_url = "https://api.spotify.com/v1/search?type=track&q=%s&limit=1" % song
  get_song = requests.get(song_url)
  if get_song.json()['tracks']['total'] > 0:
    print "something found..."
    song_id = get_song.json()['tracks']['items'][0]['id']
    track_id = 'spotify:track:%s' % song_id
    payload = {'uris': str(track_id)}
    print track_id
    add_song = requests.post('https://api.spotify.com/v1/users/usmanity/playlists/0lMXbqHG5aNCRkYcFH0sta/tracks?uris=%s' % track_id, headers=header)
    print add_song.content
  else:
    continue


twilio_sid = 'ACe35f4729118e6fc7973751016dca54d1'
twilio_token = 'f1d2a7acf71b8feed25f3be237352e94'

client = TwilioRestClient(twilio_sid, twilio_token)

client.messages.create(
	to="4153056070",
	from_="+14152339100",
	body="Updated playlist, now has more songs",
)
