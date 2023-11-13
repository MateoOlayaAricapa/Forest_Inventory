from flask import Flask #Import flask to environment
#from src.Routers import query_routers #Import routers
from src.Database.connection_db import init_app  # Import SQLAlchemy instance and init_app function

#--------------------------------------------------------------------------------------------------------
# Create object app
#--------------------------------------------------------------------------------------------------------
app = Flask(__name__)

#--------------------------------------------------------------------------------------------------------
# Stablishes params for connection with DB
#--------------------------------------------------------------------------------------------------------
init_app(app)

#--------------------------------------------------------------------------------------------------------
#EndPoints for each models
#--------------------------------------------------------------------------------------------------------
#app.register_blueprint(query_routers.query, url_prefix='/query') #Model query

