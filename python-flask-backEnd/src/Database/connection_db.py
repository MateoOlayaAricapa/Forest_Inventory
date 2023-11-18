from flask_sqlalchemy import SQLAlchemy #Import SQLAlchemy
from decouple import config #Package for environment variables

db = SQLAlchemy()

#--------------------------------------------------------------------------------------------------------
# Function that stablishes the connection with DB
# It's used SQLAlchemy for that connection
#--------------------------------------------------------------------------------------------------------
def init_app(app):
    app.config["SQLALCHEMY_DATABASE_URI"] = 'postgresql://postgres:1234@localhost:5432/ForestInventory'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)