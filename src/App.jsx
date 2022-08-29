
import GlobalStyle from './global'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Feed } from './components/Feed/Feed'
import { Aside } from './components/Aside/Aside'
import { Wrapper } from './style'


function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Sidebar/>
      <Feed />
      <Aside />
    </Wrapper>

  )
}

export default App
