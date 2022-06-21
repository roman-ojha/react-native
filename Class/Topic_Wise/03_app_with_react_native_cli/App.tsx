/*
        *) React Native CLI:
                -> If you want more native feature then try to use react native CLI
*/

/*
    -> https://reactnative.dev/docs/environment-setup

    Step 1) install Node and JDK
    Step 2) npm install -g react-native-cli (to install react-native globaly)
    Step 3) install VSCode
    Step 4) Install Android Studio
    Step 5) Install Android SDK Pie
    Step 6) add ANDROID_HOME to User Environmental Variable
                -> Variable name: ANDROID_HOME
                -> Variable Value: C:\Users\<user>\AppData\Local\Android\Sdk
    Step 7) Create New React Native Project
                -> npx react-native init <Project_Name>
                -> npm react-native init <Project_Name>
                -> npx react-native init <project_name> --template react-native-template-typescript (using typescript)
                        -> https://reactnative.dev/docs/typescript
    Step 8) put emulator in env : C:\Users\<user>\AppData\Local\Android\Sdk\emulator
            -> emulator -list-avds (to get the list of emulator)
            -> emulator -avd <emulator_Name>
            *) Run on physical device:
                -> https://reactnative.dev/docs/running-on-device
                -> for that you need to install usb drivers from android sdk manager
                -> plugin device using usb
                -> then check device available or not:
                        -> adb devices
                -> then run the react-native application
    Step 9) Open project path in terminal & type:
            -> npx react-native start (to Start Metro)
            -> npx react-native run-android (to Start Application)
            -> npx react-native run-ios (to Start Application)

        *) To convert Expo CLI Project into React-Native CLI:
                -> https://youtu.be/LiHkAGyNSJU?list=PL8kfZyp--gEXs4YsSLtB3KqDtdOFHMjWZ&t=586
                -> npm run eject
*/
