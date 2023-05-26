import Image from "next/image"
import mobileImg from '../../public/image-header-mobile.jpg'
import desktopImg from '../../public/image-header-desktop.jpg'

export default function Home() {
  return (
    <main 
      className={`min-w-[280px] max-w-[425px] bg-purple rounded-lg xl:flex xl:max-w-[1110px]`}
    >
      <section className="xl:order-2">
        <Image
          src={desktopImg}
          alt="people working in an office"
          className="hidden max-w-full rounded-t-lg mix-blend-multiply opacity-75 bg-purple
          xl:block xl:h-full"
        />
        <Image
          src={mobileImg}
          alt="people working in an office"
          className="block max-w-full rounded-t-lg mix-blend-multiply opacity-75 bg-purple
          xl:hidden"
        />
      </section>
      <section className=" bg-violet grid place-items-center xl:order-1 xl:text-left">
        <h1 className="text-white text-lg font-bold text-center mb-4 mt-8 w-4/6">
          Get <span className="text-purple">insights</span> that help your business grow.
        </h1>
        <p className="text-base text-gray text-center mb-8 w-4/6">
          Discover the benefits of data analytics and make better decisions regarding
          revenue, customer experience, and overall efficiency.
        </p>
        <div className="xl:flex xl:gap-8">
          <div>
            <h2 className="text-lg font-bold text-white text-center">10k+</h2>
            <p className="text-gray text-base mb-8 text-center">COMPANIES</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white text-center">314</h2>
            <p className="text-gray text-base mb-8 text-center">TEMPLATES</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white text-center">12M+</h2>
            <p className="text-gray text-base mb-8 text-center">QUERIES</p>
          </div>
        </div>
      </section>
    </main>
  )
}
