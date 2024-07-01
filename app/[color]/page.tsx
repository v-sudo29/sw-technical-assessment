'use client'
import { useState } from 'react'
import Modal from './Modal'
import OpenModalButton from './OpenModalButton'

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
    descriptionStyles:
      'leading-[22.4px] font-medium sm:leading-[19.6px] sm:text-sm sm:font-medium md:font-normal',
    descriptionTitleStyles: 'text-primary-purple font-bold',
    descriptionSubtitleStyles:
      'text-secondary-black text-sm leading-[19.6px] sm:font-medium md:font-normal',
    textAboveButtonStyles:
      'font-medium text-sm leading-[19.6px] sm:font-normal md:font-medium',
    buttonTextStyles:
      'font-medium tracking-[0.5px] sm:uppercase sm:font-poppins sm:font-semibold sm:leading-[22.4px] md:font-normal',
  },
  {
    title: 'Modal 2',
    subheading: 'Lorem Ipsum is fun',
    date: 'Friday, Jun 04, 2023',
    time: '09:00pm - 09:30pm PST',
    description:
      'Lorem Ipsum is simply dummy cillum dolore eu fugiat nulla pariatur. cillum dolore eu fugiat nulla pariatur.',
    descriptionStyles:
      'text-sm leading-[19.6px] font-medium sm:text-base sm:leading-[22.4px] md:text-sm md:font-normal md:leading-[19.6px]',
    descriptionTitleStyles:
      'text-secondary-black font-bold sm:text-primary-purple md:font-medium',
    descriptionSubtitleStyles:
      'text-secondary-black font-medium text-sm leading-[19.6px]',
    textAboveButtonStyles:
      'font-medium text-sm leading-[19.6px] md:leading-[21px] md:text-[15px]',
    buttonTextStyles:
      'font-medium tracking-[0.5px] sm:leading-[22.4px] sm:font-poppins sm:tracking-normal',
  },
  {
    title: 'Modal 3',
    subheading: 'Lorem Ipsum is cool',
    date: 'Wednesday, Jun 21, 2023',
    time: '07:00pm - 07:30pm EST',
    description:
      'Lorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    descriptionStyles:
      'leading-[22.4px] font-medium sm:text-sm sm:leading-[19.6px]',
    descriptionTitleStyles:
      'text-secondary-black font-medium sm:font-semibold sm:text-primary-purple',
    descriptionSubtitleStyles:
      'text-primary-purple font-medium text-sm leading-[19.6px] sm:font-normal sm:text-secondary-black md:text-base md:leading-[22.4px] md:uppercase',
    textAboveButtonStyles: 'font-medium text-sm leading-[19.6px]',
    buttonTextStyles:
      'font-medium tracking-[0.5px] sm:font-poppins sm:leading-[22.4px] sm:tracking-normal md:text-lg md:leading-[32px] md:font-normal md:tracking-[0.47px]',
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

  if (
    params.color !== COLORS.GREEN &&
    params.color !== COLORS.BLUE &&
    params.color !== COLORS.RED
  )
    return <></>

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
        textAboveButtonStyles={currentData.textAboveButtonStyles}
        buttonTextStyles={currentData.buttonTextStyles}
        index={index}
      />
    )
  })

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
