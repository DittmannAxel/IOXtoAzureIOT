# IOXtoAzureIOT
##Cisco's IOX to Microsoft IOT Hub on Azure

This is only a "proof-of-concept" test. Therefore the coding is not fail-safe nor should the program parts run in production. It is done purely to show that we can combine the best of two worlds and we are able to send data back and forth.
First of all: This is the source where I get all my latest info from: [Cisco's Devnet for IOX] (https://developer.cisco.com/site/iox/), and of course my personal experience in several projects which I was working on in the past.

##Overall Architecture:
![Architecture](IOX_Arch.jpg) 

##Cisco's IOx:
If you dig around at Devent you will find some useful information about how to program inside this virtual machine which runs inside a Cisco router: e.g. here on [GitHub] (https://github.com/CiscoIOx). This is not about the IOx technology it is only about my little example, but just in case, here you will find the reference architecture of [IOx] (https://developer.cisco.com/site/iox/docs/#iox-architecture).
Let's start with a short version of the router:
`Cisco IOS Software, ir800 Software (ir800-UNIVERSALK9-M), Version 15.6(3)M0a, RELEASE SOFTWARE (fc1)`
