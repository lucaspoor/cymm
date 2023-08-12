
import requests
import html5lib
from bs4 import BeautifulSoup
import re


soup = BeautifulSoup(open("a.html").read(), 'html5lib')

quotes = soup.find_all('div', {'class': 'project-item'})
i=0

for quote in quotes:
    i = i + 1
    img = quote.find('img')
    text = re.sub(r"\n", " ", quote.find('h2').text)
    author = quote.find('p').text.replace("\n"," ").replace("\s+"," ")
    descrip = re.sub(r"\s+"," ", author)
    print('{')
    print(f'"id": {i},')
    print(f'"foto": "{img["src"]}",')
    print(f'"nombre": "{text.capitalize()}",')
    print(f'"descripcion": "{descrip.strip().capitalize()}"')
    print('},')
