from flask_socketio import SocketIO #Importing library socketio

socketio = SocketIO(cors_allowed_origins="*") #Creating object socketio

#--------------------------------------------------------------------------------------------------------
# Function that passes the app to the socketio
#--------------------------------------------------------------------------------------------------------
def init_socket(app):
    socketio.init_app(app)