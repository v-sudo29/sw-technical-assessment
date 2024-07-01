const COLORS = {
  GREEN: 'green',
  BLUE: 'blue',
  RED: 'red',
}

const Page = ({ params }: { params: { color: string } }) => {
  const pageColor =
    params.color === COLORS.GREEN
      ? 'bg-[green]'
      : params.color === COLORS.BLUE
      ? 'bg-[blue]'
      : params.color === COLORS.RED
      ? 'bg-[red]'
      : 'bg-[white]'

  return (
    <main className={'min-h-[200vh]' + ' ' + pageColor}>
      <h1 className='text-white uppercase'>{params.color}</h1>
    </main>
  )
}

export default Page
