from src import app 
from decouple import config #Package for environment variables

#Running the server
if __name__ == '__main__':
    app.run(debug=True, port=config('MY_PORT_SERVER'))