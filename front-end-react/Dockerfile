#---------------------------------------------------------------------
# Using node image for the project
#---------------------------------------------------------------------
FROM node:20

#---------------------------------------------------------------------
# Defining the folder name in the directory that will contain 
# all the react project files when the container is created
#---------------------------------------------------------------------
WORKDIR /front-end-react

#---------------------------------------------------------------------
# Indicating that you copy the package files to the previously created 
# folder for the project to work
#---------------------------------------------------------------------
COPY package*.json .

#---------------------------------------------------------------------
# Running command to install all the dependencies that the project needs
#---------------------------------------------------------------------
RUN npm install

#---------------------------------------------------------------------
# Copying the other files that the project has such as: public, src, etc. 
# to the folder created in the directory.
#---------------------------------------------------------------------
COPY . .

#---------------------------------------------------------------------
# Command to build the application in production
#---------------------------------------------------------------------
RUN npm run build

#---------------------------------------------------------------------
# Indicating the port through which the container will communicate. 
# Additionally, there is the entry point to run the application
#---------------------------------------------------------------------
EXPOSE 3000
CMD [ "npm", "start" ]