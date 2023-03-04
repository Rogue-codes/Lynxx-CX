import {ReactNode} from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

type layoutProps = {
    children: ReactNode
}

export default function Layout({children}:layoutProps) {
  return (
    <div>
        <Nav/>
        {children}
        <Footer/>
    </div>
  )
}
