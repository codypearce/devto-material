<h1 align="center" style="margin-top: 0px;">Dev.to Material</h1>

<p align="center" style="margin-bottom: 0px !important;">
  <img width="800" src="media/devto-material-platforms.png" alt="adf" align="center">
</p>


<p align="center" >Material Dev.to client for 6 platforms with 100% code sharing</p>


## Intro

Dev.to.Material is a simple Material Dev.to client built with React Native that runs on the Web, Android, iOS, and Electron (Windows, Linux, and MacOS). It was built for exprimental and demoing purposes for sharing 100% code between the above platforms. 

### What's implemented?

Unfortunately, most Dev.to API functionality is either in a closed Alpha or has not been documented yet. Therefore, this client only supports:
- Fetching Articles
- Searching Articles by Tags
- Clicking on Tags to filter Articles
- Clicking on Feed, Week, Month, etc
- Viewing an article

The rest of the client is static data.

###  Tech
The app is built using React Native `59.0` to render to each platform. React Native Web allows rendering React Native on the Web. The electron apps is rendered with React Native Web and Electron `4.0`. The following packages were also used:

- React Router, Reacout Router Native, and React Router Dom (Router)
- Material Bread (UI Kit)
- React Native Infinity (Project Setup)
- `react-responsive` (Media Queries and Responsive)
- `react-native-render-html` (Rendering Article HTML)


## Quick Start

1. `git clone git@github.com:codypearce/devto-material.git`
2. `cd devto-material`
3. `npm i`
4. `npm run web`

## Web

All web config is found in `web` folder. 

```
npm run web
```

It should be running on port `8080`

## iOS
All config is found in `ios` folder.

1. Start an ios simulator
2. Open one terminal tab and run `npm start`
3. Open another terminal tab and run `npm run ios`

## Android

All config is found in `android` folder.

1. Start an android emulator
2. Open one terminal tab and run `npm start`
3. Open another terminal tab and run `npm run android`

## Electron

All electron config is found in `electron` folder. 


1. Open one terminal tab and run `npm run server`, this runs the electron webpack server.
2. Open another terminal tab and run `npm run electron`, this should open an electron window with the app running.

