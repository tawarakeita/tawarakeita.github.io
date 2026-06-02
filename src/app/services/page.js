import Link from 'next/link'
import Title from "../../components/Title";

export default function Page() {
  return (
      <main className='p-4'>
        <Title mainText = "Kei Apps" subText = "Kei Apps" />
          <div className='flex'>
            <Link href="/apps/shareyourlife" className='h-[220px] w-[220px] m-3 bg-[#CD853F] flex items-center justify-center rounded-lg'>
              <span className='text-3xl text-white'>shareYourLIFE</span>
            </Link>
            <Link href="/apps/mottainai" className='h-[220px] w-[220px] m-3 bg-[#485fc7] flex items-center justify-center rounded-lg'>
              <span className='text-3xl text-white'>もったいない！</span>
            </Link>
          </div>
      </main>
  );
}
