import { Separator } from "@/registry/new-york/ui/separator"
import {AccountForm} from "@/app/examples/forms/account-form";
import {siteConfig} from "@/config/site";

export default function SettingsOthersRandomQuote() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">여러 명대사</h3>
                <p className="text-sm text-muted-foreground">
                    여러 명대사를 볼 수 있는 API 입니다.
                </p>
            </div>
            <Separator />
            <AccountForm randomQuoteLink={siteConfig.links.theManFromNowhereRandomQuote}/>
            <Separator />
            <AccountForm randomQuoteLink={siteConfig.links.namelessGangsterRandomQuote}/>
        </div>
    )
}
