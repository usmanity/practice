import spotipy

spotify = spotipy.Spotify()

results = spotify.search('veneer', limit=30)

for i, t in enumerate(results['tracks']['items']):
    print ' ', i+1, t['name']
