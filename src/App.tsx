import { useState } from 'react'
import './App.css'

function App() {
  const [hover, setHover] = useState(null as any);

  return (
    <>
      <div className="w-full h-screen flex flex-row items-center justify-center bg-[#f7f9fb]">
        <div 
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="relative max-md:w-4/5 w-1/3 flex flex-col items-center justify-end bg-[#eef0f2] hover-div border-1 border-[#e8eaeb] rounded-2xl pt-45">
          <div className={"absolute z-0 w-full flex flex-row items-center justify-end pr-3 " + (hover ? " active-top" : hover !== null && " un-active-top" )}>
            <img 
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/wanderer-abstract-colorful-mixed-media-painting-modern-art-prints.jpg" 
              alt="" 
              className={"z-1 border-2 border-white rounded-lg w-15 h-[5rem] translate-y-[-0.5rem]" + (hover ? " img1" :  hover !== null && " reverse-img1")}
            />
            <img 
              src="https://plus.unsplash.com/premium_photo-1664438942574-e56510dc5ce5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3QlMjBhcnR8ZW58MHx8MHx8fDA%3D" 
              alt="" 
              className="z-2 border-2 border-white rounded-lg w-20 h-[5rem] ml-[-1.5rem] translate-y-[-1rem]" 
            />
            <img 
              src="https://media.istockphoto.com/id/1134512518/photo/abstract-hand-painted-art-background-on-canvas.jpg?s=612x612&w=0&k=20&c=9q1y7CGMBGpoVzVKCIvRqQrE9FZu3F4VGfjIcUHgpvY=" 
              alt="" 
              className={"z-3 border-2 border-white rounded-lg w-13 h-[5rem] ml-[-1.5rem] translate-y-[-0.8rem]" + (hover ? " img3" :  hover !== null && " reverse-img3")} 
            />
            <img 
              src="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg" 
              alt="" 
              className={"z-4 border-2 border-white rounded-lg w-16 h-[5rem] ml-[-0.9rem]" + (hover ? " img4" :  hover !== null && " reverse-img4")} 
            />
          </div>
          <div className="absolute z-10 w-full flex flex-col items-start bg-white p-4 rounded-2xl border-1 border-[#e8eaeb] gap-y-2">
            <button className="absolute outline-none flex flex-row items-center justify-center p-2 rounded-full bg-white border-1 border-[#e8eaeb] top-[-1rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="15px" viewBox="0 0 24 24" fill="#7b7a81"><path d="M17.0007 1.20825 18.3195 3.68108 20.7923 4.99992 18.3195 6.31876 17.0007 8.79159 15.6818 6.31876 13.209 4.99992 15.6818 3.68108 17.0007 1.20825ZM10.6673 9.33325 15.6673 11.9999 10.6673 14.6666 8.00065 19.6666 5.33398 14.6666.333984 11.9999 5.33398 9.33325 8.00065 4.33325 10.6673 9.33325ZM11.4173 11.9999 9.18905 10.8115 8.00065 8.58325 6.81224 10.8115 4.58398 11.9999 6.81224 13.1883 8.00065 15.4166 9.18905 13.1883 11.4173 11.9999ZM19.6673 16.3333 18.0007 13.2083 16.334 16.3333 13.209 17.9999 16.334 19.6666 18.0007 22.7916 19.6673 19.6666 22.7923 17.9999 19.6673 16.3333Z"></path></svg>
            </button>
            <div className="w-fit flex flex-row items-center gap-x-2">
              <h1 className="text-black text-lg">Posts</h1>
              <span className="text-[#7b7a81] text-sm">252</span>
            </div>
            <div className="max-md:w-full w-2/3 flex flex-row items-center justify-start text-[#7b7a81] text-sm">
              Posts are photos and videos you upload to share within a project.
            </div>
            <button className="outline-none flex flex-row items-center justify-center py-1 px-2 text-sm border-1 border-[#e8eaeb] rounded-xl">
                Add Post
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
