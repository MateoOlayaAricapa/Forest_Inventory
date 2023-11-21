from flask_sqlalchemy import SQLAlchemy #Import SQLAlchemy
from decouple import config #Package for environment variables
from src.Config.config import DATABASE_CONNECTION_URI #Importing URI connection

db = SQLAlchemy()

#--------------------------------------------------------------------------------------------------------
# Function that stablishes the connection with DB
# It's used SQLAlchemy for that connection
#--------------------------------------------------------------------------------------------------------
def init_app(app):
    app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_CONNECTION_URI
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)