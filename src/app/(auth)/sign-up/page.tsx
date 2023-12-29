import { Metadata } from "next";
import { Input, Button } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "SignUp Page | Next.js E-commerce Dashboard Template",
  description: "This is SignUp page for TailAdmin Next.js",
  // other metadata
};

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
              label: 'text-black/50 dark:text-white/90'
            }}
          />
          <Input
            size="sm"
            type="password"
            variant="bordered"
            isClearable
            labelPlacement="outside"
            label="Password" />
          <Button color="primary" size="sm">Sign up</Button>
        </div>
      </div>

    </div>
  )
}

export default SignUp
