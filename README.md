# Twilio Notify Passthrough API Example

## Setup

### 1. Install Node.js

There are more ways than one to do this:
- Download from website
Installing Node.js will also install the package manager NPM.
https://nodejs.org/en/download/
- Download using homebrew (mac only)
Copy and paste the following into a terminal session to download homebrew and follow the instructions.
    ```bash
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```
    Then use homebrew to install node.
    ```bash
    brew install node
    ```
### 2. Clone the Twilio example git repo and install dependencies

Open the terminal or command line and navigate to your preferred directory.
e.g. (terminal)
```bash
cd ~/Desktop
```
where cd stands for "change directory."

If you want to clone this repository with all the files already modified do this:
```bash
git clone https://github.com/bbbizzarro/TwilioTest.git
cd TwilioTest
```

Alternatively, should something go wrong, you can clone the Twilio example directory from the Twilio GitHub repository and reinstall all the dependencies.
The following commands will create a git repository called `twilio-passthrough-example`. Run the following commands:

```bash
git clone https://github.com/brentschooley/twilio-passthrough-example.git
cd twilio-passthrough-example
npm install
```

Calling `npm install` will install the packages dictated by the package.json file, e.g. Twilio, as well as any dependencies internal to a specific package.

At this point the scripts in this directory will not work. You will be creating or modifying the following files for our purposes 1) `.env` 2) `app.js` 3) `numbers.txt` 4) `body.txt`.

### 3. Modify the enviroment file
If you cloned this repository, type `open .env` to open and edit the `.env` file.

If you cloned the git repository directly from Twilio, the environment file will be called `.env.example`. This file is hidden so you must use the command `ls -a` in the terminal to see it. Use `open .env.example` to open the file in your default text editor. Copy and/or rename the file to `.env`, as the javascript code will be looking for a file with that name. 
Alternatively, you can just create a new file call `.env` and copy and paste the following
lines into it.

```bash
TWILIO_ACCOUNT_SID=AbCd123
TWILIO_AUTH_TOKEN=AbCd456
NOTIFY_SERVICE_SID=AbCd789
```
Replace each value with the appropriate key.

### 4. Set up custom .js script

The `.js` script that comes with the example Twilio repository will not work.
Replace the default `.js` script with our custom `app.js`.
If you cloned this repository, the `app.js` script is ready to go.

### 5. How to use the script
The script expects three files to be in the working directory 1) `.env` 2) `numbers.txt` 3) `body.txt`.
The script is commented and can be modified as needed.
Create/edit a file called `numbers.txt`.
`numbers.txt` should contain a column of numbers with no spaces and no empty lines. e.g.
+12345678901
+23456789011
...
Create/edit a file called `body.txt`.
`body.txt` should contain the content of text message that is to be sent.

### 6. Run the script
If you are ready to send the text messages, using the terminal and ensuring that your working directory is the directory that contains the `app.js`, `.env`, `numbers.txt`, `body.txt`, type and run the following command

```bash
npm start
```

**(!)** Do not run this command unless you are ready to send your text messages. This will send SMS messages with the content of `body.txt` to all numbers in `numbers.txt`.
**(!)** Note that ~1600 numbers exceeded a readfile limit. Batches of 500 numbers is confirmed to work. Split up the numbers as necessary and replace the numbers.txt file with the new numbers each run.

## Contributors
Brandon Bizzarro
