import { projects } from '@/data'
import React from 'react'

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of {''}
        <span className="text-purple"> recent projects</span>
      </h1>
      {/* here we will show our project cards */}
      <div className ="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {/* mapping over the Projects */} {/* javascript-object-destructuring */}
        {projects.map(({ id, title, des, img, iconLists, link}) =>(
          <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:min-w-96 w-[80vw]">
            {title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
