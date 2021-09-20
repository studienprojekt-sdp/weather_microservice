# weather_microservice
Service to return weather paramaters from a certain location

**Create the image**

create with: docker build . -t <image_name>

**Start the container and let it run in the background**

start with: docker run -dit --name<container_name> <image_name>

**Enter the shell of the specified container to run the commands**

exec with: docker exec -it <container_name> bash

**Send a request for the current time (timezone is optional)**

send request with: node zeitservice <timezone>
