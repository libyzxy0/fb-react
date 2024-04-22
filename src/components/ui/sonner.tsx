import React from 'react'
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-gray-950 text-white border-2 group-[.toaster]:text-white group-[.toaster]:border-gray-800 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-gray-600",
          actionButton:
            "group-[.toast]:bg-white group-[.toast]:text-gray-800",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
