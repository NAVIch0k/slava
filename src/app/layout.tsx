import clsx from 'clsx'
import './globals.css'
import { Rubik_Wet_Paint } from 'next/font/google'
import Image from 'next/image'

const inter = Rubik_Wet_Paint({ subsets: ['cyrillic'], weight: '400' })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={clsx(inter.className, 'text-slate-600 relative')}>
        <Image
          src={'/img/bg.png'}
          width={3000}
          height={3000}
          alt=''
          className='absolute top-0 left-0 -z-10 w-full h-full'
        />
        <div className='max-w-2xl w-full m-auto pb-3 py-28 px-3'>
          {children}
        </div>
      </body>
    </html>
  )
}
