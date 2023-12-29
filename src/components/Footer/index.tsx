const Footer = () => {
  return (
    <div className="z-[5] mx-auto flex w-full max-w-screen-sm flex-col items-center justify-between px-[20px] pb-4 lg:mb-6 lg:max-w-[100%] lg:flex-row xl:mb-2 xl:w-[1310px] xl:pb-6">
      <p className="mb-4 text-center text-sm font-medium text-gray-600/75 sm:!mb-0 md:text-lg">
        <span className="mb-4 text-center text-sm text-gray-600/75 sm:!mb-0 md:text-base">
          @{new Date().getFullYear()} Gmall Shop. All Rights Reserved
        </span>
      </p>
      <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
        <li>
          <a
            target="blank"
            href="mailto:hello@simmmple.com"
            className="text-sm text-gray-600 hover:text-gray-600 md:text-base lg:text-white lg:hover:text-white"
          >
            Support
          </a>
        </li>
        <li>
          <a href="https://simmmple.com/licenses" target="blank" className="text-sm text-gray-600 hover:text-gray-600 md:text-base lg:text-white lg:hover:text-white">
            License
          </a>
        </li>
        <li>
          <a
            target="blank"
            href="https://simmmple.com/terms-of-service"
            className="text-sm text-gray-600 hover:text-gray-600 md:text-base lg:text-white lg:hover:text-white"
          >
            Terms of Use
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Footer
