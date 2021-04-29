# Mail

This is my implementation of an emailing web application which works through a simple API created using django URLs and Json library. It is a single page application which uses javascript to render most of the content.

## Javascript Functions:
The Frontend is handled by the 'static/mail/inbox.js'. It is responsible for rendering different mail boxes and message content. It uses GET method to get the required email message through the API route

The Backend is handled by the 'static/mail/send.js'. It uses POST method to add a new Json object to the database. While marking the emails as Read, a PUT request is used to update an existing Json object

## Models
This project contains just two models: User and Email
The User model is the default django user model to register users.
AUTH_MODEL='mail.User' has to be specified in the project3/settings.py file

The Email model contains all the data of a basic message.
the serializer  function puts all the data in a table format to be put in a Json object.

The API routes can be seen in the "mail/urls.py" file. Each API route returns a Json object rather than an HTML response
