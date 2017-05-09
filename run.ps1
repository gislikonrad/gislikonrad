$path = [IO.Path]::GetDirectoryName($MyInvocation.MyCommand.Path)
Set-Location -Path $path
Write-Host 'Building'
$ErrorActionPreference = 'Continue'
ng build --prod
Write-Host 'Stopping container'
docker stop gislikonrad
Write-Host 'Removing container'
docker rm gislikonrad
Write-Host 'Removing container image'
docker rmi gislikonrad/gislikonrad:poop
Write-Host 'Building new container'
docker build -q -t gislikonrad/gislikonrad:poop --build-arg GIT_COMMIT=poop .
Write-Host 'Running container'
docker run --name gislikonrad -p 8080:80 -d --restart=unless-stopped gislikonrad/gislikonrad:poop
