import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <div className="m-5">
    <nav className="rounded-md  bg-slate-900 shadow-md shadow-slate-700 text-white flexBetween max-container padding-container relative z-30 py-5">
     
      <Link href="/">
        <h2 className="text-xl font-extrabold">
        Siyah.com
        </h2>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16  flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_green"
        />
      </div>

<div className="bg-white rounded">
      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
      </div>
    </nav>
    </div>
  )
}

export default Navbar