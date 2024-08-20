import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const schema = yup
  .object({
    name: yup.string().required(),
    lastName: yup.string(),
    phone: yup.number(),
    email: yup.string(),
    message: yup.string().required(),
  })
  .required()

function ContactPage() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const form = useRef()

  // const onSubmit = () => {
  //   emailjs
  //     .sendForm('service_eiwiwjh', 'template_pdpuapr', form.current, {
  //       publicKey: 'NlNL6pzajeeWEe8MS',
  //     })
  //     .then(
  //       () => {
  //         toast.success('Wiadomość wysłana!', {
  //           progressClassName: 'toastProgress',
  //         })
  //       },
  //       (error) => {
  //         toast.error('Coś poszło nie tak!', {})
  //         console.log(error)
  //       }
  //     )

  //   resetField('name')
  //   resetField('lastName')
  //   resetField('phone')
  //   resetField('email')
  //   resetField('message')
  // }
  const onSubmit = () => {
    console.log('test')
    // resetField('name')
    // resetField('lastName')
    // resetField('phone')
    // resetField('email')
    // resetField('message')
  }
  return (
    <main className='flex-grow'>
      <div className='mt-12'>
        <div
          id='contactHero'
          className='md:hidden mx-3 relative bg-green rounded-2xl'
        >
          <h1 className='text-center px-6 py-32 font-bold text-white text-5xl'>
            Contact
          </h1>
        </div>
        <div
          id='contactHero'
          className='hidden md:block container rounded-2xl mx-auto relative bg-green'
        >
          <h1 className='text-center px-6 py-24 font-bold text-white text-5xl'>
            Contact
          </h1>
        </div>
      </div>

      <div className='container mx-auto pt-12 md:pt-20 flex flex-col md:space-y-8 text-center'>
        <div className='flex flex-col md:flex-row justify-around space-y-12 md:space-y-0 md:space-x-8 lg:space-x-12 text-xl mx-12 md:mx-auto'>
          <div className='space-y-8'>
            <div className='flex space-x-4 items-center justify-center font-bold border-4 border-green text-green rounded-lg p-4'>
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
            <div className='flex space-x-4 items-center justify-center font-bold border-4 border-green text-green rounded-lg p-4 '>
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
            <div className='flex space-x-4 items-center justify-center font-bold border-4 border-green text-green rounded-lg p-4'>
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
                Amersfoort, Netherlands
              </p>
            </div>
          </div>
        </div>
        <div className='pb-12 md:pb-8 rounded-2xl flex flex-col text-green'>
          <h3 className='py-12'>Please fill the below form to contact us</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-6 md:space-y-8 w-full text-green md:w-3/4 mx-auto '
            ref={form}
          >
            <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-16'>
              <div className='flex flex-col md:w-1/2'>
                <input
                  {...register('name', { required: true })}
                  placeholder='Name'
                  className='border-green rounded-md border-2 p-2 pl-4 tracking-widest focus:outline-green'
                />
                {errors.name && (
                  <span className='text-red-500 pt-1 mt-1'>
                    This field is mandatory
                  </span>
                )}
              </div>

              <div className='flex flex-col md:w-1/2'>
                <input
                  {...register('lastName')}
                  placeholder='Last Name'
                  className='border-green rounded-md border-2 p-2 pl-4 tracking-widest focus:outline-green'
                />
                {errors.lastName && (
                  <span className='text-red-500 pt-1'>
                    This field is mandatory
                  </span>
                )}
              </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-16'>
              <div className='flex flex-col md:w-1/2'>
                <input
                  {...register('email', { required: true })}
                  placeholder='Email'
                  className='border-green rounded-md border-2 p-2 pl-4 tracking-widest focus:outline-green'
                />
                {errors.email && (
                  <span className='text-red-500 pt-1'>
                    This field is mandatory
                  </span>
                )}
              </div>

              <div className='flex flex-col  md:w-1/2'>
                <input
                  {...register('phone')}
                  placeholder='Phone'
                  className='border-green rounded-md border-2  p-2 pl-4 tracking-widest focus:outline-green'
                />
                {errors.phone && (
                  <span className='text-red-500 pt-1'>
                    This field is mandatory
                  </span>
                )}
              </div>
            </div>

            <div className='flex flex-col w-full'>
              <textarea
                {...register('message', { required: true })}
                placeholder='Message'
                className=' rounded-md border-2 border-green p-2 pl-4 tracking-widest focus:outline-green'
              />
              {errors.message && (
                <span className='text-red-500 pt-1'>
                  This field is mandatory
                </span>
              )}
            </div>
            <button
              type='submit'
              className='text-2xl text-white py-5 px-10 font-bold bg-green rounded-full hover:opacity-70 mx-auto'
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </main>
  )
}
export default ContactPage
