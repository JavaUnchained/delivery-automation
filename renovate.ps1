Clear-Host;
Set-Location C:\Users\andre\IdeaProjects\foodAngularUI\;
ng build
Set-Location C:\Users\andre\IdeaProjects\foodDelivery-env\docker\;
Remove-Item .\angular-image\foodAngularUI -Recurse
Copy-Item "C:\Users\andre\IdeaProjects\foodAngularUI\dist\foodAngularUI\" ".\angular-image\" -Recurse
Remove-Item .\backend-images\food-delivery.jar;
Set-Location C:\Users\andre\IdeaProjects\bercut-checkouts\Software-Architecture\foodeliver\;
mvn clean install
Set-Location C:\Users\andre\IdeaProjects\foodDelivery-env\docker\;
Copy-Item C:\Users\andre\IdeaProjects\bercut-checkouts\Software-Architecture\foodeliver\target\foodeliver-0.0.1-SNAPSHOT.jar .\backend-images ;
Rename-Item .\backend-images\foodeliver-0.0.1-SNAPSHOT.jar food-delivery.jar;
docker-compose down;
docker rmi -f food-delivery;
docker-compose up --build -d --scale frontend=3 ;
docker ps;

# before launche use commands
# wsl -d docker-desktop
# sysctl -w vm.max_map_count=262144
# This one need to elastic

# swager
# http://localhost:8080/swagger-ui.html
# kibana case
# new pattern -> fluentd-* -> no use timestamp
# kibana
# http://localhost:5601/