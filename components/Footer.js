import React from 'react'

const Footer = () => {
  let year = new Date().getFullYear()
  return (
    <>
        <div className="footer py-5">
              <p className='text-center'>Copyright &copy; {year} WasteAI.co</p>
        </div>
    </>
  )
}

export default Footer