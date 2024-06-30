/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/jwHjZya4Zb1
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Cabin } from 'next/font/google'
import { Archivo } from 'next/font/google'

cabin({
  subsets: ['latin'],
  display: 'swap',
})

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import EduImg from '../images/Higher-Education-Human-Right.jpg';
import EnvImg from '../images/combat-climate-change-hero-940x529.jpg';
import FamImg from '../images/Family_Portrait.jpg';
import TechImg from '../images/technologies-helping-to-drive-digital-transformation-and-laboratory-efficiencies-373640-960x540.jpg';
import TravImg from '../images/Longest-commercial-flights-Rosen-Aviation-scaled.jpeg';
import SisterImg from '../images/WhatsApp Image 2024-06-30 at 20.49.11.jpeg';

export function Landing() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="bg-primary px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <BookIcon className="h-6 w-6 text-primary-foreground" />
          <span className="text-lg font-semibold text-primary-foreground">Englishman around-the-world</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 text-sm font-medium text-primary transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Login
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md border border-primary-foreground bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Register
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/90 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Welcome to all-in-one international web for English teachers
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/90">
                Experience how the subject is taught around the world
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-5 lg:gap-10">
            <div className="group rounded-lg border bg-background p-6 transition-all hover:bg-muted">
              <img
                src={EduImg.src}
                width={300}
                height={200}
                alt="Education"
                className="mb-4 rounded-lg object-cover"
              />
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">Education</h3>
              <p className="text-muted-foreground">
                Knowledge is the fuel of progress. Get to know the most educated countries and learn from them.
              </p>
            </div>
            <div className="group rounded-lg border bg-background p-6 transition-all hover:bg-muted">
              <img
                src={EnvImg.src}
                width={300}
                height={200}
                alt="Environment"
                className="mb-4 rounded-lg object-cover"
              />
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">Environment</h3>
              <p className="text-muted-foreground">
                Mother nature takes care of everyone. See how each of us practice gratitude differently and think what can you do about it.
              </p>
            </div>
            <div className="group rounded-lg border bg-background p-6 transition-all hover:bg-muted">
              <img
                src={FamImg.src}
                width={300}
                height={200}
                alt="Family"
                className="mb-4 rounded-lg object-cover"
              />
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">Family</h3>
              <p className="text-muted-foreground">Home sweet home, but what is so sweet about it? Well everyone thinks differently, know why?</p>
            </div>
            <div className="group rounded-lg border bg-background p-6 transition-all hover:bg-muted">
              <img
                src={TechImg.src}
                width={300}
                height={200}
                alt="Technologies"
                className="mb-4 rounded-lg object-cover"
              />
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">Technologies</h3>
              <p className="text-muted-foreground">
                You are able to read this due to tech-boom. Who started it, who is continuing the legacy, who should we be thankful for? 
              </p>
            </div>
            <div className="group rounded-lg border bg-background p-6 transition-all hover:bg-muted">
              <img
                src={TravImg.src}
                width={300}
                height={200}
                alt="Travel"
                className="mb-4 rounded-lg object-cover"
              />
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">Travel</h3>
              <p className="text-muted-foreground">
                Have you been overseas? or in another city? The most different places bring joy. Learn to direct around them.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12">
            <div className="flex items-center justify-center">
              <img
                src={SisterImg.src}
                width={400}
                height={400}
                alt="Founder"
                className="h-full w-full max-w-[300px] rounded-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Meet Our Founder</h2>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Guldana Turabay, English Language Expert</h3>
                <p className="text-muted-foreground">
                  She is a distinguished scholar and educator, holding a doctoral degree from Zhetysu University named after Ilyas Zhansugurov. 
                  Her academic journey is marked by excellence and a profound grasp of educational theory and practice. 
                  With numerous publications in reputable journals and presentations at international conferences, Guldana's research expertise shines, particularly in intercultural communication, language teaching, and teacher training.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <MailIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">guldana.turabay.1996@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">+7 (707) 123-4567</span>
              </div>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">Certificates Awarded</h2>
              <p className="mt-4 text-muted-foreground">
                Upon successful completion of our English courses, students will receive the following certificates:
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  src="/placeholder.svg"
                  width={100}
                  height={100}
                  alt="Certificate 1"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <span className="text-sm font-medium">Teaching Master</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  src="/placeholder.svg"
                  width={100}
                  height={100}
                  alt="Certificate 2"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <span className="text-sm font-medium">Environment Saviour</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  src="/placeholder.svg"
                  width={100}
                  height={100}
                  alt="Certificate 3"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <span className="text-sm font-medium">Family Person</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  src="/placeholder.svg"
                  width={100}
                  height={100}
                  alt="Certificate 4"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <span className="text-sm font-medium">Tech-Geek</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  src="/placeholder.svg"
                  width={100}
                  height={100}
                  alt="Certificate 5"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <span className="text-sm font-medium">Outdoor Ace</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 px-4 md:py-8 md:px-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">&copy; 2024 Englishman AWT. All rights reserved.</p>
        </div>
      </footer>
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


function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
