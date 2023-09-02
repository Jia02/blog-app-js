## Index Page
An index page that fetches the data stored in the local storage and displays all the blogs created beforehand in a row. A ***A New Blog Entry*** button allows the user to create a new blog. 

![A screenshot of displaying index page.](/demoImg/1)

## Blog Page
A Page that enables users to input the title and content when creating a blog. Users also have the option to edit or delete any blogs they've created. The code consits of **CRUD** operations to create, edit, and delete a blog component. An alert message is displayed when there is a missing field. 

Create a blog: 

![A screenshot of creating a blog.](/demoImg/2) 

![A screenshot of pop-up message after successfully saving a blog.](/demoImg/3)

Edit a blog: 

![A screenshot of editing a blog.](/demoImg/4) 

![A screenshot of pop-up message after successfully editing and saving a blog.](/demoImg/5)

Delete a blog: 

![A screenshot of pop-up message after successfully deleting a blog.](/demoImg/6) 

![A screenshot of index page after deleting a blog.](/demoImg/7) 

## Requirement
- Install NodeJS. 
- Install Expo Go application from the App Store (iOS) or Play Store (Android). 
[!IMPORTANT]
> To connect Expo Go to your local machine, ensure both the mobile device and local machine are on the same WiFi network.

## Run the App
1. Open an terminal and Locate to root folder: `cd blog-app-js`
2. Download Expo CLI tool[^1] into the  local machine: `npm install expo-cli -g`
3. Start the Expo development server and launches the application: `npx expo start` or `npx expo start --tunnel`
4. Open Expo Go appication, choose the options of:
    - 'Scan QR code' and **scan the QR Code** in your terminal.
    -  'Enter URL' manually  and **enter the URL** displayed on your terminal. 

[^1]: Read about documentations [here](https://docs.expo.dev/more/expo-cli/#server-url). 