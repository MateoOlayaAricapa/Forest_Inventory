from flask_sqlalchemy import SQLAlchemy
from decouple import config #Package for environment variables

#--------------------------------------------------------------------------------------------------------
# function that stablishes the connection with DB
# It's used SQLAlchemy for that connection
#--------------------------------------------------------------------------------------------------------
def connection_db(app):
    
    app.config["SQLALCHEMY_DATABASE_URI"] = 'postgresql://postgres:1234@localhost:5432/ForestInventory'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    db = SQLAlchemy(app)

    return db