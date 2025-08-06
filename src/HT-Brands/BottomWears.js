import React, {  useMemo, useState } from 'react'
import Cargo from './B-Pages/Cargo'
import Type from './B-Pages/Type'
import Size from './B-Pages/Size'

const BottomWears = () => {
  const [view, setview] = useState("")

  const dashboardview = useMemo(
    ()=>{

      if(view=== ""){
        return <Cargo/>
      }
      else if(view==="Cargo"){
        return <Cargo />
      }
      else if(view==="Type"){
        return <Type />
      }
      else if(view==="Size"){
          return<Size />
      }
      else{
        return<h1>invalid view</h1>
      }
    },[view]
  )
  // if(login){
    return (
      <div className='rood container-fluid'>
        <div className='row p-3'>
          <aside className=' col-lg-3 p-3'>
            <h1 className='pb-4'>Bottom Wear</h1>
            {/* <h6 onClick={()=>setview("")} className='admin'>Admin Console</h6> */}


          <details>
            <summary>Availability</summary>
            <div className='row'>
              <div className='col-2 text-end'>
             <p  className="p-2"onClick={() =>  setview("Cargo")}><input type='checkbox'></input></p>
             </div>
             <div className='col-8 p-2'>In stock</div>
             </div>
          </details>
          <details>
            <summary>Product type</summary>
            <div className='row'>
              <div className='col-2 text-end'>
             <p  className="p-2"onClick={() =>  setview("Type")}><input type='checkbox'></input></p>
             </div>
             <div className='col-8 p-2'> Phants <span style={{fontSize:"smaller", color:"grey"}}>(3)</span></div>
             </div>
          </details>
          <details>
            <summary>Size</summary>
            <div className='row'>
              <div className='col-2 text-end'>
             <p  className="p-2"onClick={() =>  setview("Size")}><input type='checkbox'></input></p>
             </div>
             <div className='col-8 p-2'>30  <span style={{fontSize:"smaller", color:"grey"}}>(3)</span></div>
             </div>
             <div className='row'>
              <div className='col-2 text-end'>
             <p  className="p-2"onClick={() =>  setview("Size")}><input type='checkbox'></input></p>
             </div>
             <div className='col-8 p-2'>32 <span style={{fontSize:"smaller", color:"grey"}}>(3)</span></div>
             </div>
             <div className='row'>
              <div className='col-2 text-end'>
             <p  className="p-2"onClick={() =>  setview("Size")}><input type='checkbox'></input></p>
             </div>
             <div className='col-8 p-2'>34 <span style={{fontSize:"smaller", color:"grey"}}>(0)</span></div>
             </div>
             <div className='row'>
              <div className='col-2 text-end'>
             <p  className="p-2"onClick={() =>  setview("Size")}><input type='checkbox'></input></p>
             </div>
             <div className='col-8 p-2'>36 <span style={{fontSize:"smaller", color:"grey"}}>(0)</span></div>
             </div>
             <div className='row'>
              <div className='col-2 text-end'>
             <p  className="p-2"onClick={() =>  setview("Size")}><input type='checkbox'></input></p>
             </div>
             <div className='col-8 p-2'>38 <span style={{fontSize:"smaller", color:"grey"}}>(0)</span></div>
             </div>
          </details>

          </aside>
          <div className='Scrollview col-lg-9'>
            {dashboardview}
          </div>
        </div>
      </div>
    )
  
  }

export default BottomWears