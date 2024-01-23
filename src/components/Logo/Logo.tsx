import classes from './Logo.module.css';
import {
  Group,
  Text,
  UnstyledButton,
  UnstyledButtonProps,
} from '@mantine/core'
import Link from 'next/link'
import Image from 'next/image'
import logo from 'public/images/logo-no-background.png'

type LogoProps = {
  href?: string;
} & UnstyledButtonProps;

const Logo = ({ href, ...others }: LogoProps) => {
  return (
    <UnstyledButton
      className={classes.logo}
      component={Link}
      href={href || '/'}
      {...others}
      >
      <Group gap="xs">
        <Image
          src={logo}
          height={24}
          width={24}
          alt="design sparx logo"
        />
        <Text fw={700}>Gmall admin</Text>
      </Group>
    </UnstyledButton>
  )
}
export default Logo
