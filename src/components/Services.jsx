function Services({ isFirstVisit, textContent, currentLocale }) {
  return (
    <div
      className={`container flex flex-col text-white py-8 mt-12${
        isFirstVisit ? 'toAnimateMove' : ''
      }`}
      style={{ animationDelay: '3s' }}
    >
      <div className='bg-blue serviceSection rounded-t-2xl mx-4 md:mx-0'>
        <div className='serviceElement' id='resale'>
          <div className='flex items-center gap-4 pb-8 '>
            <h3>{textContent[`${currentLocale}`].homepage.services[1]}</h3>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 640 512'
              className='w-12'
              fill='white'
            >
              <path d='M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176L96 176l0 128c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7c0 0 0 0 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128l38.9 0 40 0 40 0c8.8 0 16 7.2 16 16l0 208c0 17.7-14.3 32-32 32l-32 0c-11.8 0-22.2-6.4-27.7-16l-84.9 0c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384l-32 0c-17.7 0-32-14.3-32-32L0 144c0-8.8 7.2-16 16-16l40 0 40 0 19.8 0c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64L259 64c4.4 0 8.9 .2 13.2 .6zM544 320l0-144-48 0c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1l74.8 0zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z' />
            </svg>
          </div>
          <p>{textContent[`${currentLocale}`].homepage.services[2]}</p>
        </div>
      </div>
      <div className='bg-darkBlue serviceSection mx-4 md:mx-0' id='integration'>
        <div className='serviceElement'>
          <div className='flex items-center gap-4 pb-8'>
            <h3>{textContent[`${currentLocale}`].homepage.services[3]}</h3>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              className='w-12'
              fill='white'
            >
              <path d='M48.7 125.8l53.2 31.9c7.8 4.7 17.8 2 22.2-5.9L201.6 12.1c3-5.4-.9-12.1-7.1-12.1c-1.6 0-3.2 .5-4.6 1.4L47.9 98.8c-9.6 6.6-9.2 20.9 .8 26.9zM16 171.7l0 123.5c0 8 10.4 11 14.7 4.4l60-92c5-7.6 2.6-17.8-5.2-22.5L40.2 158C29.6 151.6 16 159.3 16 171.7zM310.4 12.1l77.6 139.6c4.4 7.9 14.5 10.6 22.2 5.9l53.2-31.9c10-6 10.4-20.3 .8-26.9L322.1 1.4c-1.4-.9-3-1.4-4.6-1.4c-6.2 0-10.1 6.7-7.1 12.1zM496 171.7c0-12.4-13.6-20.1-24.2-13.7l-45.3 27.2c-7.8 4.7-10.1 14.9-5.2 22.5l60 92c4.3 6.7 14.7 3.6 14.7-4.4l0-123.5zm-49.3 246L286.1 436.6c-8.1 .9-14.1 7.8-14.1 15.9l0 52.8c0 3.7 3 6.8 6.8 6.8c.8 0 1.6-.1 2.4-.4l172.7-64c6.1-2.2 10.1-8 10.1-14.5c0-9.3-8.1-16.5-17.3-15.4zM233.2 512c3.7 0 6.8-3 6.8-6.8l0-52.6c0-8.1-6.1-14.9-14.1-15.9l-160.6-19c-9.2-1.1-17.3 6.1-17.3 15.4c0 6.5 4 12.3 10.1 14.5l172.7 64c.8 .3 1.6 .4 2.4 .4zM41.7 382.9l170.9 20.2c7.8 .9 13.4-7.5 9.5-14.3l-85.7-150c-5.9-10.4-20.7-10.8-27.3-.8L30.2 358.2c-6.5 9.9-.3 23.3 11.5 24.7zm439.6-24.8L402.9 238.1c-6.5-10-21.4-9.6-27.3 .8L290.2 388.5c-3.9 6.8 1.6 15.2 9.5 14.3l170.1-20c11.8-1.4 18-14.7 11.5-24.6zm-216.9 11l78.4-137.2c6.1-10.7-1.6-23.9-13.9-23.9l-145.7 0c-12.3 0-20 13.3-13.9 23.9l78.4 137.2c3.7 6.4 13 6.4 16.7 0zM174.4 176l163.2 0c12.2 0 19.9-13.1 14-23.8l-80-144c-2.8-5.1-8.2-8.2-14-8.2l-3.2 0c-5.8 0-11.2 3.2-14 8.2l-80 144c-5.9 10.7 1.8 23.8 14 23.8z' />
            </svg>
          </div>
          <p>{textContent[`${currentLocale}`].homepage.services[4]}</p>
        </div>
      </div>

      <div
        className='bg-darkerBlue serviceSection rounded-b-2xl mx-4 md:mx-0'
        id='susServices'
      >
        <div className='serviceElement'>
          <div className='flex items-center gap-4 pb-8'>
            <h3>{textContent[`${currentLocale}`].homepage.services[5]}</h3>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 576 512'
              className='w-12'
              fill='white'
            >
              <path d='M275.5 6.6C278.3 2.5 283 0 288 0s9.7 2.5 12.5 6.6L366.8 103C378 119.3 384 138.6 384 158.3l0 1.7c0 53-43 96-96 96s-96-43-96-96l0-1.7c0-19.8 6-39 17.2-55.3L275.5 6.6zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z' />
            </svg>
          </div>
          <div>
            {textContent[`${currentLocale}`].homepage.services[6]}
            <ul className='list-disc ml-8 pt-4'>
              <li>{textContent[`${currentLocale}`].homepage.services[7]}</li>
              <li>{textContent[`${currentLocale}`].homepage.services[8]}</li>
              <li>{textContent[`${currentLocale}`].homepage.services[9]}</li>
              <li>{textContent[`${currentLocale}`].homepage.services[10]}</li>
              <li>{textContent[`${currentLocale}`].homepage.services[11]}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services
