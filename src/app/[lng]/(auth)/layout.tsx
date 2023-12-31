'use client'
import FixedPlugin from "@/components/fixedPlugin"

export default function AuthLayout({ children }: {children: React.ReactNode}) {
  return (
    <div>
      <div className="relative float-right h-full min-h-screen w-full dark:!bg-navy-900">
        <main className={`mx-auto min-h-screen`}>
          <FixedPlugin />
          {children}
        </main>
      </div>
    </div>
  )
}