import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'
import { useContext } from 'react'
import { UserInfoContext } from '../../Contexts/UserInfo'

import {
    ContainerSplash,
    TitleSplash
} from './styles'

const SplashScreen = () => {

    const { nome } = useContext(UserInfoContext)

    return (
        <>
            <ExpoStatusBar/>
            <ContainerSplash>
                <TitleSplash>OurWatch</TitleSplash>
            </ContainerSplash>
        </>
    )
}

export default SplashScreen