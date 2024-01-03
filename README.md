# Project Name

## AWS RDS Database Creation

### Steps

1. Log in to the AWS Management Console and select RDS from the list of AWS Services. Click on the Launch a DB Instance button.
2. Choose standard create, select the MySQL radio button, and opt for the AWS Free Usage Tier template.
3. Declare a name, username, and password for your database.
4. In the instance configuration, choose db.t2.micro, and make it public access.
5. On the Advanced settings page, create a new Security Group for RDS security. Copy the DB Instance Identifier for the Database Name.
6. Click Launch DB Instance. Once active, view your DB instances to get the database Endpoint.

### Configure Security Group

7. Click on Security Groups, navigate to the EC2 Console, and edit the inbound rules for the created Security Group.
8. Open up the RDS to all types of traffic, on all protocols, on all ports, from any IP address.
9. Save the modified access rules.

### MySQL Workbench Connection

10. Configure MySQL Workbench to connect to the Amazon RDS MySQL DB using the provided endpoint.

## Angular Installation

1. Open the command prompt and navigate to the location for installing Angular.
2. Install Node.js from nodejs.org and execute the following commands:
   - `npm install -g @angular/cli`
   - `ng new angular`
3. Install Bootstrap: `npm install bootstrap`
4. Generate components for Home, Survey, and All Surveys.
5. Generate a service for making REST API calls: `ng generate service restcall`
6. Run `ng serve` to execute the application at http://localhost:4200/.

## Backend SpringBoot Application

1. Create a Spring Boot application at https://start.spring.io/.
2. Generate and import the project into Eclipse.
3. Create packages: Application, Controller, Model, Repository, and write code accordingly.
4. Configure application.properties for AWS RDS database connection.
5. Build a JAR file using Maven: Right-click project > Run As > Maven Build > Goals: package.
6. Run HW3Application.java on the server as a Java application.

## Docker Image Creation for Angular and SpringBoot

### Angular

1. Create a DockerHub account and a repository for Angular.
2. Create a Dockerfile in the Angular folder.
3. Build and run the Angular Docker image on the AWS EC2 instance.
4. Tag and push the image to DockerHub.

### SpringBoot

5. Create a Dockerfile from the JAR file of the SpringBoot application.
6. Build and run the SpringBoot Docker image on the AWS EC2 instance.
7. Tag and push the image to DockerHub.

## AWS EC2 Instance Creation

1. Log in to the AWS console and create an EC2 instance for Angular and SpringBoot.
2. Configure security groups to allow ports 443, 80, 8080, 22 to 0.0.0.0/0.
3. Install Docker on the EC2 instance.
4. Create instances, install Docker, and establish a connection.

## Installation of Rancher

1. Install Rancher on the Angular EC2 instance: `docker run -d --restart=unless-stopped -p 80:80 -p 443:443 rancher/rancher`.
2. Access Rancher dashboard using the public IPv4 address.
3. Create a cluster and add a template for AWS EC2.
4. Create an IAM user in AWS with AdministratorAccess for cluster creation.
5. Configure the AWS credentials in Rancher and create the cluster.
6. Deploy Angular and SpringBoot applications on the Rancher cluster.

## MySQL Workbench to Connect to Amazon RDS MySQL DB

1. Provide the Amazon RDS MySQL endpoint in MySQL Workbench.
2. Connect to the MySQL server hosted on AWS.

## Docker Image Creation Summary

1. Create a DockerHub account and repositories for Angular and SpringBoot.
2. Build Docker images for Angular and SpringBoot applications.
3. Run Docker images on the AWS EC2 instance.
4. Tag and push Docker images to DockerHub.

## Summary

Follow these comprehensive steps to set up AWS RDS, Angular, SpringBoot, Docker images, and Rancher for a complete application deployment on AWS.

