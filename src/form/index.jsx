import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Step1 from './stepts/Step1'
import SmartVideo from '../components/SmartVideos'
import ReviewCard from '../components/ReviewCard'
import { reviewsData, logos } from './data'

const Form = () => {
  const navigate = useNavigate()
  const formRef = useRef(null)

  const handleNextStep = () => {
    navigate('/Calendly')
  }

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='bg-app-bg layout-wrap min-h-screen w-full flex flex-col items-center pt-16 pb-8 px-4 text-white font-creatoDisplay'>
      <div className='layout-grid w-full max-w-7xl mx-auto'>
        {/* HERO SECTION */}
        <div className='col-span-full text-center space-y-6 pt-10 pb-6'>
          <h1 className='text-3xl md:text-5xl font-bold leading-tight'>
            Dúplica tu ventas en solo 90 días, activa{' '}
            <br className='hidden md:block' />
            el <span className='text-[#00e31c]'>MÉTODO ESCALA SOSTENIDA</span>
          </h1>

          <div className='space-y-2 mt-8'>
            <h3 className='text-xl md:text-2xl font-bold'>PASO 1 DE 3</h3>
            <p className='text-lg md:text-xl text-gray-300'>
              ¿Cómo llevamos tu e-commerce al siguiente nivel de crecimiento?
            </p>
          </div>
        </div>

        {/* VIDEO SECTION */}
        <div className='col-span-full md:col-span-10 md:col-start-2 justify-center flex mb-10'>
          <div className='relative w-full overflow-hidden rounded-2xl bg-[#161616] shadow-2xl border border-white/10'>
            <SmartVideo
              webmSrc='/99mediaHorizontal1.webm'
              mp4Src='/99mediaHorizontal1.mp4'
              poster='/Portada1.png'
            />
          </div>
        </div>

        {/* FIRST CTA */}
        <div className='col-span-full flex justify-center w-full my-6'>
          <button
            onClick={scrollToForm}
            className='bg-[#00e31c] text-white font-bold text-lg px-8 py-3 rounded-xl hover:bg-[#00c217] transition-colors shadow-lg shadow-[#00e31c]/20'>
            AGENDÁ UNA DEMO
          </button>
        </div>

        {/* DIVIDER */}
        <div className='col-span-full md:col-span-10 md:col-start-2 my-10 border-t border-white/20' />

        {/* REVIEWS HEADER */}
        <div className='col-span-full text-center mb-10'>
          <h2 className='text-2xl md:text-3xl font-bold'>
            Impulsamos resultados reales.
          </h2>
          <h2 className='text-2xl md:text-3xl font-bold text-[#00e31c]'>
            Conocé nuestros casos de éxito.
          </h2>
        </div>

        {/* REVIEWS CAROUSEL */}
        <div className='col-span-full mb-12 flex flex-col gap-6 overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          {/* Top Row - Moves Left */}
          <div className='flex gap-6 w-max animate-marquee'>
            {[...reviewsData, ...reviewsData].map((review, idx) => (
              <ReviewCard
                key={`top-${idx}`}
                review={review}
              />
            ))}
          </div>

          {/* Bottom Row - Moves Right */}
          <div className='flex gap-6 w-max animate-marquee-reverse'>
            {[
              ...reviewsData.slice().reverse(),
              ...reviewsData.slice().reverse(),
            ].map((review, idx) => (
              <ReviewCard
                key={`bottom-${idx}`}
                review={review}
              />
            ))}
          </div>
        </div>

        {/* SECOND CTA */}
        <div className='col-span-full flex justify-center w-full my-8'>
          <button
            onClick={scrollToForm}
            className='bg-[#00e31c] text-white font-bold text-lg px-8 py-3 rounded-xl hover:bg-[#00c217] transition-colors shadow-lg shadow-[#00e31c]/20'>
            Agenda una llamada
          </button>
        </div>

        {/* DIVIDER */}
        <div className='col-span-full md:col-span-10 md:col-start-2  border-t border-white/20' />

        {/* STEP 2 FORM */}
        <div
          ref={formRef}
          className='col-span-full md:col-span-10 md:col-start-2 text-center '>
          <div className='space-y-2 mb-8'>
            <h3 className='text-xl md:text-2xl font-bold'>PASO 2 DE 3</h3>
            <p className='text-lg md:text-xl text-white'>
              Contanos de tu e-commerce <br className='md:hidden' />y{' '}
              <span className='text-[#00e31c]'>agenda tu reunion</span>.
            </p>
          </div>

          <Step1 onNext={handleNextStep} />
        </div>

        {/* LOGOS CAROUSEL */}
        <div className='col-span-full mt-20 mb-8 overflow-hidden flex justify-center items-center'>
          <div className='flex flex-wrap justify-center gap-6 md:gap-10 items-center opacity-80'>
            {logos.map((logo, index) => (
              <div
                key={index}
                className='w-14 h-14 md:h-16 md:w-16 rounded-full bg-black border border-white/10 flex items-center justify-center p-2'>
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className='max-h-full max-w-full object-contain filter  transition-all cursor-pointer'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
