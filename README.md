# Setup
To allow multiple tabs opened from a single anchor, pop-ups must be enabled.
## Enable pop-ups
### Chrome
1. Settings
1. Privacy & Security
1. Site Settings
1. Pop-ups and redirects
1. Add site to "Allow" list

# Testing
[Docker image](https://hub.docker.com/r/andylytical/dawn/tags)
will be built automatically on `push`.

## Ensure a clean starting point
Commands below are for Windows Powershell
1. Pull the new image from https://hub.docker.com/r/andylytical/dawn/tags
1. Start the new container, expose container port 80 on localhost port 8080
   1. `docker images -q andylytical/dawn | %{ docker run -d -l testdawn -p 8080:80 $_ }`
1. Browse to http://localhost:8080, do any testing
1. Stop the container
   1. `docker ps -q -f 'label=testdawn' | %{ docker stop $_ }`
1. Remove the image
   1. `docker images -q andylytical/dawn | %{ docker rmi -f $_ }`

# General cleanup
* Stop all running containers
  * `docker ps -q | %{ docker stop $_ }`
* Remove any old images 
  * `docker images -q | %{ docker rmi -f $_ }`
* Clean up all images, volumes, networks, etc.
  * `docker system prune -a -f --volumes`
