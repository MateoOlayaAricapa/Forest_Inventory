from src.Database.connection_db import db #Import object db that represents to the connection

#--------------------------------------------------------------------
# Creating class that represents entity Query in BD
#--------------------------------------------------------------------
class Query(db.Model):

    #Attributes of the entity
    id_query = db.Column(db.Integer, primary_key=True)
    creator_username = db.Column(db.String(100), nullable=False)
    name_query = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    create_at = db.Column(db.DateTime, nullable=False)
    delete_at = db.Column(db.Boolean, default=False, nullable=False)
    endpoint = db.Column(db.String(250), nullable=False)

    #Constructor
    def __init__(self, creator_username, name_query, description, create_at, delete_at, endpoint):
        self.creator_username = creator_username
        self.name_query = name_query
        self.description = description
        self.create_at = create_at
        self.delete_at = delete_at
        self.endpoint = endpoint
