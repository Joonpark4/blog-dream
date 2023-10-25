import { Gowun_Batang } from 'next/font/google';
import Link from 'next/link';

const GownBatang = Gowun_Batang({
  subsets: ['latin'],
  weight: '700',
});

export default function Header() {
  return (
    <header className='fixed top-0 w-screen flex justify-center'>
      <nav
        className={`z-nav w-full min-w-[805px] max-w-[1400px] flex flex-row items-center justify-between py-4 px-20 gap-[48px] text-left text-5xl ${'bg-white bg-opacity-30 text-black'}`}
      >
        <Link href="/">
          <div className="flex flex-row items-start justify-start gap-[4px]">
            <div className="flex flex-col items-end justify-center">
              <b className="relative leading-[110%] flex gap-[15px]">
                <span className={GownBatang.className}>온마루</span>
              </b>
              <div className="relative text-xs leading-[140%] mt-[1px]">
                Onmaru
              </div>
            </div>
          </div>
        </Link>
        <nav>
          <div className="flex-1 flex flex-row items-center justify-end gap-[16px] text-2xl text-coolgray-90">
            <div className="flex flex-row items-center justify-start py-3 px-2 gap-[8px]">
              <div className="relative leading-[100%] font-medium">
                <Link href="/about">About</Link>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start py-3 px-2 gap-[8px]">
              <div className="relative leading-[100%] font-medium">
                <Link href="/service">Service</Link>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start py-3 px-2 gap-[8px]">
              <div className="relative leading-[100%] font-medium">
                <Link href="/partner">Partner</Link>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start py-3 px-2 gap-[8px]">
              <div className="relative leading-[100%] font-medium">
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
      </nav>
    </header>
  );
}
