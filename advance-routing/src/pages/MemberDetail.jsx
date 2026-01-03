import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router'

const MemberDetail = () => {

  let params = useParams();
  console.log(params.id);
  

  return (
    <div className='flex justify-between h-screen flex-col'>
      < Navbar />
      <div className="content container mx-auto text-center">
        <h2>About {params.id}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quaerat fugit nam minus molestias ipsum minima veritatis fugiat labore consequuntur reiciendis omnis, autem reprehenderit optio quidem accusamus itaque velit consequatur?</p>
      </div>
      <Footer />
    </div>
  )
}

export default MemberDetail