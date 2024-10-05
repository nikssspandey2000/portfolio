import React from 'react'
import { pyCons } from "./pyCons";

function TechStack() {
  return (
    <div className='grid grid-cols-3 gap-10'>
        {pyCons.map((cons, index) => (
            <div key={cons.name}>
                <img src={cons.ico} alt={cons.name} className='w-[100px]'/>
            </div>
        ))}
    </div>
  )
}

export default TechStack