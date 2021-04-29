# Mail

## Models
This project contains just two models: User and Email
The User model is the default django user model to register users.

The Email model contains all the data of a basic message.
the serializer  function puts all the data in a table format to be put in a Json object.

The API routes can be seen in the "mail/urls.py" file. Each API route returns a Json object rather than an HTML response
