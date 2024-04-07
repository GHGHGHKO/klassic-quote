import {Separator} from "@/registry/new-york/ui/separator";
import {SidebarNav} from "@/app/examples/forms/components/sidebar-nav";
import {sidebarNavItems} from "@/config/sidebar";

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
      <>
        <div className="hidden space-y-6 p-10 pb-16 md:block">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">명대사 API 사용하기</h2>
            <p className="text-muted-foreground">
              버튼을 눌러 API를 호출하면 Response body를 확인 할 수 있습니다.
            </p>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/5">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            <div className="flex-1 lg:max-w-2xl">{children}</div>
          </div>
        </div>
        <div className="space-y-6 p-10 pb-16 md:hidden">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">명대사 API 사용하기</h2>
            <p className="text-muted-foreground">
              버튼을 눌러 API를 호출하면 Response body를 확인 할 수 있습니다.
            </p>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/5">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            <div className="flex-1 lg:max-w-2xl">{children}</div>
          </div>
        </div>
      </>
  )
}
