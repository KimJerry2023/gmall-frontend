import {
  Button,
  Center,
  Checkbox,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  TextProps,
  Title
} from '@mantine/core'
import Link from 'next/link'
import { PATH_AUTH, PATH_DASHBOARD } from '@/routes'
import type { Metadata } from 'next'
import { getDictionary } from '@/i18n/getDictionary';
import type { Locale } from '@/i18n/config';
import Surface from '@/components/Surface'
import classes from './page.module.css'
import Data from './data'

export const metadata: Metadata = {
  title: 'Gmall Frontend',
  description: 'A Shop Mall Frontend with Next.js',
  keywords: [
    'Next.js',
    'Mantine',
    'Dashboard',
    'Admin',
    'Admin Dashboard'
  ],
  creator: 'Kim'
}

export default async function SignIn({ params: { locale } }: Readonly<{ params: { locale: Locale } }>) {
  const dictionary = await getDictionary(locale)
  // const { t, resources } = await initTranslations(locale, i18nNamespaces)
  const LINK_PROPS: TextProps = {
    className: classes.link,
  }
  return (
    <>
      <>
        <>
          <title>Sign in | DesignSpare</title>
          <meta
            name="description"
            content="Explore our versatile dashboard website template featuring a stunning array of themes and meticulously crafted components. Elevate your web project with seamless integration, customizable themes, and a rich variety of components for a dynamic user experience. Effortlessly bring your data to life with our intuitive dashboard template, designed to streamline development and captivate users. Discover endless possibilities in design and functionality today!"
          />
        </>
      </>
      <Data />
      <Title ta="center">{dictionary.header}</Title>
      <Text ta="center">Sign in to your account to continue</Text>
      <Surface component={Paper} className={classes.card}>
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          required
          classNames={{ label: classes.label }}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          classNames={{ label: classes.label }}
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" classNames={{ label: classes.label }} />
          <Text
            component={Link}
            href={PATH_AUTH.passwordReset}
            size="sm"
            {...LINK_PROPS}
          >
            Forgot password?
          </Text>
        </Group>
        <Button
          fullWidth
          mt="xl"
          component={Link}
          href={PATH_DASHBOARD.default}
        >
          Sign in
        </Button>
        <Center mt="md">
          <Text
            fz="sm"
            ta="center"
            component={Link}
            href={PATH_AUTH.signup}
            {...LINK_PROPS}
          >
            Do not have an account yet? Create account
          </Text>
        </Center>
      </Surface>
    </>
  )
}
