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
