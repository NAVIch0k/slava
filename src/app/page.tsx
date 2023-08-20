import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Хоррор Квесты - Загадки Ужаса',
  description:
    'Погрузитесь в мир ужаса и загадок с нашими хоррор квестами. Решайте головоломки, исследуйте темные комнаты и раскройте мрачные тайны.',
  keywords: 'хоррор квесты, ужас, загадки, головоломки, мистика, тайны',
  icons: './skull.svg',
  openGraph: {
    title: 'Хоррор Квесты: Погрузитесь в Мир Ужаса и Загадок',
    description:
      'Погрузитесь в мир ужаса и загадок с нашими хоррор квестами. Решайте головоломки, исследуйте темные комнаты и раскройте мрачные тайны.',
    images: './skull.svg',
    url: '',
    type: 'website',
    locale: 'ru'
  }
}

export default function Home() {
  return (
    <main className='w-full flex flex-col'>
      <div className='w-full flex justify-center pb-4'>
        <Image
          className='w-full h-full object-contain max-w-xl'
          src={'/img/photo4.jpeg'}
          width={1000}
          height={1000}
          alt=''
        />
      </div>
      <h1 className='text-2xl w-full'>
        Размеренный темп жизни и отсутствие сильных эмоций негативно сказываются
        не только на настроении, но и общем самочувствии человека. Чтобы
        встряхнуться и пощекотать нервы, мы предлагаем отличный вариант
        отдыха.На 60 минут вы и ваши друзья погружаетесь в атмосферу страха,
        ужаса и таинственности, оказавшись взаперти в помещении, где ваша
        главная задача - «Выбраться любой ценой»... Леденящая душу история не
        оставит равнодушным никого, подарив массу ярких впечатлений и
        воспоминаний. И ВСЕ ЭТО ВЫ НАЙДЕТЕ В КОМПАНИИ “ALLIANCE QUEST” ☠
      </h1>

      <div className='my-6 flex flex-col gap-3'>
        <h2 className='text-3xl text-slate-400'>Галлерея</h2>
        <div
          className='grid gap-4'
          style={{ gridTemplateColumns: 'repeat(auto-fit, 347px)' }}
        >
          <Image
            className='w-[350px] h-[350px] object-cover shadow-2xl'
            src={'/img/photo1.jpg'}
            width={200}
            height={200}
            alt=''
          />
          <Image
            className='w-[350px] h-[350px] object-cover shadow-2xl'
            src={'/img/photo2.jpg'}
            width={200}
            height={200}
            alt=''
          />
          <Image
            className='w-[350px] h-[350px] object-cover shadow-2xl'
            src={'/img/photo3.jpg'}
            width={200}
            height={200}
            alt=''
          />
          <Image
            className='w-[350px] h-[350px] object-cover shadow-2xl'
            src={'/img/photo5.jpg'}
            width={200}
            height={200}
            alt=''
          />
          <Image
            className='w-[350px] h-[350px] object-cover shadow-2xl'
            src={'/img/photo6.jpg'}
            width={200}
            height={200}
            alt=''
          />
        </div>
      </div>

      <div className='flex gap-2 mt-6'>
        <h2 className='text-2xl text-slate-400'>Информация о квестах -</h2>
        <Link
          href={'https://vk.com/alliancequestomsk'}
          className='text-xl cursor-pointer'
          target='_blank'
        >
          https://vk.com/alliancequestomsk
        </Link>
      </div>

      <div className='flex flex-col gap-2 mt-6'>
        <h2 className='text-2xl text-slate-400'>Ссылки:</h2>
        <ul className='flex flex-col gap-3'>
          <li>
            <a
              href='https://omsk.mir-kvestov.ru/quests/alliance-quest-nevidimka'
              target='_blank'
            >
              <img
                src='https://omsk.mir-kvestov.ru/widgets/7928/img'
                width='210'
                alt='Отзывы на Квест в реальности Невидимка (Alliance Quest)'
                title='Отзывы на Квест в реальности Невидимка (Alliance Quest)'
              />
            </a>
          </li>
          <li>
            <Link
              href='https://vk.com/alliancequestomsk'
              className='text-xl cursor-pointer'
              target='_blank'
            >
              Хоррор квесты Омск
            </Link>
          </li>
        </ul>
      </div>

      <footer className='flex flex-col gap-2 mt-9'>
        <h2 className='text-2xl text-slate-400'>Контакты:</h2>
        <p className='text-xl'>Телефон: +7 (904) 832-43-62</p>
      </footer>
    </main>
  )
}
