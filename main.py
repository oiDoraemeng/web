import requests

response = requests.get("http://books.toscrape.com/")
print(response.text)