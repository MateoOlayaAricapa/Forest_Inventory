#---------------------------------------------------------------------
# Using python image for back end project
#---------------------------------------------------------------------
FROM python:3.9

#---------------------------------------------------------------------
# Defining the folder name in the directory that will contain all the 
# project files when the container is created
#---------------------------------------------------------------------
WORKDIR /python-flask-backend

#---------------------------------------------------------------------
# Defining execution file for the back end 
# Defining the host port
#---------------------------------------------------------------------
ENV FLASK_APP index.py
ENV FLASK_RUN_HOST 0.0.0.0

#---------------------------------------------------------------------
# Copying the requirements file and installing dependencies
#---------------------------------------------------------------------
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

#---------------------------------------------------------------------
# Copying the application source code
#---------------------------------------------------------------------
COPY . .

#---------------------------------------------------------------------
# Command to start the back end
#---------------------------------------------------------------------
EXPOSE 5000
CMD ["flask", "run"]