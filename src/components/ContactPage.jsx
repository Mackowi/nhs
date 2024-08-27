import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRef } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import textContent from './textContent.json'
import emailjs from '@emailjs/browser'

const schema = yup
  .object({
    name: yup.string().required(),
    lastName: yup.string(),
    phone: yup.number(),
    email: yup.string(),
    message: yup.string().required(),
  })
  .required()

function ContactPage({ currentLocale }) {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const form = useRef()

  const onSubmit = () => {
    emailjs
      .sendForm('service_i4luui7', 'template_ims3uzq', form.current, {
        publicKey: 'q8EWGQ_esIC9VXjl0',
      })
      .then(
        () => {
          toast.success('Wiadomość wysłana!', {
            progressClassName: 'toastProgress',
          })
          resetField('name')
          resetField('lastName')
          resetField('phone')
          resetField('email')
          resetField('message')
        },
        (error) => {
          toast.error('Coś poszło nie tak!', {})
          console.log(error)
        }
      )
    // resetField('name')
    // resetField('lastName')
    // resetField('phone')
    // resetField('email')
    // resetField('message')
  }

  return (
    <main className='flex flex-col flex-grow items-center py-8 md:py-12 px-4'>
      <div className='container'>
        <div className='md:hidden bg-green rounded-2xl'>
          <h1 className='text-center py-12 font-bold text-white text-5xl'>
            {textContent[`${currentLocale}`].contact[1]}
          </h1>
        </div>
        <div className='hidden md:block container rounded-2xl mx-auto bg-green'>
          <h1 className='text-center py-24 font-bold text-white text-5xl'>
            {textContent[`${currentLocale}`].contact[1]}
          </h1>
        </div>
      </div>

      <div className='container py-8 md:pt-24 flex flex-col md:space-y-8 text-center'>
        <div className='flex flex-col lg:flex-row justify-around gap-8 lg:gap-0 text-xl'>
          <div className='space-y-8'>
            <div className='flex space-x-4 items-center justify-center font-bold border-2 border-green text-green rounded-lg p-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-10 h-10 md:w-8 md:h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                />
              </svg>
              <p className='tracking-wider font-bold text-green'>
                +31 62 481 34 11
              </p>
            </div>
          </div>
          <div className='space-y-8'>
            <div className='flex space-x-4 items-center justify-center font-bold border-2 border-green text-green rounded-lg p-2 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-10 h-10 md:w-8 md:h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                />
              </svg>

              <p className='hidden sm:block font-bold tracking-wider text-green'>
                rafal.zydek@nghs.eu
              </p>
              <p className='sm:hidden text-base font-bold tracking-wider text-green'>
                rafal.zydek@nghs.eu
              </p>
            </div>
          </div>
          <div className='space-y-8'>
            <div className='flex space-x-4 items-center justify-center font-bold border-2 border-green text-green rounded-lg p-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-14 h-14 md:w-8 md:h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                />
              </svg>
              <p className='font-bold tracking-wider text-green'>
                {textContent[`${currentLocale}`].contact[2]}
              </p>
            </div>
          </div>
        </div>
        <div className='md:pb-8 rounded-2xl flex flex-col text-green'>
          <h3 className='py-12'>
            {textContent[`${currentLocale}`].contact[3]}
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-6 md:space-y-8 w-full text-green md:w-3/4 mx-auto '
            ref={form}
          >
            <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-16'>
              <div className='flex flex-col md:w-1/2'>
                <input
                  {...register('name', { required: true })}
                  placeholder={textContent[`${currentLocale}`].contact[4]}
                  className='border-green rounded-md border-2 p-2 pl-4 tracking-widest focus:outline-green'
                />
                {errors.name && (
                  <span className='text-red-500 pt-1 mt-1'>
                    {textContent[`${currentLocale}`].contact[10]}
                  </span>
                )}
              </div>

              <div className='flex flex-col md:w-1/2'>
                <input
                  {...register('lastName')}
                  placeholder={textContent[`${currentLocale}`].contact[5]}
                  className='border-green rounded-md border-2 p-2 pl-4 tracking-widest focus:outline-green'
                />
                {errors.lastName && (
                  <span className='text-red-500 pt-1'>
                    {textContent[`${currentLocale}`].contact[10]}
                  </span>
                )}
              </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-16'>
              <div className='flex flex-col md:w-1/2'>
                <input
                  {...register('email', { required: true })}
                  placeholder={textContent[`${currentLocale}`].contact[6]}
                  className='border-green rounded-md border-2 p-2 pl-4 tracking-widest focus:outline-green'
                />
                {errors.email && (
                  <span className='text-red-500 pt-1'>
                    {textContent[`${currentLocale}`].contact[10]}
                  </span>
                )}
              </div>

              <div className='flex flex-col  md:w-1/2'>
                <input
                  {...register('phone')}
                  placeholder={textContent[`${currentLocale}`].contact[7]}
                  className='border-green rounded-md border-2  p-2 pl-4 tracking-widest focus:outline-green'
                />
                {errors.phone && (
                  <span className='text-red-500 pt-1'>
                    {textContent[`${currentLocale}`].contact[10]}
                  </span>
                )}
              </div>
            </div>

            <div className='flex flex-col w-full'>
              <textarea
                {...register('message', { required: true })}
                placeholder={textContent[`${currentLocale}`].contact[8]}
                className=' rounded-md border-2 border-green p-2 pl-4 tracking-widest focus:outline-green'
              />
              {errors.message && (
                <span className='text-red-500 pt-1'>
                  {textContent[`${currentLocale}`].contact[10]}
                </span>
              )}
            </div>
            <button
              type='submit'
              className='text-2xl text-white p-2 m-4 px-10 font-bold bg-green rounded-md hover:opacity-70 mx-auto'
            >
              {textContent[`${currentLocale}`].contact[9]}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </main>
  )
}
export default ContactPage
