import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { Separator } from "@/registry/new-york/ui/separator"
import {siteConfig} from "@/config/site";

export function Announcement() {
  return (
    <Link
      href={siteConfig.links.apiGithub}
      target="_blank"
      className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
      <span className="sm:hidden">업데이트 된 새로운 명대사를 확인 할 수 있어요~</span>
      <span className="hidden sm:inline">
        업데이트 된 새로운 명대사를 확인 할 수 있어요~
      </span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  )
}
