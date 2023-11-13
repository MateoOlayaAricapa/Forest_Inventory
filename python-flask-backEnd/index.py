from src import app #Import app
from src.Database.connection_db import db #Import object db that represents to the connection
from decouple import config #Package for environment variables

with app.app_context():
    db.create_all()

#--------------------------------------------------------------------------------------------------------
#Running the server
#--------------------------------------------------------------------------------------------------------
if __name__ == '__main__':
    app.run(debug=True, port=config('MY_PORT_SERVER'))