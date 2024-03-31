"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/registry/new-york/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/new-york/ui/form"
import { Input } from "@/registry/new-york/ui/input"
import { toast } from "@/registry/new-york/ui/use-toast"
import {Quote} from "@/data/quote";
import {siteConfig} from "@/config/site";

const accountFormSchema = z.object({
  URL: z.string()
})

type AccountFormValues = z.infer<typeof accountFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  URL: siteConfig.links.randomQuote,
}

export function AccountForm() {
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
      return fetch(siteConfig.links.randomQuote)
          .then(response => {
              return response.json();
          })
          .then(quote => {
              onSubmit(quote);
              return quote;
          });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(fetchRandomQuote)} className="space-y-8">
        <FormField
          control={form.control}
          name="URL"
          render={({ field }) => (
            <FormItem>
              <FormLabel>API URL</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} readOnly={true} />
              </FormControl>
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
