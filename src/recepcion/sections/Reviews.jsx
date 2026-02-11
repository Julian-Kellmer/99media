import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reviewsData = [
  {
    id: 1,
    name: 'Bruno Lerer',
    role: 'Lebane',
    text: 'Entender que una obra puede gestionarse con inteligencia artificial puede parecer difícil, pero es una realidad. Gracias al método aplicado por 99 Media, logramos expandir nuestra presencia en redes sociales y acercar nuestra plataforma a desarrolladoras y constructoras. Hoy más de 250 clientes utilizan nuestra app para gestionar sus obras, consolidando un crecimiento sostenido y una adopción real en el sector, y todo esto es gracias al equipo de 99 media.',
    image: './LogoLebane.png', // Placeholder
  },
  {
    id: 2,
    name: 'Nico Kiperszmid',
    role: 'DYPSA GROUP ',
    text: 'El equipo de 99 Media está en todos los detalles. Gracias a su trabajo, Dypsa Group logró fortalecer su presencia en redes sociales y posicionarse frente a un nuevo público. Su compromiso, creatividad y profesionalismo marcaron una gran diferencia en nuestra comunicación. Desde Dypsa Group estamos muy contentos de trabajar con ellos.',
    image: './LogoDypsa.png',
  },
  {
    id: 3,
    name: 'Nicole Lapidus',
    role: 'EL MUNDO DEL JUGUETE',
    text: 'Gracias al método de escala sostenida de la agencia, los resultados de El Mundo del Juguete crecieron de manera exponencial. Desde la creación de la marca hasta hoy, 99 Media nos acompañó en cada etapa del proceso. Su equipo está siempre presente, brindando seguimiento, estrategia y acompañamiento en cada decisión clave. Se involucran en el crecimiento integral de la marca.',
    image: './EMDL-Logo.png',
  },
  {
    id: 4,
    name: 'Adrian Paniccia',
    role: 'WENELEN EXECUTIVE HOTEL',
    text: 'Gracias al trabajo de 99 Media, conseguimos mayor visibilidad y una comunicación alineada con nuestro perfil corporativo. Esto nos permitió atraer a numerosas empresas que hoy se hospedan en nuestro hotel y realizan sus consultas a través de LinkedIn e Instagram. A través de nuestra presencia estratégica en redes sociales logramos darnos a conocer y posicionarnos como un referente en Añelo.',
    image: './logoWenelen.png',
  },
  {
    id: 5,
    name: 'Martin Gutman',
    role: 'TENGO TODO TECNO',
    text: 'Los chicos de 99 Media son unos capos. Estuvieron en cada detalle y construyeron la identidad de la marca desde cero. Gracias a su laburo, todos los días superamos las órdenes de compra y seguimos creciendo. Tengo Todo Tecno avanza día a día, y gran parte de eso es gracias a ellos.',
    image: './logoTTT.png',
  },
]

const Reviews = () => {
  const containerRef = useRef(null)
  const leftColRef = useRef(null)
  const rightColRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: leftColRef.current,
        pinSpacing: false,
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className='layout-wrap w-full bg-[#1e1e1e] md:py-20 py-10'>
      <div className='layout-grid w-full max-w-7xl mx-auto'>
        {/* Left Column - Pinned */}
        <div
          ref={leftColRef}
          className='col-span-12 md:col-span-6 flex flex-col justify-start pt-10 h-fit'>
          <h2 className='text-3xl md:text-5xl font-bold leading-tight text-white font-creatoDisplay px-4 md:px-0'>
            Con <span className='text-secondary'>99 Media</span> el crecimiento
            es garantizado, mira nuestros casos de éxito
          </h2>
        </div>

        {/* Right Column - Scrollable */}
        <div
          ref={rightColRef}
          className='col-span-12 md:col-span-6 space-y-8'>
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className='bg-[#161616] p-8 rounded-2xl border border-white/5 shadow-xl transition-transform hover:scale-[1.02]'>
              {/* Stars */}
              <div className='flex gap-1 mb-6'>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='white'
                    className='text-white'>
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                  </svg>
                ))}
              </div>

              {/* Header: Image & Name */}
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-white/20'>
                  <img
                    src={review.image}
                    alt={review.name}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div>
                  <h4 className='text-white font-bold text-lg font-creatoDisplay'>
                    {review.name}
                  </h4>
                  <p className='text-gray-400 text-sm font-creatoDisplay'>
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Text */}
              <p className='text-gray-300 leading-relaxed font-creatoDisplay text-sm md:text-base'>
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
