'use client'
import { useState } from 'react'
import Modal from '@/components/Modal'

const COLORS = {
  GREEN: 'green',
  BLUE: 'blue',
  RED: 'red',
}

const data = [
  {
    title: 'Modal 1',
    subheading: 'Lorem Ipsum is simply',
    date: 'Thursday, Jun 22nd, 2024',
    time: '06:00pm - 07:30pm EST',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    title: 'Modal 2',
    subheading: 'Lorem Ipsum is fun',
    date: 'Friday, Jun 04, 2023',
    time: '09:00pm - 09:30pm PST',
    description:
      'Lorem Ipsum is simply dummy cillum dolore eu fugiat nulla pariatur. cillum dolore eu fugiat nulla pariatur.',
  },
  {
    title: 'Modal 3',
    subheading: 'Lorem Ipsum is cool',
    date: 'Wednesday, Jun 21, 2023',
    time: '07:00pm - 07:30pm EST',
    description:
      'Lorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  },
]

const Page = ({ params }: { params: { color: string } }) => {
  const [modalVisibilities, setModalVisibilities] = useState(
    () => data.map((x) => false) ?? []
  )

  const handleModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const buttonElement = e.target as HTMLButtonElement
    if (buttonElement) {
      const index = parseInt(buttonElement.getAttribute('data-index') ?? '')
      const newVisibilities = [...modalVisibilities]
      newVisibilities[index] = !newVisibilities[index]
      setModalVisibilities(newVisibilities)
    }
  }

  const handleModalClose = (index: number) =>
    setModalVisibilities((prev) => {
      const newVisibilities = [...prev]
      newVisibilities[index] = !newVisibilities[index]
      return newVisibilities
    })

  const pageColor =
    params.color === COLORS.GREEN
      ? 'bg-[green]'
      : params.color === COLORS.BLUE
      ? 'bg-[blue]'
      : params.color === COLORS.RED
      ? 'bg-[red]'
      : 'bg-[white]'

  const allModals = data.map((currentData, index) => {
    return (
      <Modal
        key={`modal-${index}`}
        open={modalVisibilities[index]}
        handleClose={() => handleModalClose(index)}
        title={currentData.title}
        subheading={currentData.subheading}
        date={currentData.date}
        time={currentData.time}
        description={currentData.description}
        index={index}
      />
    )
  })
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
              onClick={handleModalOpen}
              data-index={0}
            >
              Open Modal 1
            </button>
            <button
              className='border'
              onClick={handleModalOpen}
              data-index={1}
            >
              Open Modal 2
            </button>
          </>
        )}
        {params.color === COLORS.BLUE && (
          <>
            <button
              className='border'
              onClick={handleModalOpen}
              data-index={1}
            >
              Open Modal 2
            </button>
            <button
              className='border'
              onClick={handleModalOpen}
              data-index={2}
            >
              Open Modal 3
            </button>
          </>
        )}
        {params.color === COLORS.RED && (
          <>
            <button
              className='border'
              onClick={handleModalOpen}
              data-index={0}
            >
              Open Modal 1
            </button>
            <button
              className='border'
              onClick={handleModalOpen}
              data-index={2}
            >
              Open Modal 3
            </button>
          </>
        )}
      </div>
      {allModals}
    </main>
  )
}

export default Page
