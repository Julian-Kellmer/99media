import React from 'react'

const ReviewCard = ({ review }) => {
  return (
    <div className='bg-[#161616] p-6 rounded-2xl border border-white/5 shadow-xl transition-transform hover:scale-[1.02] flex flex-col w-[320px] md:w-[400px] whitespace-normal flex-shrink-0'>
      <div className='flex gap-1 mb-4'>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='white'
            className='text-white'>
            <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
          </svg>
        ))}
      </div>
      <div className='flex items-center gap-4 mb-4'>
        <div className='w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-black flex items-center justify-center p-1 shrink-0'>
          <img
            src={review.image}
            alt={review.role}
            className='w-full h-full object-contain'
          />
        </div>
        <div>
          <h4 className='text-white font-bold font-creatoDisplay leading-tight text-sm uppercase'>
            {review.role}
          </h4>
          <p className='text-gray-400 text-xs font-creatoDisplay'>
            {review.name}
          </p>
        </div>
      </div>
      <p className='text-gray-300 leading-relaxed font-creatoDisplay text-sm flex-grow'>
        {review.text}
      </p>
    </div>
  )
}

export default ReviewCard
