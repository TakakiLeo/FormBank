export default function Button({onClick, children}) {
  return (
    <button 
    onClick={onClick}
    type='submit' 
    className='transition duration-700 bg-very-dark-violet text-white text-center rounded-xl py-4 mt-12 hover:bg-purple-gradient-f w-full'
    > {children}</button>
  )
}
