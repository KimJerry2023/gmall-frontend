'use client'
import { useState } from 'react'
import { Group, Menu, Image, UnstyledButton } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import classes from './LanguagePicker.module.css'

type dataItem = {
  label: string
  image: string
}
const data: dataItem[] = [
  {
    label: 'English',
    image: '/images/english.png'
  },
  {
    label: 'Chinese',
    image: '/images/chinese.png'
  },
]

type LanguagePickerProps = {
  type: 'collapsed' | 'expanded'
}

const LanguagePicker = ({ type }: LanguagePickerProps) => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      leftSection={<Image src={item.image} w={22} h={22} radius="lg" alt="flag" />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="sm"
      withinPortal
      width={200}
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group gap="xs">
            <Image src={selected.image} w={22} h={22} radius="lg" alt="flag" />
            {type === 'expanded' && (
              <span className={classes.label}>{selected.label}</span>
            )}
          </Group>
          {type === 'expanded' && (
            <IconChevronDown
              size="1rem"
              className={classes.icon}
              stroke={1.5}
            />
          )}
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};
export default LanguagePicker
