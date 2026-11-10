import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Process from './pages/Process.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Team from './pages/Team.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="produits" element={<Products />} />
        <Route path="procede" element={<Process />} />
        <Route path="realisations" element={<Projects />} />
        <Route path="equipe" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
