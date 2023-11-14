from flask import jsonify
import pandas as pd

#---------------------------------------------------------------------------------------------
#Function that applies transformation to the queried data
#---------------------------------------------------------------------------------------------
def transform_data_states_evaluation(data):

    try:

        dataset = pd.DataFrame(data) #Transform data in dataFrame

        #Creating new dataset with the import columns
        new_dataset = dataset.loc[:, ["location_name", "start_inventory_year", "end_inventory_year", "evaluation_description"]]

        states = new_dataset["location_name"] #Taking column that indicating state name
        states_totalEvaluation = states.value_counts() #Getting total evaluation to each state

        states_name = list(states_totalEvaluation.index) #Converting index that represent each state into a list
        totalEvaluation = list(states_totalEvaluation.values) #Converting values that represent each total evaluation into a list

        type_evaluations = [] #List that save all type evaluations for each state

        #for cycle to carry out a process to extract all the evaluations made to each state
        for stateName in states_totalEvaluation.index:

            dataset_state = new_dataset[new_dataset["location_name"] == stateName] #Taking out a new dataframe with only the data of a state
            dataset_state["evaluation_description"] = dataset_state["evaluation_description"].str.split(':').str[2].str.strip() #After the second ":" the evaluations are extracted from the column
            evaluations = dataset_state['evaluation_description'].str.cat(sep=', ') #Concatenated all types of evaluations
            type_evaluations.append(evaluations)

        transformed_data = [] #list that save all transformed data
        
        for index, value, evaluations in zip(states_name, totalEvaluation, type_evaluations):
            transformed_data.append({"state": index, "total_evaluations": int(value), "evaluations": evaluations})

        #Return result
        return transformed_data

    except Exception as ex:
        print("Error: " + str(ex))
        return jsonify({"error": "Internal Server Error", "type": str(ex)}), 500