import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Dasboard } from './Dasboard/Dash'
import { Cleints } from './Cleints/cleint'
import { Services } from './Service/service'
import { Contects } from './Contect/contect'
import { Guryo } from './Guryo/Guryo'
import Images from './Imagefolder'
import { Abouts } from './About/about'
export default function App() {
  return (
    <Routes>

    <Route path='/' element={<h2>Login page</h2>}/>

<Route path='dashboard' element={<Dasboard/>}>

<Route path='client' element={<Cleints/>}/>
<Route path='services' element={<Services/>}/>
<Route path='home' element={<Guryo/>}/>
<Route path='about' element={<Abouts/>}/>
<Route path='image' element={<Images/>}/>
</Route>

  </Routes>
  )
}
