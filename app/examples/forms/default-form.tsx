import {Separator} from "@/registry/new-york/ui/separator";
import {SidebarNav} from "@/app/examples/forms/components/sidebar-nav";
import {AccountForm} from "@/app/examples/forms/account-form";
import {siteConfig} from "@/config/site";
import {sidebarNavItems} from "@/config/sidebar"

export default function FormsPage() {

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
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-medium">랜덤 명대사</h3>
                            <p className="text-sm text-muted-foreground">
                                랜덤 명대사를 볼 수 있는 API 입니다.
                            </p>
                        </div>
                        <Separator />
                        <AccountForm randomQuoteLink={siteConfig.links.randomQuote}/>
                    </div>
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
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-medium">랜덤 명대사</h3>
                        <p className="text-sm text-muted-foreground">
                            랜덤 명대사를 볼 수 있는 API 입니다.
                        </p>
                    </div>
                    <Separator />
                    <AccountForm randomQuoteLink={siteConfig.links.randomQuote}/>
                </div>
            </div>
        </>
    )
}
