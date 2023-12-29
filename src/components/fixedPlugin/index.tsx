'use client'
import { useState } from 'react'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'

const FixedPlugin = (props: { [x: string]: any}) => {
  const { ...rest } = props
  const [darkmode, setDarkmode] = useState(false)
  return (
    <button
      onClick={() => {
        if (darkmode) {
          document.body.classList.remove('dark')
          setDarkmode(false)
        } else {
          document.body.classList.add('dark')
          setDarkmode(true)
        }
      }}
      {...rest}
      className="border-px fixed bottom-[30px] right-[35px] !z-[99] flex h-[60px] w-[60px] items-center justify-center rounded-full border-[#6a53ff] bg-gradient-to-br from-blue-400 to-blue-600 p-0"
    >
      <div className="cursor-pointer text-gray-600">
        {darkmode ? (
          <RiSunFill className="h-4 w-4 text-white" />
        ) : (
          <RiMoonFill className="h-4 w-4 text-white" />
        )}
      </div>
    </button>
  )
}
export default FixedPlugin
