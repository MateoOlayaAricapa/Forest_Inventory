from flask import Flask #Import flask to environment
from src.Routers import query_routers, comment_routers, bigQuery_routers #Import routers
from src.Database.connection_db import init_app  # Import SQLAlchemy instance and init_app function
from flask_cors import CORS #Import CORS

#--------------------------------------------------------------------------------------------------------
# Create object app
#--------------------------------------------------------------------------------------------------------
app = Flask(__name__)


#--------------------------------------------------------------------------------------------------------
# Configuring CORS
#--------------------------------------------------------------------------------------------------------
cors = CORS(app, resources={
    r"/query/*": {"origins": "http://localhost:3000"},
    r"/comment/*": {"origins": "http://localhost:3000"},
    r"/bigQuery/*": {"origins": "http://localhost:3000"}
})

#--------------------------------------------------------------------------------------------------------
# Stablishes params for connection with DB
#--------------------------------------------------------------------------------------------------------
init_app(app)

#--------------------------------------------------------------------------------------------------------
#EndPoints for each models
#--------------------------------------------------------------------------------------------------------
app.register_blueprint(query_routers.query, url_prefix='/query') #Model query
app.register_blueprint(comment_routers.comment, url_prefix='/comment') #Model comment
app.register_blueprint(bigQuery_routers.bigQuery, url_prefix='/bigQuery') #BigQuery dataset public

