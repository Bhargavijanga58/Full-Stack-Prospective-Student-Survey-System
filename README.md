AWS RDS database creation : 
1) Log in to the AWS Management Console and select RDS from the list of AWS Services Click on the Launch a DB Instance button. 
2) On the create database page, choose standard create and click the MySQL radio button.
3) On the templates, select the option to use with the AWS Free Usage Tier.
4) On the same page, you will need to declare a name to identify your database, along with a username and password for accessing it.
5) In the instance configuration, select db.t2.micro. Make it public access.
6) On the Advanced settings page the VPC Security Group(s) field will allow you to configure the security of the RDS using Amazon’s security groups. We will be selecting Create new Security Group instead of relying on any previous security groups that may or may not be set up
7) Under Database Options on the same page, we will copy the DB Instance Identifier for the Database Name. No changes will be made to the backup settings, so click Launch DB Instance after making the change. 
8) After clicking the launch button, you will be taken to a page indicating that your DB Instance is being created. Because we need to configure access to the RDS, click on View Your DB Instances at the bottom of the page. 
9) You will see that the status of your database says “creating” at first. The status will eventually change to “backing-up”, and then to “available” when it is ready to use. You will also see an Endpoint, which is part of the internet address needed to make the database connection.

10) Now we need to configure the security group so that our database can be accessed by Eclipse EE from different IP addresses. Click on Security Groups on the left hand side of the screen. You should get a message stating that you need to go to the EC2 Console to configure your security groups. Click on the hyperlink in that message.
11) You will be taken to a screen that lists all of your current security groups. Click on the security group that was just created from the previous steps. It will have a Group Name similar to rdslaunch-wizard. The bottom of the screen will describe the security rules in place for the RDS, and inbound traffic will originally be limited to just one IP address. You will need to make the inbound rules less restrictive.
12) Click on the Edit button at the bottom of the page under the Inbound tab (as shown above). You will be presented with a dialog window to edit the rules for accessing the database. We will not concern ourselves with security since this is purely for illustrative purposes. As such, we will be opening up our RDS to all types of traffic, on all protocols, on all ports, from any IP address. Use the drop down menus to accomplish this. The modified access rules should look like the following picture when entered. Click Save when you are done. 
13) At this point you have successfully set up a MySQL RDS for remote use through AWS. The next section will involve accessing the RDS through MYSQL WORKBENCH.
14) After it is active, we can find it as below


Angular Installation
1)First you open the command prompt and go to the location for installing the angular in your system.
2)Install Node.js from nodejs.org in the folder you’re in and follow below commands
3)To install angular cli
i)npm install -g @angular/cli
4)For creating new project
ii) ng new angular
5)To install bootstrap styling
iii)npm install bootstrap
6)To install components for Home, take a survey and listing all surveys
iv)ng generate component home or ng g c home
v)ng generate component survey or ng g c survey
vi)ng generate component all surveys or ng g c all surveys
7)To install a service that makes rest api calls
        ix) ng generate service restcall
8)Run “ng serve” for executing the application. You can access your app which is loaded at http://localhost:4200/ 
9)The app will automatically reload if any changes made in the source files. 
10)Will be making changes to angular in further steps

Creating backend SpringBoot application :
1)To create a spring boot application go to https://start.spring.io/ fill all the details as mentioned below.
2)Click on generate and a zip file of the project is downloaded. You can extract and import that project folder as maven project in eclipse.
3)Once the project is created, we go into the SpringBootApplication.java which is in the source folder.
We find that the main class is annotated with @SpringBootApplication. Create the following packages in the main folder: Application , Controller, Model, Repository and wirte the code accordingly.
i)Application : Inside the application package, we created a new application class Hw3Applicatioon.java, here we declare the required fields of the form.

ii)Controller:  A new class named Student Resource is created in this file and it serves as a controller. We begin by adding the annotation @RestController. The POST method (submit Survey) is created so that the Student object can be saved to the database. The Student Repository is able to carry out this. The JPA Repository's built-in save() function requires that a Student object be sent as an argument. We created a GET method to pull student records from the database. We utilized SpringDataJPA's getAllSurveys() function for this. We get a list of items using this.

iii)Model: As Students being my model class, it is annotated with @Entity. We have also annotated @Table and given the name is all_survey. we add the annotation @Id as email is our primary key. 

iv)Repository: This interface extends the JPA Repository interface, where we supply the model name as Model and the string datatype of our private key - email. 

4)In the application.properties file which is located in the resources folder. We write the code to connect to our aws rds database to establish connection. Here, we add all the properties related to data sources and the hibernate configuration.
5)To generate jar file inside target folder, we have to Right click maven project, choose Run As-> Maven Build, Type package in the Goals box. Click Run. 
6)Once the jar file is created under target folder, we run HW3Application.java on the server as java application. The output should be seen as the tomcat is initialized on 8080 port in the console output as mentioned below screenshot.

