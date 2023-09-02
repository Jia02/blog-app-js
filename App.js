import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexPage from './pages/indexPage';
import BlogPage from './pages/blogPage';
 

 
const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="Index" component={IndexPage} options={{headerShown:false}}/>
     <Stack.Screen name="BlogPage" component={BlogPage} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
    
  );
 }