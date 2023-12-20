import './App.css'
import { Background } from './atoms/Background'
import { Footer } from './atoms/Footer'
import { Header } from './atoms/Header'
import { DashboardLayout } from './layouts/DashboardLayout'
import { AppProvider } from './providers'

function App() {

  return (
    <>
      <AppProvider>
        <Background>
          <div className="
            flex flex-col grow
            justify-between
            overflow-scroll
            ">
            <Header/>
            {
              // TODO: routing for different layouts
            }
            <DashboardLayout/>
            <Footer/>
          </div>
        </Background>
      </AppProvider>
    </>
  )
}

export default App
