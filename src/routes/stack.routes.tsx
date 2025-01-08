import { createStackNavigator } from '@react-navigation/stack'
import page1 from '../screens/page1'
import page2 from '../screens/page2'

const { Screen, Navigator } = createStackNavigator()

export function StackRoutes() {
    return (
        <Navigator>
            <Screen name='page1' component={page1} />
            <Screen name='page2' component={page2} />
        </Navigator>
    )
}