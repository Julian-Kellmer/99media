import React, { useState } from 'react'
import Step2 from '../form/stepts/Step2'

const Calendly = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className='layout-wrap min-h-screen w-full flex flex-col items-center pt-16 p-4 text-white font-creatoDisplay'>
      <div className='layout-grid w-full max-w-7xl'>
        <div className='md:col-span-10 md:col-start-2 col-span-full my-8 text-left'>
          <h1 className='mb-4 text-h4'>
            <span className='text-3xl md:text-5xl font-bold leading-tight'>
              Agendá tu llamada
            </span>
          </h1>
          <h2 className='text-h4'>
            Seleccioná un horario que te quede cómodo.
          </h2>
        </div>

        {isLoading && (
          <div className='col-span-full flex justify-center items-center h-64'>
            <div className='w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin' />
          </div>
        )}

        <div className={isLoading ? 'hidden' : 'contents'}>
          <Step2 onReady={() => setIsLoading(false)} />
        </div>
      </div>
    </div>
  )
}

export default Calendly