Mysql Workbench to connect to Amazon RDS MySQL DB
1)We need to provide the amazon RDS Mysql endpoint in place of hostname mentioned in the RDS databases connectivity and security tab. We have the following endpoint swe645hw3.c67eot0qbxge.us-east-1.rds.amazonaws.com in order to connect to MySql server hosted on amazon as mentioned below.
2)Once we connect, we can find the AWS RDS in our My SQL workbench along with the table.



Docker image creation for angular and springboot:
1)We need to create a DockerHub account and the repository for angular.
2)Create dockerfile in our angular folder 
3)Let us create our docker image in the aws ec2 instance.
4)Create AWS ec2 instance and install docker then establish the connection to the instance.
5)To build an image of angular, run: docker build -t angularfinal:01 .
6)Let’s run our image: docker run --rm -d -p 8080:8080 angularfinal:01
7)Let’s tag the image with our username: docker tag angularfinal:01 bhargavi645/angularfinal:01
8)Run this to get the container id and its information: docker ps -a
9)Then push the image to dockerhub, first login into your docker and then: docker push bhargavi645/angularfinal:01
10)Let’s create dockerfile from the jar file of the springboot application
11)In order to build an image of springboot: docker build -t hw3_finalspringboot:01 .
12)Let’s run our image: docker run --rm -d -p 8080:8080 hw3_finalspringboot:01
13)Let’s tag the image with our username: docker tag hw3_finalspringboot bhargavi645/ hw3_finalspringboot:01
14)Run this to get the container id and its information: docker ps -a
15)Then push the image to dockerhub, first login into your docker and then: docker push bhargavi645/ hw3_finalspringboot:01

AWS EC2 instance creation:
1.Log in to the AWS console https://aws.amazon.com/ and create an account. You will need to have a credit card. You can also use an AWS Educate but it has limited capabilities www.awseducate.com.
2.I am running Rancher on an Ubuntu EC2 but all you need is an instance that has docker running.
3.In the AWS Console, click on Services then EC2 and click Instance and ‘Launch instance’ for anular. Using the Ubuntu AMI from the list : Search for the Ubuntu Server 20.24 Instance and select the first one: Ubuntu Server 20.04 LTS (HVM)
4.Under Instance Type choose t3.large and click “Next: Configure Instance Details” 
5.Click Next until you get to the 'Security Group'. You need to add ports 443, 80, 8080, 22 to 0.0.0.0/0 
6.Review the configurations and click launch. 
7.You’ll be brought to a popup that asks you to select the key pair. If you do not have one already, select the create option and download the key pair .pem file (Make sure you keep this because you'll need it for future steps). Then click launch instances.
8.It may take a few minutes for the instances to be fully deployed and ready. But once they are the Status check will be green. 
9.In the same way, create instance for springboot. In both instances, install docker and rancher.
10.To install, first establish connection to the instance, run: sudo apt-get update. Then, install docker with the command: sudo apt install docker.io and sudo usermod -aG docker ubuntu.

Installation of Rancher:
1)Run the following commands to install rancher on the angular instance we created earlier: docker run -d --restart=unless-stopped -p 80:80 -p 443:443 rancher/rancher
2)Using the public IPV4 address, we can access the rancher dashboard. Once the rancher is ready, create a new password for the admin by running the following command: docker logs “container-id” 2>&1 | grep “Bootstrap Password:” 
3)After copy pasting the bootstrap password, you will be directed to the rancher dashboard.
4)On the rancher dashboard, click on create cluster then select amazon ec2 give a name to your cluster, check yes for etcd, Control Panel, Worker nodes.
5)Add a template, which will be used for all the three nodes. Change the region to “us-east-1” and click on add new for the cloud credentials.
6)You will need to create a user from your AWS account that can create and manage EC2 instances. For that you will need to go back to the AWS console and click on Service and IAM.
7) Click on ‘Add User’, give it a name and click on the ‘Programmatic access’ to get the Access key and Secret key. 
8)Click Next into permission and click on ‘Attach Existing Policy directly’. Add the following permission ‘AdministratorAccess’. 
9)Click Next until you Reach ‘Create User’. Make sure you save the Access Key and Secret Key 
10)Copy and paste both keys and choose the appropriate region (us-east-1)
11)Click Create and select your VPC or security group.
12)Choose the type of instance you want to use. You will also have to choose an AMI from the AMI list that is provided by Rancher. Under ‘IAM Instance Profile Name’, put the name of the IAM user that you created. 
13)Give a name to the template and click on Create. Your template will show under add template, under cluster options> cluster provider: select amazon (In-Tree).
14)Leave all the rest as default and click Create. Rancher will take some time to provision your cluster, Once the cluster is active, you will be able to see the health worker nodes under your cluster. You will also be able to see the new instances created on the AWS console.
15)Now, click on explore clusters and choose your cluster then choose workload > deployments.
16)click on create, give an appropriate namespace, name, and increase the replicas to 3. In the contained-0, give the image (with tag) that you pushed into your dockerhub.
17)Under the Ports, select service type : Node Port, Name: nodeport, private container port: 80 and leave the rest to default. Then click on save, it will take a few seconds to get activated. 
18)Similarly, install and deploye in the rancher of springboot instance with port:8080 and rest the same. 
