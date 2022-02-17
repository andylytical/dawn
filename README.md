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

<table>
  <tr>
    <th>Step</th>
    <th>Bash</th>
    <th>Windows Powershell</th>
  </tr>
  <tr>
    <td colspan=3>
      Pull the new image from https://hub.docker.com/r/andylytical/dawn/tags
    </td>
  </tr>
  <tr>
    <td>Start Container</td>
    <td>
      docker images -q andylytical/dawn | xargs docker run -d -l testdawn -p 8080:80
    </td>
    <td>
      docker images -q andylytical/dawn | %{ docker run -d -l testdawn -p 8080:80 $_ }
    </td>
  </tr>
  <tr>
    <td colspan=3>
      Browse to <a href="http://localhost:8080">http://localhost:8080</a> and do any testing
    </td>
  </tr>
  <tr>
    <td>Stop Container</td>
    <td>
      docker ps -q -f 'label=testdawn' | xargs docker stop
    </td>
    <td>
      docker ps -q -f 'label=testdawn' | %{ docker stop $_ }
    </td>
  </tr>
  <tr>
    <td>Remove Container</td>
    <td>
      docker ps -q -f "status=exited" | xargs docker rm
    </td>
    <td>
      docker ps -q -f "status=exited" | %{ docker rm $_ }
    </td>
  </tr>
  <tr>
    <td>Remove Image</td>
    <td>
      docker images -q andylytical/dawn | xargs docker rmi
    </td>
    <td>
      docker images -q andylytical/dawn | %{ docker rm $_ }
    </td>
  </tr>
</table>

# General cleanup
* Stop all running containers
  * `docker ps -q | %{ docker stop $_ }`
* Remove any old images 
  * `docker images -q | %{ docker rmi -f $_ }`
* Clean up all images, volumes, networks, etc.
  * `docker system prune -a -f --volumes`
