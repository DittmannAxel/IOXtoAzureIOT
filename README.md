# IOXtoAzureIOT
##Cisco's IOX to Microsoft IOT Hub on Azure

This is only a "proof-of-concept" test. Therefore the coding is not fail-safe nor should the program parts run in production. It is done purely to show that we can combine the best of two worlds and we are able to send data back and forth.
First of all: This is the source where I get all my latest info from: [Cisco's Devnet for IOX] (https://developer.cisco.com/site/iox/), and of course my personal experience in several projects which I was working on in the past.

##Overall Architecture:
![Architecture](IOX_Arch.jpg) 

##Cisco's IOx:
If you dig around at Devnet you will find some useful information about how to program inside this virtual machine which runs inside a Cisco router: e.g. here on [GitHub] (https://github.com/CiscoIOx). This post is not about the IOx technology it is only about my little example, but just in case you want to read  more: here you will find the reference architecture of [IOx] (https://developer.cisco.com/site/iox/docs/#iox-architecture).
Let's start with a short *"show version"* of the router to determine the software which I used for the test:

`Cisco IOS Software, ir800 Software (ir800-UNIVERSALK9-M), Version 15.6(3)M0a, RELEASE SOFTWARE (fc1)`


Now, after the configuration, which is availiable [here] (router_cfg.txt), the virtual machine inside the Router is up and running:

a brief: *"show platform guest-os"* shows the status:

`Guest OS status:`

`Installation: Cisco-GOS,version-1.1.2.0`

`State: RUNNING`

Just one little remark from myside: make sure IPv6 is enabled on the new internal interface, even of you do not make use of IPv6 in your network design. It is needed, to get the VM up and running.


