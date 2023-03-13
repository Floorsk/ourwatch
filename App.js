import Routes from './src/routes'
import UserInfoProvider from './src/Contexts/UserInfo'

const App = () => {
  return (
    <UserInfoProvider>
      <Routes/>
    </UserInfoProvider>
  )
}

export default App