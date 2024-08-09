
export default function Message({message, show}) {
  return (
    <div className='absolute left-[4%] transition-all duration-300 ease-in top-0 z-0'>
      <span className='py-1 px-10 bg-green-600 text-white inline-flex justify-center items-center w-0'  style={{width:show}}>{message}</span> 
    </div>
  )
}
