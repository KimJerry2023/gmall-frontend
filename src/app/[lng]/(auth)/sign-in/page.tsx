import { Metadata } from "next";
import Link from 'next/link'
import { Checkbox } from "@nextui-org/react";
import { FcGoogle } from 'react-icons/fc'
import { useTranslation } from "@/i18n";
import Footer from "@/components/Footer";
import InputField from "@/components/fields/InputField";

export const metadata: Metadata = {
  title: "Signin Page | Next.js E-commerce Dashboard Template",
  description: "This is Signin page for TailAdmin Next.js",
  // other metadata
};

export default async function SignIn ({ params: { lng }} : Readonly<{ params: {
	lng: string
}}>) {
  const { t } = await useTranslation(lng, 'sign')
  return (
    <div className="relative flex">
      <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
        <div className="mb-auto flex flex-col pl-5 pr-5 md:pl-12 md:pr-0 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
          <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
            <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
              <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                {t('title')}
              </h3>
              <p className="mb-9 ml-1 text-base text-gray-600/70">
                Enter your username and password to sign in!
              </p>
              <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white">
                <div className="rounded-full text-xl">
                  <FcGoogle />
                </div>
                <p className="text-sm font-medium text-navy-700 dark:text-white">
                  Sign In with Google
                </p>
              </div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
                <p className="text-base text-gray-600"> or </p>
                <div className="h-px w-full bg-gray-200 dark:!bg-navy-700"></div>
              </div>
              <InputField
                variant="auth"
                extra="mb-3"
                label="Username"
                placeholder="please enter your username"
                id="username"
                type="text"
              />
              <InputField
                variant="auth"
                extra="mb-3"
                label="Password"
                placeholder="min 8 characters"
                id="password"
                type="password"
              />
              <div className="mb-4 flex items-center justify-between px-2">
                <div className="mt-2 flex items-center">
                  <Checkbox radius="sm" />
                  <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                    Keep me logged In
                  </p>
                </div>
                <a href=" " className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white">
                  Forgot Password?
                </a>
              </div>
              <button
                className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                Sign In
              </button>
              <div className="mt-4">
                <span className="text-sm font-medium text-navy-700 dark:text-gray-500">
                  Not registerd yet?
                </span>
                <Link
                  href="/sign-up"
                  className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                >
                  Create an account
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute right-0 hidden h-full min-h-screen md:block lg:w[49vw] 2xl:w-[44vw]">
            <div
              className={`absolute flex h-full w-full items-end justify-center bg-gradient-to-br from-brand-400 to-brand-600 bg-cover bg-center lg:rounded-bl-[120px] xl:rounded-bl-[200px]`}>
              <div className="relative flex h-full w-full">
                <div
                  className="flex h-full w-full items-center justify-center text-white text-[48px] leading-[48px]"
                >
                  Gmall Shop Admin
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
