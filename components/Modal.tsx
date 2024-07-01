import Logo from './Logo'

const Modal = () => {
  return (
    <div className='rounded-[8px] max-w-[339px] overflow-hidden'>
      <div className='relative flex flex-col gap-3 bg-primary-purple px-6 pb-6 pt-12 text-white font-medium'>
        <h1 className='text-[18px] leading-[25px]'>Modal 1</h1>
        <p className='text-[14px]'>Lorem Ipsum is simply</p>
        <div>
          <p className='text-[14px]'>Thursday, Jun 22, 2024</p>
          <p className='text-[14px]'>06:00pm - 07:30pm EST</p>
        </div>
        <div className='absolute right-0 bottom-0'>
          <Logo />
        </div>
      </div>
    </div>
  )
}

export default Modal
