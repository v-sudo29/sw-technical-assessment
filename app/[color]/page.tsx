'use client'
import { useState } from 'react'
import Modal from '@/components/Modal'

const COLORS = {
  GREEN: 'green',
  BLUE: 'blue',
  RED: 'red',
}

const Page = ({ params }: { params: { color: string } }) => {
  const [isModalOneOpen, setIsModalOneOpen] = useState(true)

  const handleModalOneOpen = () => setIsModalOneOpen(true)
  const handleModalOneClose = () => setIsModalOneOpen(false)

  const pageColor =
    params.color === COLORS.GREEN
      ? 'bg-[green]'
      : params.color === COLORS.BLUE
      ? 'bg-[blue]'
      : params.color === COLORS.RED
      ? 'bg-[red]'
      : 'bg-[white]'

  if (
    params.color !== COLORS.GREEN &&
    params.color !== COLORS.BLUE &&
    params.color !== COLORS.RED
  )
    return <></>

  return (
    <main className={'min-h-[200vh]' + ' ' + pageColor}>
      <h1 className='text-white uppercase'>{params.color}</h1>
      <div className='flex gap-2'>
        {params.color === COLORS.GREEN && (
          <>
            <button
              className='border'
              onClick={handleModalOneOpen}
            >
              Open Modal 1
            </button>
            <button className='border'>Open Modal 2</button>
          </>
        )}
        {params.color === COLORS.BLUE && (
          <>
            <button className='border'>Open Modal 2</button>
            <button className='border'>Open Modal 3</button>
          </>
        )}
        {params.color === COLORS.RED && (
          <>
            <button
              className='border'
              onClick={handleModalOneOpen}
            >
              Open Modal 1
            </button>
            <button className='border'>Open Modal 3</button>
          </>
        )}
      </div>
      {/* MODAL 1 */}
      <Modal
        open={isModalOneOpen}
        handleClose={handleModalOneClose}
        title='Modal 1'
        subheading='Lorem Ipsum is simply'
        date='Thursday, Jun 22nd, 2024'
        time='06:00pm - 07:30pm EST'
      />
    </main>
  )
}

export default Page
