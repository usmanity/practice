import requests
import requests.auth
from flask import Flask
import urllib

app = Flask(__name__)

@app.route('/')
@app.route('/callback')

def callback():
  code = request.args.get('code')
  return "got an access token! %s" % get_token(code)

def get_token(code):
  client_auth = requests.auth.HTTPBasicAuth(client_id, client_secret)
  post_data = {"grant_type": "authorization_code",
               "code": code,
               "redirect_uri": local}
  response = requests.post(access_url, auth=client_auth, data=post_data)
  token_json = response.json()
  return token_json['access_token']

def homepage():
  text = "<a href='%s'>Authenticate with Runkeeper</a>"
  return text % make_authorization_url()

def make_authorization_url():
  # from uuid import uuid4
  # state = str(uuid4())
  # save_created_state(state)
  client_id = "8af79be8692d4d4183c72d8930b5175e"
  client_secret = "4b7542cd0a6443bead42f7382413c514"
  auth_url = "https://runkeeper.com/apps/authorize/?"
  access_url = "https://runkeeper.com/apps/token/"

  local = "http://localhost:3000/callback"
  params = {'client_id': client_id,
            'response_type': 'code',
            # 'state': state,
            'redirect_uri': local}
  url = auth_url + urllib.urlencode(params)
  return url

def saved_created_state(state):
  pass

def is_valid_state(state):
  return True

if __name__ == '__main__':
  app.run(debug=True, port=3000)
