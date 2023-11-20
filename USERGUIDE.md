# User's Manual

This file will briefly explain how to install the application so that it can be used by other users. It will present a series of **sections indicating important points to consider.**

# Clone project

It's important to initially clone the project from GitHub using the `git clone` project_path command. 

# Back End: Python/Flask

### - File .env:

Within the back end of the application, it is necessary to install an ***".env"*** file in the main root of the folder, where it is possible to place a series of environment variables that will keep the following names:

```
MY_PORT_SERVER=Value
USERNAME_DB=Value
LOCALHOST_DOCKER=Value
PASSWORD=Value
PORT_DB=Value
NAME_DB=Value
```
These are essential for the connection to the ***database***.

![](https://drive.google.com/uc?export=view&id=1VWQQ_mxTl_NeSFehGXrOjnB63kgnu_u6)

### - BigQuery Google Cloud:

There are routes created in the back end that will make requests to a table found in the BigQuery public data store. Therefore, it is essential that a ***.json*** file containing the account credentials is downloaded from the Google Cloud Platform to enable these queries. In addition, this file must be located in the main root of the folder. 
![](https://drive.google.com/uc?export=view&id=1VWQQ_mxTl_NeSFehGXrOjnB63kgnu_u6)
For this example shown in the image, the **".json"** file is named **"cosmic-signer-344116-3b7470c32d18.json"**.

Finally, the name of this file must be copied into the ***"bigQuery_routers.py"*** file found in the ***"Routers"*** folder. **Note:** check the ***"get_bigquery_client"*** function.

Below, an image representing the explained is uploaded:

![](https://drive.google.com/uc?export=view&id=1Ri5y-eQ7c2xh8wSF2BmlCDlph0hmwu4K)

On the other hand, the steps to obtain this ***credentials file*** from Google Cloud will be shown: 

1. You look for the **"API and services"** tab, and then select credentials. 
2. In the option, select the button **"Create credentials"**. 
![](https://drive.google.com/uc?export=view&id=1dfUIpk_95bTgHajakcX6Zb8lLw12S1tu)
3. When pressed, you select **"service account"**.
![](https://drive.google.com/uc?export=view&id=1VkZcy2fYkCZPgA0EyXBdKw_ZO05_IM2h)
4. Subsequently, you enter the requested data. However, in step two, you must select these options: 
![](https://drive.google.com/uc?export=view&id=1qjxB4cgoHtUfH58n4GZjBAR5EvQiwQpM)
5. Finally, press continue and that's it.
6. As a final step, you must log in to the created service account. Then look for the **"keys"** tab to add a key. You must select **".json"**.
![](https://drive.google.com/uc?export=view&id=10JyiNBbudzarY1nNr_jaV43azzm8LU03)

### - Dependencies used:

In case you know which ***dependencies*** were used in the back end developed in Python, they will be presented below:

```
pip install psycopg2
pip install Flask-SQLAlchemy
pip install flask
pip install virtualenv
pip install python-dotenv
pip install python-decouple
pip install google-cloud-bigquery
pip install pandas
pip install flask-cors
pip install flask-socketio
``` 

# Front End: React

In the front end developed with react, only ***`npm install`*** must be used to install all the dependencies used. 

Additionally, all the ***dependencies*** used in the front end will be placed: 

```
npm install -g sass
npm i react-router-dom
npm install @reduxjs/toolkit react-redux
npm install d3
npm i socket.io-client
``` 

# Docker:

Since docker was used to package the entire application, you will only need to run the ***"docker-compose.yml"*** file located in the main folder. Therefore, to accomplish all of the above, the following steps must be followed:

1. Open a CMD terminal, and check that you are in the main folder named ***"Forest_Inventory".***
![](https://drive.google.com/uc?export=view&id=1M5VStANdkOAuxlbiIWSPy7fCxKstk4WG)
2. Place the command `docker compose up`.
![](https://drive.google.com/uc?export=view&id=1-Cu_iTUSagQ0VXHpWzvje4fB9wGVfELM)
3. Check via terminal or docker desktop that the containers have been created with the images corresponding to the application. 
4. Check the status of each container to see if they are on.
![](https://drive.google.com/uc?export=view&id=1CRSBV7lI3H_MXB9dNdTYjnRGx38owJEs)
5. In case they are turned off, turn them on in the following order: **first** turn on the database container (postgreSQL), **second** turn on the back end container, and **third** turn on the front end container.

Following these steps, finally open the web browser, and place the path: http://localhost:9000. With this, you will be able to see the initial interface of the application.
![](https://drive.google.com/uc?export=view&id=1gMbAO0s8SKqOnGnhSOuUdEVSVbUioVbh)

### - Problems with Docker:

In case you have problems with Docker, perform the following: 

1. Check that inside the "front-end-react" folder there is a file called "Dockerfile", and it has the following inside:
```
FROM node:20
WORKDIR /front-end-react
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]
``` 
2. Check that inside the "python-flask-backend" folder there is a file named "Dockerfile", and it has the following inside:
```
FROM python:3.9
WORKDIR /python-flask-backend
ENV FLASK_APP index.py
ENV FLASK_RUN_HOST 0.0.0.0
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["flask", "run"]