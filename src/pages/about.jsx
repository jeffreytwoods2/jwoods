import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jeffrey Woods</title>
        <meta
          name="description"
          content="I'm Jeffrey Woods. I live in the Rocky Mountains, where I build AI-driven solutions."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Jeffrey Woods. I live in the Rocky Mountains, where I build AI-driven solutions.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;ve always loved to tinker with technology and see how it works. 
                When I was three, I learned how to drag the Fatty Bear icon to the 
                Recycle Bin on Windows 95. My family mourned the loss of their 
                favorite game (I only deleted the shortcut!) but I was thrilled with 
                the digital experience.
              </p>
              <p>
                The only thing I love more than software is a good pickup truck. 
                When my grandfather passed in 2020, I inherited his baby blue 1969 
                Dodge D100 - a truck I vowed to drive for the rest of my life. I 
                spent the entire year sweating and bleeding under the rig, restoring 
                it to roadworthy condition. I even installed a brand new engine...which 
                promptly seized up.
              </p>
              <p>
                I was devastated and had to sell the beloved heirloom just to break 
                even, but I learned something powerful that year: I can crack any code,  
                learn any system - no matter how complex or arcane. It just takes time 
                and persistence.
              </p>
              <p>
                I no longer fear any endeavor, be it a virtual machine, a compiler 
                written in Rust, or an AI-powered tutor serving the largest university 
                in the state. With a little persistence and some midnight oil, I can 
                build a solution that&apos;s reliable, performant, and exactly what you need.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://github.com/jeffreytwoods2" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/jeffrey-woods-ii" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:jeffreywoods@jwoods.dev"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                jeffreywoods @ this domain
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
