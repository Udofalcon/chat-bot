# chat-bot
An amalgamation of bots working together.

This is a public version of my UdofalconBot scripts and a sort of tutorial for those looking to make their own.

My plan is to run this on a Raspberry Pi and/or a series of docker containers.

This will have:
* An admin dashboard
  * UI to use as a stream deck
  * Music manager
* Twitch integration
* Discord integration
* Twitter integration
* Youtube integration
* A database
* API linking it all together

## Prerequisites
1. [Install Docker](https://www.docker.com/)
2. [Install nodejs](https://nodejs.org/en/) (16.13.0 LTS at time of writing)
3. If you're on Windows, [install git](https://gitforwindows.org/)
4. Clone this code with `git clone https://github.com/Udofalcon/chat-bot.git`
    * Fork this repository if you want to save your modifications on this site

## Getting Started
1. Run `npm install`
    * To do local Snyk scans, first make an account on [Snyk](https://snyk.io/) then authenticate with `./node_modules/snyk/bin/snyk auth`
2. Run `start.sh`
