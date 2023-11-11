from flask import Flask #Import flask to environment
from Database import connection_db #Import function connection DB

# Create object app
app = Flask(__name__)

# Stablishes connection
connection_db(app)