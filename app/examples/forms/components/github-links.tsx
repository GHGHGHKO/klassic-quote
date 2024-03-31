'use client';
import { ChevronDownIcon } from "@radix-ui/react-icons"

import { Button } from "@/registry/new-york/ui/button"
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/registry/new-york/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/registry/new-york/ui/popover"
import {siteConfig} from "@/config/site";
import {Icons} from "@/components/icons";

export function GithubLinks() {
    function handleSelect(url: string) {
        window.open(url, '_blank');
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="ml-auto">
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                    Stars{" "}
                    <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[120px] p-0">
                <Command>
                    <CommandList>
                        <CommandGroup className="w-[120px] p-0">
                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2"
                                         onSelect={() => handleSelect(siteConfig.links.apiGithub)}>
                                <p>API GitHub</p>
                            </CommandItem>
                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                <p>Web GitHub</p>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
