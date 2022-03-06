# App Skeleton App

This is a practical ready-to-go app skeleton. 
The propose for this repository is:
    - Having always a fresh app skeleton available
    - Possibilty to test different strategy with a clean app with no errors and totally upgraded. 

## Tools

2. [Xcode](#xcode-setup)
3. [Android Studio](#android-studio-setup)

## Before you begin

1. Ensure your local machine is set up for React Native development. For up to date instructions on how to do this, visit the setup instructions on the official [React Native documentation](https://reactnative.dev/docs/environment-setup).

## Xcode Setup

You need at least Xcode 13, this is to ensure you have access to iOS 15. You can download from [here](https://developer.apple.com/xcode/resources/)

## Android Studio Setup

You need to install at least android studio canary 5. You can download from [here](https://developer.android.com/studio/archive)

## Installation

1. Clone this repo to your local machine

2. Install `node_modules` by running `yarn` (you may need to [install yarn](https://yarnpkg.com/getting-started/install) globally first).

3. Install pods by running `cd ./ios && pod install && cd ..`

4. clean Android by running `cd android && ./gradlew clean && cd ..`

### Running the app with react-native CLI

- Run the android app with `yarn android` or the iOS app with `yarn ios`. This will start the metro development server and run the app on a simulator.

### Running the app from XCode or Android Studio

For debugging iOS or Android specific bugs, it can be useful to run the app from XCode or Android Studio.

1. For XCode in the tab navigator (Product→ Build) or using the shortcut `⌘ + B`.

2. For Android Studio - navigate to the React Native App from Android Studio and open the `./android` folder. Wait for the Gradle Sync to finish and then navigate to Run -> Run App.

## Debugging

For debugging, we use [React Native Debugger](https://github.com/jhen0409/react-native-debugger). After this has been installed, open the debugger and run the app. You should see the JavaScript logs appear in the debugger console. You can execute and runs using the shortcut `⌘ + D`.

## Testing

Our linter runs on a pre-commit hook and both linting and testing run when pull requests are created as part of our continuous integration with GitHub Actions.

To run the linter manually run

`yarn lint`.