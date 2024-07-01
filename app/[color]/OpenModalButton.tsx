interface OpenModalButtonProps {
  index: number
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const OpenModalButton = ({ index, handleClick }: OpenModalButtonProps) => {
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

export default OpenModalButton
