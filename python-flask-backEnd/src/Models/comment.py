from src.Database.connection_db import db #Import object db that represents to the connection

#--------------------------------------------------------------------
# Creating class that represents entity Comment in BD
#--------------------------------------------------------------------
class Comment(db.Model):

    #Attributes from entity
    id_comment = db.Column(db.Integer, primary_key=True)
    id_query = db.Column(db.Integer, db.ForeignKey('query.id_query'), nullable=False)
    username = db.Column(db.String(50), nullable=False)
    content = db.Column(db.Text, nullable=False)
    create_at = db.Column(db.DateTime, nullable=False)
    delete_at = db.Column(db.Boolean, default=False, nullable=False)

    #Constructor
    def __init__(self, id_query, username, content, create_at, delete_at):
        self.id_query = id_query
        self.username = username
        self.content = content
        self.create_at = create_at
        self.delete_at = delete_at