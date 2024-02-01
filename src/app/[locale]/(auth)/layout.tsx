'use client';
import { Center, Stack, useMantineTheme } from "@mantine/core";
import Image from 'next/image'
// import { useColorScheme } from '@mantine/hooks'
import logo from 'public/images/logo-no-background.png'

function AuthLayout({ children }: {children: React.ReactNode}) {
  // const theme = useMantineTheme()
  // const colorScheme = useColorScheme()
  return (
    <Center
      style={{
        height: '100vh',
        width: '100vw'
      }}>
        <Stack>
          <Center>
            <Image
              src={logo}
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
