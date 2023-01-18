import { About, Footer, Navbar } from '@/components'
import React from 'react'

const about = () => {
  return (
    <>
        <Navbar/>
        <div className="about">
            <div className="container">
                <h2>About</h2>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default about