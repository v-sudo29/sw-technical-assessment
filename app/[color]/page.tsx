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
    descriptionStyles: 'leading-[22.4px] font-medium',
    descriptionTitleStyles: 'text-primary-purple font-bold',
    descriptionSubtitleStyles: 'text-secondary-black',
  },
  {
    title: 'Modal 2',
    subheading: 'Lorem Ipsum is fun',
    date: 'Friday, Jun 04, 2023',
    time: '09:00pm - 09:30pm PST',
    description:
      'Lorem Ipsum is simply dummy cillum dolore eu fugiat nulla pariatur. cillum dolore eu fugiat nulla pariatur.',
    descriptionStyles: 'text-sm leading-[19.6px] font-medium',
    descriptionTitleStyles: 'text-secondary-black font-bold',
    descriptionSubtitleStyles: 'text-secondary-black font-medium',
  },
  {
    title: 'Modal 3',
    subheading: 'Lorem Ipsum is cool',
    date: 'Wednesday, Jun 21, 2023',
    time: '07:00pm - 07:30pm EST',
    description:
      'Lorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    descriptionStyles: 'leading-[22.4px] font-medium',
    descriptionTitleStyles: 'text-secondary-black font-medium',
    descriptionSubtitleStyles: 'text-primary-purple font-medium',
  },
]

const OpenModalButton = ({
  index,
  handleClick,
}: {
  index: number
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}) => {
  return (
    <button
      className='border'
      onClick={handleClick}
      data-index={index}
    >
      Open Modal {index + 1}
    </button>
  )
}

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
        descriptionStyles={currentData.descriptionStyles}
        descriptionTitleStyles={currentData.descriptionTitleStyles}
        descriptionSubtitleStyles={currentData.descriptionSubtitleStyles}
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
            <OpenModalButton
              index={0}
              handleClick={handleModalOpen}
            />
            <OpenModalButton
              index={1}
              handleClick={handleModalOpen}
            />
          </>
        )}
        {params.color === COLORS.BLUE && (
          <>
            <OpenModalButton
              index={1}
              handleClick={handleModalOpen}
            />
            <OpenModalButton
              index={2}
              handleClick={handleModalOpen}
            />
          </>
        )}
        {params.color === COLORS.RED && (
          <>
            <OpenModalButton
              index={0}
              handleClick={handleModalOpen}
            />
            <OpenModalButton
              index={2}
              handleClick={handleModalOpen}
            />
          </>
        )}
      </div>
      {allModals}
    </main>
  )
}

export default Page
