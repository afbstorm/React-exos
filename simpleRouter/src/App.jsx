import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/home/home'
import Users from './components/pages/users/users'
import UserDetails from './components/pages/users/userDetails'
import About from './components/pages/about/about'
import Contacts from './components/pages/contacts/contacts'
import Navbar from './components/shared/navbar'
import NotFound from './components/pages/not-found/not-found'

function App() {

  return (
    <>
    {/* Le composant <Navbar /> est toujours visible, 
    qu'elle que soit la route */}
    <Navbar />
      <Routes>
        {/* Le composant <Home /> n'est appelé que quand la route est '/' */}
        <Route path="/" element={<Home/>} />
        {/* Le composant <Users /> n'est appelé que quand la route est '/users' */}
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
        </Route>
        {/* Le composant <About /> n'est appelé que quand la route est '/about' */}
        <Route path="/about" element={<About />} />
        {/* Le composant <Contacts /> n'est appelé que quand la route est '/contacts' */}
        <Route path="/contacts" element={<Contacts />} />
        {/* Le composant <NotFound /> n'est appelé que quand la route 
        indiquée n'existe pas dans notre système de routing, 
        exemple : '/coucouhibou' */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
