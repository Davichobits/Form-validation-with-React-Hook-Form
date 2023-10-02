
function App() {
  return (
    <>
      <h1 className="text-center mt-10 font-bold text-3xl text-gray-600">React Hook Form</h1>
      <form action="" className='flex flex-col w-60 mx-auto mt-10 gap-4'>
        <input className="border border-gray-300 rounded-lg h-8 p-4" type="text" placeholder="Username" />
        <input className="border border-gray-300 rounded-lg h-8 p-4" type="email" placeholder="Email" />
        <input className="border border-gray-300 rounded-lg h-8 p-4" type="text" placeholder="Channel" />
        <input className="bg-gray-300 rounded-lg h-8 hover:bg-gray-400 hover:text-white cursor-pointer " type="submit" />
      </form>
    </>
  )
}

export default App
