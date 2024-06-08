import AddFavorite from "./(components)/addFavorite";
import List from "./(components)/list";
import ProductCard from "./(components)/productCard";
import ProductCard2 from "./(components)/productCard2";
import Search from "./(components)/search";
import "./page.css";
export default function Home() {
  return (
    <body>
      <section
        className="w-full px-5"
        style={{
          backgroundImage: "url(/herobg.png)",
          backgroundSize: "cover",
        }}
      >
        <header className="w-full px-5 flex justify-between py-5">
          <h1 className="text-2xl text-white font-bold mx-auto sm:mx-0">BOXCARS</h1>
          <div className="flex gap-x-10 text-white">
            <ul className="list-none items-center gap-x-4 text-sm text-white opacity-90 cursor-pointer hidden md:flex">
              <li className="hover:opacity-100">Home</li>
              <li className="hover:opacity-100">Listing</li>
              <li className="hover:opacity-100">Blog</li>
              <li className="hover:opacity-100">Pages</li>
              <li className="hover:opacity-100">About</li>
              <li className="hover:opacity-100">Contact</li>
              <li className="hover:opacity-100">
                <i className="bi-person"></i>Sign in
              </li>
            </ul>
            <button className="px-5 py-2 place-items-center rounded-2xl text-black bg-white text-sm hidden sm:grid">
              Submit Listing
            </button>
          </div>
        </header>
        <div className="w-full grid place-items-center my-20">
          <div className="grid gap-y-6 text-center">
            <p className="text-xs text-white opacity-90">
              find cars for sale and for rent near you
            </p>
            <h1 className="text-4xl text-white font-bold">
              Find Your Perfect Car
            </h1>
            <Search></Search>
            <p className="text-xs text-white opacity-90">
              for Browse Featured Model
            </p>
            <div className="flex flex-wrap justify-around gap-3 cursor-pointer">
              <div className="flex gap-x-2 items-center px-5 py-2 text-xs text-white bg-[#ffffff18] rounded-2xl">
                <img src="SVG.png" alt="" className="w-6 h-9" />
                <p>Suv</p>
              </div>
              <div className="flex gap-x-2 items-center px-5 py-2 text-xs text-white bg-[#ffffff18] rounded-2xl">
                <img src="SVG (1).png" alt="" className="w-6 h-9" />
                <p>Sedan</p>
              </div>
              <div className="flex gap-x-2 items-center px-5 py-2 text-xs text-white bg-[#ffffff18] rounded-2xl">
                <img src="SVG (2).png" alt="" className="w-6 h-9" />
                <p>Hatchback</p>
              </div>
              <div className="flex gap-x-2 items-center px-5 py-2 text-xs text-white bg-[#ffffff18] rounded-2xl">
                <img src="SVG (3).png" alt="" className="w-6 h-9" />
                <p>Coupe</p>
              </div>
              <div className="flex gap-x-2 items-center px-5 py-2 text-xs text-white bg-[#ffffff18] rounded-2xl">
                <img src="SVG (4).png" alt="" className="w-6 h-9" />
                <p>Hybrid</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20"></div>
      </section>
      <main className="w-full px-5 sm:px-10 md:px-20 bg-white relative bottom-10 rounded-3xl grid gap-y-20">
        <div className="grid gap-y-5 mt-20">
          <div className="flex flex-wrap gap-5 items-center justify-between">
            <p className="text-2xl text-black">Explore Our Premium Brands</p>
            <p className="text-sm text-black flex gap-x-2">
              Show All Brands <i className="bi-arrow-up-right"></i>
            </p>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-x-5">
            <img src="/Background+Border.png" alt="" className="w-32 sm:w-40" />
            <img src="/Background+Border (1).png" alt="" className="w-32 sm:w-40" />
            <img src="/Background+Border (2).png" alt="" className="w-32 sm:w-40" />
            <img src="/Background+Border (3).png" alt="" className="w-32 sm:w-40" />
            <img src="/Background+Border (4).png" alt="" className="w-32 sm:w-40" />
            <img src="/Background+Border (5).png" alt="" className="w-32 sm:w-40" />
          </div>
        </div>
        <div className="grid gap-y-5">
          <div className="flex flex-wrap gap-5 items-center justify-between">
            <p className="text-2xl text-black">Explore all vehicles</p>
            <p className="text-sm text-black flex gap-x-2">
              Show All Brands <i className="bi-arrow-up-right"></i>
            </p>
          </div>
          <List items={["In Stock" , "New Cars" , "Used Cars"]} color={"black"}></List>
          <ProductCard></ProductCard>
        </div>
        <div className="w-full pb-10 grid gap-y-10 border-b-2 border-borderC">
          <div className="w-full flex flex-col md:flex-row items-center rounded-xl bg-[#EEF1FB]">
            <img
              src="/Background.png"
              alt=""
              className="w-full md:w-1/2 h-full rounded-l-xl"
            />
            <div className="w-full md:w-1/2 h-full grid place-items-center p-5">
              <div className="w-3/4 flex flex-col gap-y-4">
                <h1 className="text-black text-2xl">
                  Get A Fair Price For Your Car Sell To Us Today
                </h1>
                <p className="text-black text-sm">
                  We are committed to providing our customers with exceptional
                  service, competitive pricing, and a wide range of.
                </p>
                <ul className="list-none grid gap-y-2">
                  <li className="flex items-center gap-x-2">
                    <i className="bi-check-lg w-5 h-5 rounded-full bg-white grid place-items-center textblack"></i>
                    <p className="text-sm text-black">
                      We are the UK’s largest provider, with more patrols in
                      more places
                    </p>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <i className="bi-check-lg w-5 h-5 rounded-full bg-white grid place-items-center textblack"></i>
                    <p className="text-sm text-black">
                      You get 24/7 roadside assistance
                    </p>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <i className="bi-check-lg w-5 h-5 rounded-full bg-white grid place-items-center textblack"></i>
                    <p className="text-sm text-black">
                      We fix 4 out of 5 cars at the roadside
                    </p>
                  </li>
                </ul>
                <button className="w-36 px-5 py-2 bg-purple text-white flex items-center rounded-xl text-sm ">
                  Get started <i className="bi-arrow-up-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 items-center justify-between px-20">
            <div className="flex flex-col gap-y-4 text-center">
              <p className="text-black text-2xl font-semibold">836M</p>
              <p className="text-xs text-black">CARS FOR SALE</p>
            </div>
            <div className="flex flex-col gap-y-4 text-center">
              <p className="text-black text-2xl font-semibold">738M</p>
              <p className="text-xs text-black">DEALER REVIEWS</p>
            </div>
            <div className="flex flex-col gap-y-4 text-center">
              <p className="text-black text-2xl font-semibold">100M</p>
              <p className="text-xs text-black">VISITORS PER DAY</p>
            </div>
            <div className="flex flex-col gap-y-4 text-center">
              <p className="text-black text-2xl font-semibold">238M</p>
              <p className="text-xs text-black">VERIFIED DEALERS</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-black font-semibold mb-10">
            Why choose us?
          </h1>
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="w-60 grid gap-y-2">
              <img src="/f1.svg.png" alt="" className="w-16" />
              <p className="text-black font-semibold">
                Special Financing Offers
              </p>
              <p className="text-black text-sm">
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>
            <div className="w-60 grid gap-y-2">
              <img src="/f2.svg.png" alt="" className="w-16" />
              <p className="text-black font-semibold">Trusted Car Dealership</p>
              <p className="text-black text-sm">
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>
            <div className="w-60 grid gap-y-2">
              <img src="/f3.svg.png" alt="" className="w-16" />
              <p className="text-black font-semibold">Transparent Pricing</p>
              <p className="text-black text-sm">
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>
            <div className="w-60 grid gap-y-2">
              <img src="/f4.svg.png" alt="" className="w-16" />
              <p className="text-black font-semibold">Expert Car Service</p>
              <p className="text-black text-sm">
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>
          </div>
        </div>
      </main>
      <section className="w-full px-5 sm:px-10 md:px-20 p-20 bg-black grid place-items-center my-20 mb-40">
        <div className="grid gap-y-10">
          <div className="flex flex-wrap items-center justify-between">
            <p className="text-2xl text-white">Popular Makes</p>
            <p className="text-sm text-white flex gap-x-2">
              View all <i className="bi-arrow-up-right"></i>
            </p>
          </div>
          <List items={["Audi" , "Ford","Mercedes Benz"]} color="white"></List>
          <ProductCard2></ProductCard2>
        </div>
      </section>
      <main className="px-5 sm:px-10 md:px-20 bg-white relative bottom-10 rounded-3xl grid gap-y-20 rounded-b-3xl pb-20">
        <div className="gap-y-5 grid">
          <div className="flex flex-wrap gap-5 items-center justify-between">
            <p className="text-2xl text-black">Shop BoxCar Your Way</p>
            <p className="text-sm text-black flex gap-x-2">
              Show All Brands <i className="bi-arrow-up-right"></i>
            </p>
          </div>
          <List items={["New Cars For Sale","Used Cars For Sale","Browse By Type","Browse By Brand"]} color="black"></List>
          <div className="flex gap-5 flex-wrap items-center justify-between">
            <div className="grid gap-y-2 text-sm text-black">
              <p className="hover:border-b-2 border-purple cursor-pointer">Ford Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Honda Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Hyundai Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Infiniti Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Jaguar Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Jeep Cars</p>
            </div>
            <div className="grid gap-y-2 text-sm text-black">
              <p className="hover:border-b-2 border-purple cursor-pointer">Chrysler Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Citroen Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Cupra Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Dacia Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">DS Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Fiat Cars</p>
            </div>
            <div className="grid gap-y-2 text-sm text-black">
              <p className="hover:border-b-2 border-purple cursor-pointer">Land Rover Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Lexus Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Mercedes-Benz Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Mazda Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">MG Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Kia Cars</p>
            </div>
            <div className="grid gap-y-2 text-sm text-black">
              <p className="hover:border-b-2 border-purple cursor-pointer">Abarth Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Romeo Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Audi Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Bentley Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">BMW Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Chevrolet Cars</p>
            </div>
            <div className="grid gap-y-2 text-sm text-black">
              <p className="hover:border-b-2 border-purple cursor-pointer">Mini Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Mitsubishi Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Nissan Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Peugeot Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Porsche Cars</p>
              <p className="hover:border-b-2 border-purple cursor-pointer">Renault Cars</p>
            </div>
          </div>
        </div>
        <div className="grid gap-y-10">
          <div className="flex flex-wrap items-center justify-between">
            <p className="text-2xl text-black">What our customers say</p>
            <p className="text-xs text-black flex gap-x-2">
              Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star
              reviews
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-x-10">
            <img src="/Container.png" alt="" className="w-full md:w-[400px] mb-10" />
            <div className="w-full md:w-auto grid place-items-center">
              <div className="w-3/4 grid gap-y-4">
                <div className="grid gap-y-2">
                  <div className="flex items-center gap-x-2 text-xs">
                    <img src="/stars.png" alt="" className="w-20" />
                    <div className="p-2 text-white bg-[#E1C03F] grid place-items-center rounded-2xl px-3">
                      5.2
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-2 mb-5">
                  <p className="text-black font-semibold">Ali Tufan</p>
                  <p className="text-sm">Designer</p>
                </div>
                <p className="text-black text-xl font-semibold">
                  Id suggest Macklin Motors Nissan Glasgow South to a friend
                  because I had great service from my salesman Patrick and all
                  of the team.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-y-5">
          <div className="flex flex-wrap gap-5 items-center justify-between">
            <p className="text-2xl text-black">Latest Blog Posts</p>
            <p className="text-sm text-black flex gap-x-2">
              View All <i className="bi-arrow-up-right"></i>
            </p>
          </div>
          <div className="flex items-center justify-around gap-x-5 overflow-scroll disableScroll">
            <div className="min-w-[350px] flex flex-col gap-y-4">
              <div className="w-full relative">
                <img
                  src="/detail-post-qgcqjbpfnsa2eljzsmpa5fzwhwfyhukx3izjwiox88.jpg.png"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="bg-white text-black text-xs grid place-items-center px-5 py-2 rounded-full absolute top-3 left-3">
                  Sound
                </div>
              </div>
              <div className="flex items-center gap-x-2 text-xs text-black">
                <p className="">Admin</p>
                <div className="w-2 h-2 bg-borderC rounded-full"></div>
                <p>November 22, 2023</p>
              </div>
              <p className="text-black text-sm font-semibold">
                2024 BMW ALPINA XB7 with exclusive details, extraordinary
              </p>
            </div>
            <div className="min-w-[350px] flex flex-col gap-y-4">
              <div className="w-full relative">
                <img
                  src="/blog7-qgcqjcn9umbcq7imn53wpxrd3abbpjonfnn1dsnj20.jpg.png"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="bg-white text-black text-xs grid place-items-center px-5 py-2 rounded-full absolute top-3 left-3">
                  Accessories{" "}
                </div>
              </div>
              <div className="flex items-center gap-x-2 text-xs text-black">
                <p className="">Admin</p>
                <div className="w-2 h-2 bg-borderC rounded-full"></div>
                <p>November 22, 2023</p>
              </div>
              <p className="text-black text-sm font-semibold">
                2024 BMW ALPINA XB7 with exclusive details, extraordinary
              </p>
            </div>
            <div className="min-w-[350px] flex flex-col gap-y-4">
              <div className="w-full relative">
                <img
                  src="/blog9-qgcqjcn9umbcq7imn53wpxrd3abbpjonfnn1dsnj20.jpg.png"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="bg-white text-black text-xs grid place-items-center px-5 py-2 rounded-full absolute top-3 left-3">
                  Exterior
                </div>
              </div>
              <div className="flex items-center gap-x-2 text-xs text-black">
                <p className="">Admin</p>
                <div className="w-2 h-2 bg-borderC rounded-full"></div>
                <p>November 22, 2023</p>
              </div>
              <p className="text-black text-sm font-semibold">
                2024 BMW ALPINA XB7 with exclusive details, extraordinary
              </p>
            </div>
          </div>
        </div>
        <div className="flex-wrap justify-around items-center gap-5 hidden sm:flex">
          <div className="w-full lg:w-2/5 p-20 flex flex-col gap-y-3 rounded-2xl bg-[#f3f5f7]">
            <p className="text-black font-semibold text-lg w-1/2">
              Are You Looking For a Car ?
            </p>
            <p className="text-sm text-black">
              We are committed to providing our customers with exceptional
              service.
            </p>
            <div className="flex items-center justify-between">
              <button className="px-5 py-3 text-white rounded-2xl bg-purple text-sm flex items-center gap-x-2">
                <p>Get started</p>
                <i className="bi-arrow-up-right"></i>
              </button>
              <img src="/f4.svg.png" alt="" className="w-20" />
            </div>
          </div>
          <div className="w-full lg:w-2/5 p-20 flex flex-col gap-y-3 rounded-2xl bg-[#FFE9F3]">
            <p className="text-black font-semibold text-lg w-1/2">
              Do You Want to Sell a Car ?
            </p>
            <p className="text-sm text-black">
              We are committed to providing our customers with exceptional
              service.
            </p>
            <div className="flex items-center justify-between">
              <button className="px-5 py-3 text-white rounded-2xl bg-black text-sm flex items-center gap-x-2">
                <p>Get started</p>
                <i className="bi-arrow-up-right"></i>
              </button>
              <img src="/f3.svg.png" alt="" className="w-20" />
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col bg-black gap-y-5 px-5 sm:px-10 md:px-20 py-10 relative z-[-1] bottom-14">
        <div className="flex flex-wrap items-center justify-between pb-10 border-b-2 border-[#ffffff20] gap-5">
          <div className="grid gap-y-2 text-white">
            <p className="text-2xl ">Join BoxCar</p>
            <p className="text-xs opacity-90">
              Receive pricing updates, shopping tips & more!
            </p>
          </div>
          <div className="w-80 flex items-center px-5 py-2 text-xs bg-[#ffffff20] text-white rounded-full">
            <input
              type="email"
              name=""
              id=""
              placeholder="Your email address"
              className="w-full h-full bg-[#ffffff00] border-none outline-none rounded-full"
            />
            <button className="w-28 py-2 bg-purple grid place-items-center rounded-full">
              Sign up
            </button>
          </div>
        </div>
        <div className="flex justify-between flex-wrap gap-10 pb-10 border-b-2 border-[#ffffff20]">
          <div>
            <p className="text-white mb-4">Company</p>
            <ul className="list-none text-xs text-white opacity-90 grid gap-y-2">
              <li>About us</li>
              <li>Blogs</li>
              <li>Services</li>
              <li>FAQs</li>
              <li>Terms</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <p className="text-white mb-4">Quick links</p>
            <ul className="list-none text-xs text-white opacity-90 grid gap-y-2">
              <li>Get in touch</li>
              <li>Help center</li>
              <li>Live chat</li>
              <li>How it works</li>
            </ul>
          </div>
          <div>
            <p className="text-white mb-4">Out brands</p>
            <ul className="list-none text-xs text-white opacity-90 grid gap-y-2">
              <li>Toyota</li>
              <li>Porsche</li>
              <li>Aaudi</li>
              <li>BMW</li>
              <li>Ford</li>
              <li>Nissan</li>
              <li>Peugeot</li>
              <li>Volkswagen</li>
            </ul>
          </div>
          <div>
            <p className="text-white mb-4">Vehicles Type</p>
            <ul className="list-none text-xs text-white opacity-90 grid gap-y-2">
              <li>Sedan</li>
              <li>Hatchback</li>
              <li>SUV</li>
              <li>hybrid</li>
              <li>Electric</li>
              <li>Coupe</li>
              <li>Truck</li>
              <li>Convertible</li>
            </ul>
          </div>
          <div className="grid gap-y-4">
            <p className="text-white mb-4">Our Mobile App</p>
            <div className="grid gap-y-2">
              <div className="px-4 py-2 flex items-center gap-x-4 rounded-2xl bg-[#ffffff20]">
                <img src="/Symbol.png" alt="" className="h-6" />
                <div className="text-white">
                  <p className="text-xs opacity-90 mb-1">Download on the app</p>
                  <p className="text-sm">Apple store</p>
                </div>
              </div>
              <div className="px-4 py-2 flex items-center gap-x-4 rounded-2xl bg-[#ffffff20]">
                <img src="/Symbol (1).png" alt="" className="h-6" />
                <div className="text-white">
                  <p className="text-xs opacity-90 mb-1">
                    Get in on google play
                  </p>
                  <p className="text-sm">Google play</p>
                </div>
              </div>
            </div>
            <div className="grid">
              <p className="text-white mb-4">Connect With Us</p>
              <img src="list.png" alt="" className="w-52" />
            </div>
          </div>
        </div>
        <div className="p-5 flex items-center justify-between gap-5 flex-wrap text-xs text-white opacity-90">
          <p>© 2024 exemple.com. All rights reserved.</p>
          <p>Terms & Conditions Privacy Notice</p>
        </div>
      </footer>
    </body>
  );
}
