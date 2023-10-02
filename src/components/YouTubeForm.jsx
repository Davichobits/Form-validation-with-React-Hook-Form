import { useForm } from 'react-hook-form'

export const YouTubeForm = () => {
  const form = useForm();
  const { register } = form;

  return (
    <form action="" className='flex flex-col w-60 mx-auto mt-10 gap-4'>
        <input className="border border-gray-300 rounded-lg h-8 p-4" type="text" id="username" name="username" placeholder="Username" {...register('username')} />
        <input className="border border-gray-300 rounded-lg h-8 p-4" type="email" id="email" name="email" placeholder="Email" {...register('email')} />
        <input className="border border-gray-300 rounded-lg h-8 p-4" type="text" id="channel" name="channel" {...register('channel')} placeholder="Channel" />
        <input className="bg-gray-300 rounded-lg h-8 hover:bg-gray-400 hover:text-white cursor-pointer " type="submit" />
      </form>
  )
}
