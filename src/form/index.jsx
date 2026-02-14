import React from 'react'
import { useNavigate } from 'react-router-dom'
import Step1 from './stepts/Step1'

const Form = () => {
  const navigate = useNavigate()

  const handleNextStep = () => {
    navigate('/Calendly')
  }

  return (
    <div className='layout-wrap min-h-screen w-full flex flex-col items-center pt-16 p-4 text-white font-creatoDisplay'>
      <div className='layout-grid w-full max-w-7xl'>
        <div className='md:col-span-10 md:col-start-2 col-span-full  my-8 text-left'>
          <h1 className=' mb-4 text-h4'>
            <span className='text-3xl md:text-5xl font-bold leading-tight'>
              Solo para tiendas online que facturan más de U$D 20,000 al mes.
            </span>
          </h1>
          <h2 className='text-h4 '>
            Crecemos con vos en 90 días, garantizado.
          </h2>
        </div>

        <Step1 onNext={handleNextStep} />
      </div>
    </div>
  )
}

export default Form
