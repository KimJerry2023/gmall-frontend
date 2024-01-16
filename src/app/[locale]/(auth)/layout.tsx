// 'use client'
// import FixedPlugin from "@/components/fixedPlugin"

// export default function AuthLayout({ children }: {children: React.ReactNode}) {
//   return (
//     <div>
//       <div className="relative float-right h-full min-h-screen w-full dark:!bg-navy-900">
//         <main className={`mx-auto min-h-screen`}>
//           <FixedPlugin />
//           {children}
//         </main>
//       </div>
//     </div>
//   )
// }
'use client';
import { Center, Stack, useMantineTheme } from "@mantine/core";
import Image from 'next/image'
import { useColorScheme } from '@mantine/hooks'

function AuthLayout({ children }: {children: React.ReactNode}) {
  const theme = useMantineTheme()
  const colorScheme = useColorScheme()
  return (
    <Center
      style={{
        height: '100vh',
        width: '100vw'
      }}>
        <Stack>
          <Center>
            <Image
              src="/images/logo-no-background.png"
              alt="Design Logo"
              width={96}
              height={96}
              style={{ objectFit: 'contain' }}
            />
          </Center>
          {children}
        </Stack>
      </Center>
  )
}
export default AuthLayout
