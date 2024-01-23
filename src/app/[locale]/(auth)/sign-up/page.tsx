import {
  Button,
  Center,
  Flex,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  TextProps,
  Title,
  // useMantineTheme
} from '@mantine/core'
import Link from 'next/link'
import { PATH_AUTH, PATH_DASHBOARD } from '@/routes'
// import { useColorScheme, useMediaQuery } from '@mantine/hooks'
import { Metadata } from 'next'
import Surface from '@/components/Surface'
import classes from './page.module.css'
import TranslationsProvider from '@/components/Language/TranslationsProvider'
// import LanguageChanger from '@/components/Language/LanguageChange'
import initTranslations from '@/app/i18n'

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

const i18nNamespaces = ['home']
export default async function SignUp({ params: { locale } }: Readonly<{ params: { locale: string } }>) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  // const theme = useMantineTheme();
  // const colorScheme = useColorScheme();
  // const mobile_match = useMediaQuery('(max-width: 425px)');
  const LINK_PROPS: TextProps = {
    className: classes.link,
  }
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <>
        <>
          <title>Sign up | DesignSparx</title>
          <meta
            name="description"
            content="Explore our versatile dashboard website template featuring a stunning array of themes and meticulously crafted components. Elevate your web project with seamless integration, customizable themes, and a rich variety of components for a dynamic user experience. Effortlessly bring your data to life with our intuitive dashboard template, designed to streamline development and captivate users. Discover endless possibilities in design and functionality today!"
          />
        </>
        <Title ta="center">Welcome!</Title>
        <Text ta="center">Create your account to continue</Text>
        <Surface component={Paper} className={classes.card}>
          <Flex direction={{ base: 'column', sm: 'row' }} gap={{ base: 'md' }}>
            <TextInput
              label="First name"
              placeholder="John"
              required
              classNames={{ label: classes.label }}
            />
            <TextInput
              label="Last name"
              placeholder="Doe"
              required
              classNames={{ label: classes.label }}
            />
          </Flex>
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            mt="md"
            classNames={{ label: classes.label }}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            classNames={{ label: classes.label }}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            required
            mt="md"
            classNames={{ label: classes.label }}
          />
          <Button
            fullWidth
            mt="xl"
            component={Link}
            href={PATH_DASHBOARD.default}
          >
            Create account
          </Button>
          <Center mt="md">
            <Text
              size="sm"
              component={Link}
              href={PATH_AUTH.signin}
              {...LINK_PROPS}
            >
              Already have an account? Sign in
            </Text>
          </Center>
        </Surface>
      </>
    </TranslationsProvider>
  )
}