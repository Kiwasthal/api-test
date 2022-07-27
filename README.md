# api-test

A simple project, regarding making API requests

Using the fetch mehtod we get the data we desire for the server's response. Afterwars we follow the data's path (data.images.original.url) to get source we will assign to our html image element. Added to the end of our promise chain is a .catch , in case Giphy us unable to find any gifts with the searched keyword, producing an error message.

The user can make multiple API requests , through the giphy API.
