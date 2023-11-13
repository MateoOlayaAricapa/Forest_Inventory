from flask import Flask, Blueprint, jsonify, request #Import flask to environment
from src.Models.comment import Comment #Import class from model
from src.Database.connection_db import db #Import object db that represents the connection
from datetime import datetime

comment = Blueprint("comment_blueprint", __name__) #Creating object blueprints

#------------------------------------------------------
# EndPoint post data comment
#------------------------------------------------------
@comment.route("/save", methods=["POST"])
def save_new_comment():

    try:

        dataComment = request.get_json() #Getting data from request petition
        current_date = datetime.now() #Getting current date

        #Creating object of the Comment class that represents the entity
        new_comment = Comment(
            dataComment["id_query"],
            dataComment["username"],
            dataComment["content"],
            current_date,
            dataComment["deleteat"]
        )

        db.session.add(new_comment) #Save data in the DB
        db.session.commit() #Saving changes

        #Return results
        return jsonify({"Messages": "saved data", "id": new_comment.id_comment}), 200

    except Exception as ex:
        print("Erro: " + str(ex))

#------------------------------------------------------
# EndPoint getting all comments that belong to query
#------------------------------------------------------
@comment.route("/data/comments/<idQuery>", methods=["GET"])
def getting_all_comments(idQuery):

    try:

        condition = (Comment.id_query == idQuery) #Condition query
        list_comments = Comment.query.filter(condition).all() #list that has the comments

        def organizing_data(data):

            return {
                "id_comment": data.id_comment,
                "id_query": data.id_query,
                "username": data.username,
                "content": data.content,
                "create_at": data.create_at
            }

        if len(list_comments) == 0:
            #Return results
            return jsonify({"Message": "not found"}), 404
        else:
            #Return results
            return jsonify([organizing_data(data) for data in list_comments]), 200

    except Exception as ex:
        print("Error:" + str(ex))