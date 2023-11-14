from flask import Flask, Blueprint, jsonify, request #Import flask to environment
from google.cloud import bigquery #Import library for bigQuery
from google.oauth2 import service_account
from src.TransformData.transform import transform_data_states_evaluation

bigQuery = Blueprint("bigQuery_blueprint", __name__) #Creating object blueprints

#---------------------------------------------------------------------------------------------
#Function that configures credentials in the client BigQuery
#---------------------------------------------------------------------------------------------
def get_bigquery_client():
    
    #File name that represents the credentials
    key_path = 'cosmic-signer-344116-3b7470c32d18.json'
    
    credentials = service_account.Credentials.from_service_account_file(
        key_path,
        scopes=["https://www.googleapis.com/auth/cloud-platform"],
    )

    client = bigquery.Client(credentials=credentials)

    #Return result
    return client

#---------------------------------------------------------------------------------------------
#Function that connect with dataset public in BigQuery
#---------------------------------------------------------------------------------------------
def connection_dataset(SQL):

    client = get_bigquery_client()
    
    #Execute query in the dataset
    query_job = client.query(SQL)
    results = query_job.result()

    #Return results
    return results

#---------------------------------------------------------------------------------------------
#EndPoint that gets data on this question:
#Which states underwent an area evaluation process between two time periods?
#---------------------------------------------------------------------------------------------
@bigQuery.route("/data/<startYear>/<endYear>", methods=["GET"])
def getting_states_evaluation(startYear, endYear):

    try:

        #Creating custom SQL
        SQL = f"""
            SELECT location_name, start_inventory_year, end_inventory_year, evaluation_description 
            FROM `bigquery-public-data.usfs_fia.population_evaluation` 
            WHERE start_inventory_year = '{str(startYear)}' AND end_inventory_year = '{str(endYear)}'
        """

        results = connection_dataset(SQL) #Getting data

        list_states = [dict(row.items()) for row in results] #Transforming initial data into a list

        if len(list_states) == 0:
            return jsonify({"Messages": "not found"}), 404
        else:
            return jsonify(transform_data_states_evaluation(list_states)), 200

    except Exception as ex:
        print("Error:" + str(ex))
        return jsonify({"error": "Internal Server Error"}), 500