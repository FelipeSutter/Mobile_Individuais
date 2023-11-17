import { NavigationContainer } from "@react-navigation/native";
import StackNavigate from "./routes";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigate />
    </NavigationContainer>
  );
}
