"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/registry/new-york/ui/scroll-area"

const examples = [
  {
    name: "랜덤",
    href: "/",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/forms",
  },
  {
    name: "타짜",
    href: "/examples/forms/the-war-of-flower",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/forms",
  },
  {
    name: "신세계",
    href: "/examples/forms/new-world",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/forms",
  },
  {
    name: "범죄와의 전쟁",
    href: "/examples/forms/nameless-gangster",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/forms",
  },
]

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  const pathname = usePathname()

  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("mb-4 flex items-center", className)} {...props}>
          {examples.map((example, index) => (
            <Link
              href={example.href}
              key={example.href}
              className={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                  pathname === example.href ||
                  (index === 0 && pathname === "/")
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground"
              )}
            >
              {example.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}

interface ExampleCodeLinkProps {
  pathname: string | null
}

export function ExampleCodeLink({ pathname }: ExampleCodeLinkProps) {
  const example = examples.find((example) => pathname?.startsWith(example.href))

  if (!example?.code) {
    return null
  }

  return (
    <Link
      href={example?.code}
      target="_blank"
      rel="nofollow"
      className="absolute right-0 top-0 hidden items-center rounded-[0.5rem] text-sm font-medium md:flex"
    >
      View code
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  )
}
