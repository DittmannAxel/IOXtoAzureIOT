# IOXtoAzureIOT
## Cisco's IOX to Microsoft IOT Hub on Azure

This is only a "proof-of-concept" test. Therefore the coding is not fail-safe nor should program parts run in production. It is done purely to show that we can combine the best of two worlds and we are able to send data back and forth.
First of all: This is the source where I get all my latest info from this kind of Cisco technology: [Cisco's Devnet for IOX] (https://developer.cisco.com/site/iox/), and of course my personal experience in several projects which I was working on in the past.

## Architecture:
![Architecture](IOX_Arch.jpg) 

## Cisco's IOx:
If you dig around at Devnet you will find some useful information about how to make use of this virtual machine which runs inside a Cisco router: e.g. here on [GitHub] (https://github.com/CiscoIOx). This post is not about the IOx technology it is only about my little example, but just in case you want to read more: here you will find the reference architecture of [IOx] (https://developer.cisco.com/site/iox/docs/#iox-architecture).
Let's start with a short *"show version"* of the router to determine the software which I used for the test:

`Cisco IOS Software, ir800 Software (ir800-UNIVERSALK9-M), Version 15.6(3)M0a, RELEASE SOFTWARE (fc1)`


Now, after the configuration is all done, the virtual machine inside the router is up and running:

a brief: **"show platform guest-os"** shows the status:

`Guest OS status:`

`Installation: Cisco-GOS,version-1.1.2.0`

`State: RUNNING`

Just one little remark from myside: make sure IPv6 is enabled on the new internal interface, even of you do not make use of IPv6 in your network design. It is needed, to get the VM up and running.

Now: ssh into the virtual machine and in my case just update via **vi** the DNS Server /etc/resolv.conf. Download the precompiled Node.js binary:

`https://nodejs.org/dist/v4.6.0/node-v4.6.0-linux-x64.tar.xz'

Unpack it and before you proceed: give **file node** a try. It will show something like this:

`node: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 2.6.9, BuildID[sha1]=5e20e0c243c1c1f08cfa21c88d880cdd249720ad, not stripped`

In this Yocto image the *ld-linux-x86-64.so.2* is in **/lib** but to run Node.js it is needed in **/lib64/**. So either ln or copy this lib into the **/lib64/** directory locally. With a fully reference to the binary (I haven't set the directories, yet), you can initialize **npm**:

`/home/root/node-v4.6.0-linux-x64/bin/npm`

And now you are ready for part two: 

## Installing the Azure IOT Device SDK:

Just proceed with the **npm** install which you can find [here] (https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-node-node-getstarted). This tutorial is very straight forward, so there is no need to give an extra explanation. I just used the AMQP libraries and for device management I typically use the Device Explorer. It has some advantage e.g. in troubleshooting like: to see data coming in, etc. For a PoC it is a quick win. Just download the precompiled version of [Device Explorer](https://github.com/Azure/azure-iot-sdks/releases) - just scroll down to the middle of the page. A tutorial can be found [here] (https://github.com/fsautomata/azure-iot-sdks/blob/master/tools/DeviceExplorer/doc/how_to_use_device_explorer.md).


Let's proceed to part three:

## Sending Data to Azure IOT HUB:

Now it is time to copy the send_json.js script to the sensor-device. This script just simulates two values, humidity and temperature and sends it over the wire via a socket. I used two modules for my example: json-socket: https://www.npmjs.com/package/json-socket and standard net. The json-socket module was a test for experimenting but you can easily change it to pure net.
But first you need to start the receive_json.js on the IOX. Just ssh (after you scp'ed the file) towards the IOX, install the modules and than start it. Once it will receive data from the device it will send everything to IOT Hub.

**Proof-of-Concept done: Cisco IOX sends data, received via the network, to Microsoft Azure IOT Hub.**

![Data sent - proof](final_daa.jpg) 



