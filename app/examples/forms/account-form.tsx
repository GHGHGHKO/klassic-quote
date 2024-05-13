"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/registry/new-york/ui/button"
import {Form, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/registry/new-york/ui/form"
import {Input} from "@/registry/new-york/ui/input"
import {toast} from "@/registry/new-york/ui/use-toast"
import {Quote} from "@/data/quote";
import {Label} from "@/registry/new-york/ui/label";
import {CheckIcon, CopyIcon} from "@radix-ui/react-icons";
import {useState} from "react";

const accountFormSchema = z.object({
  URL: z.string()
})

type AccountFormValues = z.infer<typeof accountFormSchema>

export function AccountForm({ randomQuoteLink }: { randomQuoteLink: string }) {
    const [clicked, setClicked] = useState(false);

    const defaultValues: Partial<AccountFormValues> = {
        URL: randomQuoteLink,
    }

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  })

  function onSubmit(data: Quote) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] whitespace-pre-wrap rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  function fetchRandomQuote(): Promise<Quote> {
      return fetch(randomQuoteLink)
          .then(response => {
              return response.json();
          })
          .then(quote => {
              onSubmit(quote);
              return quote;
          });
  }

    const handleCopy = (textToCopy: string) => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setClicked(true);
                console.log('Text copied to clipboard');
            })
            .catch(err => {
                console.error('Unable to copy text to clipboard:', err);
            });
    };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(fetchRandomQuote)} className="space-y-8">
        <FormField
          control={form.control}
          name="URL"
          render={({ field }) => (
            <FormItem>
              <FormLabel>API URL</FormLabel>
                <div className="flex items-center space-x-2 pt-4">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            id="link"
                            {...field}
                            readOnly
                            className="h-9"
                        />
                    </div>
                    <Button type="submit" size="sm" className="px-3" onClick={() => handleCopy(field.value)}>
                        <span className="sr-only">Copy</span>
                        {clicked ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
                    </Button>
                </div>
              <FormDescription>
                  GET Method로 API를 호출합니다.
                  열려 있으니 언제든지 호출해도 됩니다! PR도 환영해요~
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Fetch API</Button>
      </form>
    </Form>
  )
}
