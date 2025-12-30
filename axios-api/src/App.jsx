import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [image, updatedImage] = useState([])
  const getimages = async () =>{
    let images = await axios.get("https://picsum.photos/v2/list");
    console.log(images.data);
    updatedImage(images.data);
  }
  return (
    <div>
      <h1>Aixos API data fetching</h1>
      <button onClick={getimages}>See Images</button>

      <div className="image-wrapper">
        <div className="img-box">
          {image.map(function(imgData, key){
            return <div>
              <h2>Image ID is {key}</h2>
              <div className="img-boxes">
              <img src={imgData.download_url} />
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
