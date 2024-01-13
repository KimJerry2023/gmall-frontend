'use client'
import { Input, Button } from '@nextui-org/react'

const SignUp: React.FC = () => {
  return (
    <div className="relative flex">
      <div>
        <div className="">Sign up Page</div>
        <div>
          <Input
            size="sm"
            type="text"
            variant="bordered"
            isClearable
            labelPlacement="outside"
            label="Username"
            classNames={{
              label: 'text-black/50 dark:text-white/90',
            }}
          />
          <Input
            size="sm"
            type="password"
            variant="bordered"
            isClearable
            labelPlacement="outside"
            label="Password"
          />
          <Button color="primary" size="sm">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
