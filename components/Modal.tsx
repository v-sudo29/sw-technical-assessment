import { useEffect } from 'react'
import MobileLogo from './MobileLogo'
import TabletLogo from './TabletLogo'
import CloseIcon from './icons/CloseIcon'

interface ModalProps {
  open: boolean
  handleClose: () => void
  title: string
  subheading: string
  date: string
  time: string
}

const Modal = ({
  open,
  handleClose,
  title,
  subheading,
  date,
  time,
}: ModalProps) => {
  // Prevents scrolling when modal is open
  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement

    if (open) body.style.overflow = 'hidden'
    else body.style.overflow = 'visible'
  }, [open])

  if (!open) return <></>
  return (
    <div className='fixed top-0 w-full h-full flex justify-center z-10 border border-blue-500'>
      {/* OVERLAY */}
      <div
        className='fixed bg-black opacity-50 w-full h-full'
        onClick={handleClose}
      ></div>

      {/* MODAL */}
      <div className='absolute top-10 rounded-xl max-w-[339px] overflow-hidden font-poppins sm:max-w-[640px]'>
        {/* TOP SECTION */}
        <div className='relative flex flex-col gap-3 bg-primary-purple px-6 pb-6 pt-12 text-white font-medium sm:p-12'>
          <h1 className='text-[18px] leading-[25px] sm:text-[32px] sm:leading-[44.8px]'>
            {title}
          </h1>
          <p className='text-sm'>{subheading}</p>
          <div className='text-sm sm:text-base'>
            <p>{date}</p>
            <p>{time}</p>
          </div>
          <div className='absolute right-0 bottom-0 sm:hidden'>
            <MobileLogo />
          </div>
          <div className='absolute right-0 bottom-0 hidden sm:block'>
            <TabletLogo />
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className='bg-white'>
          <div className='flex justify-between px-6 pt-6 pb-4'>
            <div>
              <p className='text-sm leading-[19.6px] text-secondary-black'>
                Lorem Ipsum
              </p>
              <p className='leading-[22.4px] font-bold text-primary-purple'>
                Lorem Ipsum
              </p>
            </div>
            <button
              className='mb-auto'
              onClick={handleClose}
            >
              <CloseIcon />
            </button>
          </div>
          <div className='px-6 pb-6'>
            <p className='font-medium leading-[22.4px] text-primary-black'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s
            </p>
          </div>
          <div className='border-t border-t-[#E5E7EB] p-6'>
            <p className='font-medium text-sm text-center text-secondary-black leading-[19.6px] mb-[10px] sm:font-normal'>
              Lorem Ipsum is simply dummy text
            </p>
            <button className='rounded-xl w-full bg-[#32A7AD1A] font-medium font-roboto text-[#292B2E33] py-4 sm:uppercase sm:font-semibold'>
              Lorem Ipsum
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
