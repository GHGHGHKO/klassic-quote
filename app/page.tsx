import Link from "next/link"

import { cn } from "@/lib/utils"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/registry/new-york/ui/button"
import FormsPage from "@/app/examples/forms/page";
import RandomQuote from "@/components/random-quote";
import {GithubLinks} from "@/app/examples/forms/components/github-links";

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>한국 클래식 영화 명대사 API</PageHeaderHeading>
        <PageHeaderDescription>
            <RandomQuote/>
        </PageHeaderDescription>
        <PageActions>
          <Link href="/docs" className={cn(buttonVariants())}>
            WIP
          </Link>
          <GithubLinks />
        </PageActions>
      </PageHeader>
      <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">

      </section>
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow-lg">
          <FormsPage />
        </div>
      </section>
    </div>
  )
}
