from bs4 import BeautifulSoup
import requests

page = requests.get('https://www.robinhood.com/waitlist/93d0a061-4b50-46c8-89e2-69fefe605760/')
soup = BeautifulSoup(page.text)

print str(soup.h4.strong.get_text())

