'use client'

export default function AuthLayout({ children }: {children: React.ReactNode}) {
  return (
    <div className="d-flex flex-column">
      {children}
    </div>
  )
}