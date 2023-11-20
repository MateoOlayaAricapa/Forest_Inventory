from decouple import config #Package for environment variables

#Importing values of environment variables
user = config("USERNAME_DB")
password = config("PASSWORD")
localhost = config("LOCALHOST_DOCKER")
port = config("PORT_DB")
name_db = config("NAME_DB")

#Creating URI for connection DB
DATABASE_CONNECTION_URI = f"postgresql://{user}:{password}@{localhost}:{port}/{name_db}"
