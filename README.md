# EventMaster
* Please notice that this repository is front end rep, you will need to deploy backend first and make corresponding changes in the frontend endpoints in order to let everything works.
* Url for backend repository: https://github.com/ceciliawzx/fitchCodeathonBackEnd



## Prequests

#### Before you begin, make sure you have the following prerequisites installed:
* Node.js: You can download it from https://nodejs.org/.
* npm (Node Package Manager): This should come bundled with Node.js.
* Expo CLI: Install it globally using npm with the following command:
```bash
npm install -g expo-cli
```



## Getting Started
* Clone the repository to your local machine:
```bash
git clone git@github.com:ceciliawzx/fitchCodeathon.git
```
* Navigate to the project directory:
```bash
cd fitchCodeathon
```
* Install project dependencies:
```bash
npm install
```


## Configuring the App
* Specifically, you will need to change all the endpoints and resources used in this project to your real urls and resources:
* Change the endpoint for your database (wordpress) in EventList.jsx
* Change the default urls for topImages and default_image in EventList.jsx
* Change the endpoint for Paypal server in TicketDetail (This is very important!! You will want to ensure you can receive money from customers. To learn more about deploying the Paypal server, please refer to the README in the backend repository mentioned at the top.)
* Change all information about emails in TicketDetail (serviceID, templateID, templateOrgId, userID...)
* Change all tests pictures in this repository.
* We accessed database data based on the event schema we designed, you will need to change all references related to event to match your real schema. 


## Running the App Locally
* Start the Expo development server:
```bash
npm start
```
* You should be able to see a QR code. Scanning the QR code will navigate you to the Expo Go App, and you should be able to see the correct content. Please ensure you have Expo Go App installed in your mobile 
* Alternatively, if you are using mac and have XCode installed, you can press 'i' to start an iPhone simulator on your computer.



## Deploying the App
* Configure your preferred hosting service (e.g., AWS Amplify, Netlify, or Vercel) to host the app's backend server and frontend assets.
* Build the production version of the app:
```bash
npm run build
```
* Deploy the built app to your hosting service.
* Please ensure you have updated the necessary environment variables for the deployed app, such as API endpoints and authentication keys.



## Future Development
* We only had two days so this is just a sample. We hope it could be useful to you without causing too much pain to modify it.
* There are lots of improvements that could be done: e.g add a text sending service, and move the email service to back-end, move the database fetch to back-end, implement map feature to the event detail, implement like/save/rate features for events, implement embedded chatting system...
* Once again, thank you for choosing us, we hope we have helped you to some extents. 