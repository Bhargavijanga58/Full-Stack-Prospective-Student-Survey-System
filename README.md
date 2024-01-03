README
AWS RDS Database Creation
Steps

Log in to the AWS Management Console and select RDS from the list of AWS Services. Click on the Launch a DB Instance button.
Choose standard create, select the MySQL radio button, and opt for the AWS Free Usage Tier template.
Declare a name, username, and password for your database.
In the instance configuration, choose db.t2.micro, and make it public access.
On the Advanced settings page, create a new Security Group for RDS security. Copy the DB Instance Identifier for the Database Name.
Click Launch DB Instance. Once active, view your DB instances to get the database Endpoint.

Configure Security Group

Click on Security Groups, navigate to the EC2 Console, and edit the inbound rules for the created Security Group.
Open up the RDS to all types of traffic, on all protocols, on all ports, from any IP address.
Save the modified access rules.

MySQL Workbench Connection

Configure MySQL Workbench to connect to the Amazon RDS MySQL DB using the provided endpoint.

Angular Installation

Open the command prompt and navigate to the location for installing Angular.
Install Node.js from nodejs.org and execute the following commands:

npm install -g @angular/cli
ng new angular


Install Bootstrap: npm install bootstrap
Generate components for Home, Survey, and All Surveys.
Generate a service for making REST API calls: ng generate service restcall
Run ng serve to execute the application at http://localhost:4200/.

Backend SpringBoot Application

Create a Spring Boot application at https://start.spring.io/.
Generate and import the project into Eclipse.
Create packages: Application, Controller, Model, Repository, and write code accordingly.
Configure application.properties for AWS RDS database connection.
Build a JAR file using Maven: Right-click project > Run As > Maven Build > Goals: package.
Run HW3Application.java on the server as a Java application.

Docker Image Creation for Angular and SpringBoot
Angular

Create a DockerHub account and a repository for Angular.
Create a Dockerfile in the Angular folder.
Build and run the Angular Docker image on the AWS EC2 instance.
Tag and push the image to DockerHub.

SpringBoot

Create a Dockerfile from the JAR file of the SpringBoot application.
Build and run the SpringBoot Docker image on the AWS EC2 instance.
Tag and push the image to DockerHub.

AWS EC2 Instance Creation

Log in to the AWS console and create an EC2 instance for Angular and SpringBoot.
Configure security groups to allow ports 443, 80, 8080, 22 to 0.0.0.0/0.
Install Docker on the EC2 instance.
Create instances, install Docker, and establish a connection.

Installation of Rancher

Install Rancher on the Angular EC2 instance: docker run -d --restart=unless-stopped -p 80:80 -p 443:443 rancher/rancher.
Access Rancher dashboard using the public IPv4 address.
Create a cluster and add a template for AWS EC2.
Create an IAM user in AWS with AdministratorAccess for cluster creation.
Configure the AWS credentials in Rancher and create the cluster.
Deploy Angular and SpringBoot applications on the Rancher cluster.

MySQL Workbench to Connect to Amazon RDS MySQL DB

Provide the Amazon RDS MySQL endpoint in MySQL Workbench.
Connect to the MySQL server hosted on AWS.

Docker Image Creation Summary

Create a DockerHub account and repositories for Angular and SpringBoot.
Build Docker images for Angular and SpringBoot applications.
Run Docker images on the AWS EC2 instance.
Tag and push Docker images to DockerHub.

Summary
Follow these comprehensive steps to set up AWS RDS, Angular, SpringBoot, Docker images, and Rancher for a complete application deployment on AWS.
