import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { Detail } from '../screens/Detail'
import { Home } from '../screens/Home'
import { Register } from '../screens/Register'

const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes() {
    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name='home' component={Home}/>
            <Screen name='new' component={Register}/>
            <Screen name='details' component={Detail}/>
        </Navigator>
    )
}
