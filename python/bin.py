from requests_oauthlib import OAuth2Session
from flask import Flask, request, redirect, session, url_for
from flask.json import jsonift


client_id = "8af79be8692d4d4183c72d8930b5175e"
client_secret = "4b7542cd0a6443bead42f7382413c514"
auth_base_url = "https://runkeeper.com/apps/authorize/?"
token_url = "https://runkeeper.com/apps/token/"
local = "http://localhost:3000/callback"

@app.route('/login')
def login():
  runkeeper = OAuth2Session(client_id)
  auth_url, state = runkeeper.authorization_url(auth_base_url)

  session['oauth_state'] = state
  return redirect(authorization_url)

@app.route('/callback')
def callback():
  runkeeper = OAuth2Session(client_id, state=session['oauth_state'])
  token = runkeeper.fetch_token(token_url, client_secret=client_secret,
                                authorization_response=request.url)
  return jsonify(runkeeper.get('https://api.runkeeper.com/user').json())
