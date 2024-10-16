import { useFonts } from "expo-font";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FlashMessage from "react-native-flash-message";

import { Provider } from "react-redux";
import store from "./src/store/store";

import {
  Mulish_400Regular,
  Mulish_600SemiBold,
  Mulish_700Bold,
} from "@expo-google-fonts/mulish";

import StackNavigator from "./src/navigation/StackNavigator";

const App = () => {
  let [fontsLoaded] = useFonts({
    Mulish_400Regular,
    Mulish_600SemiBold,
    Mulish_700Bold,
  });

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <Provider store={store}>
            <StackNavigator />
          </Provider>
        </SafeAreaProvider>
        <FlashMessage position="top" statusBarHeight={20} floating={true} />
      </NavigationContainer>
    );
  } else {
    return <Text>error</Text>;
  }
};

export default App;
