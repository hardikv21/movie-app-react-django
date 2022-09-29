# movie-app-react-django

## Setup the project

* First, clone the project
  - Clone the repo by opening the terminal
  ```
    git clone https://github.com/hardikv21/movie-app-react-django.git
  ```
  - Open IDE from that cloned folder

* Second, install dependencies and run the backend
  - After opening the IDE, open terminal from that path, and run the commands
  ```
    cd .\backend\
    pip install -r requirements.txt
  ```
  - Then create ".env" file in the same level with 2 variables: "SECRET_KEY", "PASSWORD"
  - To get value for secret key, run below command and copy and paste the value
  ```
    python -c "import secrets; print(secrets.token_urlsafe())"
  ```
  - For the password, follow the "Third, set the database" step
  - Lastly, run these commands to run the server correctly
  ```
    python .\manage.py migrate
    python .\manage.py runserver 
  ```

* Third, set the database
  - Install postgreSQL using its documentation with pgAdmin - https://www.postgresql.org/
  - After that create the database with a name "movieDB" and desired password and also copy that password to the ".env" file, "PASSWORD" field
  - Make sure this database uses "5432" port while running
  - Once database created, use dump which is located at the root level of the "backend" folder with the name "backup" to restore the data
  - Follow this instructions to restore the data in pgAdmin - https://www.pgadmin.org/docs/pgadmin4/development/restore_dialog.html
  
* Fourth, , install dependencies and run the frontend
  - Install dependencies
  ```
    cd ..\frontend\
    npm install
  ```
  - Then create ".env" file in the same level with 1 variable: "REACT_APP_API_KEY"
  - Get value from this url - http://www.omdbapi.com/apikey.aspx and paste that value in the ".env" file
  - Run frontend
  ```
  npm start
  ```

## Website look

* OMDB MOVIES Tab
  - ![image](https://user-images.githubusercontent.com/43430462/193110298-5d55777c-1bed-429f-841f-8ef6c90efb80.png)
  - ![image](https://user-images.githubusercontent.com/43430462/193110484-21ca2b2a-6e81-485c-965d-c3e757196029.png)

* BACKEND MOVIES Tab
  - ![image](https://user-images.githubusercontent.com/43430462/193125589-693558e4-721b-4dc8-a941-d99e7aa95c6e.png)
  - ![image](https://user-images.githubusercontent.com/43430462/193125674-430741f2-6272-4885-90b1-6ed056c7bd49.png)
  - ![image](https://user-images.githubusercontent.com/43430462/193125842-29c01457-94f8-46eb-8d86-6b3f23f8803a.png)
  - ![image](https://user-images.githubusercontent.com/43430462/193125932-da9715ca-6869-4047-8eb7-126ad6b8c906.png)
  - ![image](https://user-images.githubusercontent.com/43430462/193126116-e9f95c6d-17a1-4b7a-9dbc-20b74022ee3a.png)
  - ![image](https://user-images.githubusercontent.com/43430462/193126229-30364105-4381-4446-be8c-7aac23f7eaca.png)
  - ![image](https://user-images.githubusercontent.com/43430462/193126329-4d06215e-a9d3-4f2e-8b55-eda94d7ba0c3.png)
  
