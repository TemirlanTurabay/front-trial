/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/wr8kG6w1VgA
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Chivo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export function Chat() {
  return (
    <div className="flex h-screen w-full">
      <aside className="flex flex-col items-center bg-background border-r px-4 py-6 gap-4">
        <Link
          href="#"
          className="flex items-center justify-center rounded-full bg-primary text-primary-foreground w-10 h-10"
          prefetch={false}
        >
          <WebcamIcon className="w-6 h-6" />
        </Link>
        <nav className="flex flex-col items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <BookIcon className="w-6 h-6" />
            <span className="sr-only">Grammar</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <LanguagesIcon className="w-6 h-6" />
            <span className="sr-only">Vocabulary</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <MicIcon className="w-6 h-6" />
            <span className="sr-only">Pronunciation</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <ContactIcon className="w-6 h-6" />
            <span className="sr-only">Conversation</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <FilePenIcon className="w-6 h-6" />
            <span className="sr-only">Writing</span>
          </Button>
        </nav>
      </aside>
      <div className="flex flex-col flex-1">
        <header className="flex items-center justify-between bg-background border-b px-6 py-4">
          <div className="flex items-center gap-4">
            <WebcamIcon className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold">English Tutor</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 overflow-auto">
          <div className="flex flex-col gap-4 p-6">
            <div className="flex items-start gap-4">
              <Avatar className="w-8 h-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>YO</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-bold">You</div>
                <div className="prose text-muted-foreground">
                  <p>Can you explain the difference between "affect" and "effect"?</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="w-8 h-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>OA</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-bold">English Tutor</div>
                <div className="prose text-muted-foreground">
                  <p>
                    Great question! The words "affect" and "effect" are often confused, but they have different
                    meanings:
                  </p>
                  <p>
                    "Affect" is a verb that means to influence or change something. For example, "The weather affected
                    my mood\n today."
                  </p>
                  <p>
                    "Effect" is a noun that means the result or consequence of something. For example, "The rain had a
                    positive effect on\n the plants."
                  </p>
                  <p>
                    So, in summary, "affect" is a verb and "effect" is a noun. Let me know if this helps explain the
                    difference!
                  </p>
                </div>
                <div className="flex items-center gap-2 py-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                  >
                    <ClipboardIcon className="w-4 h-4" />
                    <span className="sr-only">Copy</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                  >
                    <ThumbsUpIcon className="w-4 h-4" />
                    <span className="sr-only">Upvote</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                  >
                    <ThumbsDownIcon className="w-4 h-4" />
                    <span className="sr-only">Downvote</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                  >
                    <RefreshCcwIcon className="w-4 h-4" />
                    <span className="sr-only">Regenerate</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex items-center bg-background border-t px-6 py-4 gap-2">
          <div className="relative flex-1">
            <Textarea
              placeholder="Type your message..."
              name="message"
              id="message"
              rows={1}
              className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
            />
            <Button type="submit" size="icon" className="absolute w-8 h-8 top-3 right-3">
              <PaperclipIcon className="w-4 h-4" />
              <span className="sr-only">Attach file</span>
            </Button>
          </div>
          <Button type="submit" className="shrink-0">
            Send
          </Button>
        </footer>
      </div>
    </div>
  )
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function ContactIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  )
}


function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function LanguagesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  )
}


function MicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}


function PaperclipIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}


function RefreshCcwIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  )
}


function ThumbsDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}


function WebcamIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  )
}
