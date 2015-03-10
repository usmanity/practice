import oauth2 as oauth
import urlparse

consumer_key    = 'f7723c8b67714b9e86669cef4d88d2d8'
consumer_secret = 'd8c7352ff6fb416fb06e1cf597db43ea'

consumer = oauth.Consumer(consumer_key, consumer_secret)
client = oauth.Client(consumer)

request_token_url      = 'https://api.linkedin.com/uas/oauth/requestToken'
resp, content = client.request(request_token_url, "POST")

 
request_token = dict(urlparse.parse_qsl(content))


print "Go to the following link in your browser:"
print "%s?oauth_token=%s" % (authorize_url, request_token['oauth_token'])
print 

accepted = 'n'
while accepted.lower() == 'n':
    accepted = raw_input('Have you authorized me? (y/n) ')
oauth_verifier = raw_input('What is the PIN? ')

