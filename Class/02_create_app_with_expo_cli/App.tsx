/*
    -> https://reactnative.dev/docs/environment-setup

    Step 1) install Node and JDK
    Step 2) npm install -g react-native-cli (to install react-native globaly)
    Step 3) install VSCode
    Step 4) Install Android Studio
    Step 5) Install Android SDK Pie
    Step 6) add ANDROID_HOME to User Environmental Variable
                -> Variable name: ANDROID_HOME
                -> Variable Value: C:\Users\Razz Roman\AppData\Local\Android\Sdk
    Step 7) Create New React Native Project
            -> npm react-native init <Project_Name>
            -> npx react-native init <Project_Name>
    Step 8) put emulator in env : C:\Users\Razz Roman\AppData\Local\Android\Sdk\emulator
            -> emulator -list-avds (to get the list of emulator)
            -> emulator -avd <emulator_Name>
    Step 9) Open project path in terminal & type:
            -> npx react-native start (to Start Metro)
            -> npx react-native run-android (to Start Application)
            -> npx react-native run-ios (to Start Application)

    react-native start
*/

/*
        *) Expo CLI:
                -> Free third-party service
                -> Less complicated workflow
                -> Native feature out-of-the-box
                -> Dedicated Android & IOS app
                -> Limited to the expo ecosystem
                -> good to build normal app
        *) React Native CLI:
                -> React Native team & community
                -> Barebone development setup
                -> Need Android studio or Xcode
                -> Configure on you own
                -> Have Full control
                -> Write you won native code
                -> more Complicated
                -> good to build app if you want more control
*/

/*
        *) Setup Using Expo CLI:
                -> https://expo.dev/
                -> npm install --global expo-cli
                -> expo init <project_name>
                -> cd <project_name>
                -> yarn start (to start)
                  -> chose where you want to run app
                -> yarn android (to start application on android)
                -> yarn ios (to start app on ios)
                -> yarn web (to start app on web)
*/

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Roman Ojha</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
