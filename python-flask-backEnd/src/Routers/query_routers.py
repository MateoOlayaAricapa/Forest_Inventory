from flask import Flask, Blueprint, jsonify, request #Importing flask to environment
from src.Models.query import Query #Importing class from model
from src.Database.connection_db import db #Importing object db that represents the connection
from src.Socket_IO.socket import socketio #Importing object socketio
from datetime import datetime 

query = Blueprint("query_blueprint", __name__) #Creating object blueprints

#------------------------------------------------------
# EndPoint post data query
#------------------------------------------------------
@query.route("/save", methods=["POST"])
def save_new_query():

    try:

        dataQuery = request.get_json() #Getting data from request petition
        current_date = datetime.now() #Getting current date 

        #Creating object of the Query class that represents the entity
        new_query = Query(
            dataQuery['userName'], 
            dataQuery['nameQuery'], 
            dataQuery['description'],
            current_date,
            dataQuery['deleteat'],
            dataQuery['endPoint']
        )
        
        db.session.add(new_query) #Save data in the DB
        db.session.commit() #Saving changes

        #Organizing data query for socket.io
        querySocket = {
            "id_query": new_query.id_query,
            "creator_username": new_query.creator_username,
            "name_query": new_query.name_query,
            "description": new_query.description,
            "createat": str(new_query.create_at),
            "endpoint": new_query.endpoint,
        }

        socketio.emit('save_new_query', querySocket) #Creating event for server to send messages to clients

        #Return results
        return jsonify({"Messages": "saved data", "id": new_query.id_query, "date": new_query.create_at}), 200

    except Exception as ex:
        print("Error: " + str(ex))

#------------------------------------------------------
# EndPoint get all the saved queries
#------------------------------------------------------ 
@query.route("/data/queries", methods=["GET"])
def get_all_queries():

    try:

        list_queries = Query.query.all() #Getting all data

        #Function that takes each data and organizes it as an object json
        def organizing_data(data):

            return {
                "id_query": data.id_query, 
                "creator_username": data.creator_username, 
                "name_query": data.name_query,
                "description": data.description,
                "createat": data.create_at,
                "endpoint": data.endpoint
            }

        if len(list_queries) == 0:
            #Return results
            return jsonify({"Message": "not found"}), 404
        else:
            #Return results
            return jsonify([organizing_data(data) for data in list_queries]), 200

    except Exception as ex:
        print("Error: " + str(ex))