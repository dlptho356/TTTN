import { useEffect, useMemo, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const AdminBanner = (props) => {
  const { images = [] } = props || {}

  const [currentIndex, setCurrentIndex] = useState(0)

  const total = useMemo(() => (Array.isArray(images) ? images.length : 0), [images])

  const goTo = (idx) => {
    if (total <= 0) return
    const next = ((idx % total) + total) % total
    setCurrentIndex(next)
  }

  const goPrev = () => goTo(currentIndex - 1)
  const goNext = () => goTo(currentIndex + 1)

  useEffect(() => {
    if (total <= 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total)
    }, 3000)

    return () => clearInterval(interval)
  }, [total])

  if (!Array.isArray(images) || images.length === 0) return null

  return (
    <div className="w-full h-75 m-auto relative overflow-hidden">
      {images.map((item, idx) => {
        const isActive = idx === currentIndex
        const directionClass = idx > currentIndex ? 'translate-x-full' : '-translate-x-full'

        return (
          <img
            key={idx}
            src={item?.imageUrl}
            alt=""
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
              isActive
                ? 'opacity-100 z-10 translate-x-0'
                : `opacity-0 z-0 ${directionClass}`
            }`}
          />
        )
      })}

      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous"
        className="absolute flex items-center justify-center rounded-full border-2 border-white top-1/2 left-5 -translate-y-1/2 z-20 p-2 bg-transparent transition-colors duration-300 ease-in-out hover:bg-[#f4851a] hover:border-none text-white "
      >
        <IoIosArrowBack className="font-bold text-3xl"/>
      </button>

      <button
        type="button"
        onClick={goNext}
        aria-label="Next"
        className="absolute flex items-center justify-center rounded-full border-2 border-white top-1/2 right-5 -translate-y-1/2 z-20 p-2 bg-transparent transition-colors duration-300 ease-in-out hover:bg-[#f4851a] hover:border-none text-white "
      >
        <IoIosArrowForward className="font-bold text-3xl" />
      </button>

      <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center gap-2">
        {images.map((_, idx) => {
          const active = idx === currentIndex
          return (
            <button
              key={idx}
              type="button"
              aria-label={`Go to page ${idx + 1}`}
              onClick={() => goTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active ? 'w-6 bg-gray-500' : 'w-2 bg-gray-500/50 hover:bg-gray-500/80'
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default AdminBanner

