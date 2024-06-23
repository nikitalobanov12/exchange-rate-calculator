import Image from "next/image";
import CurrencyConverter from "./components/CurrencyConverter";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <CurrencyConverter />
    <div className="text-center mx-12 my-12">
      <p>Up to date exchange rate data from <Link className=" whitespace-nowrap text-blue-500 hover:text-blue-400 transition-all hover:underline" href={"https://www.exchangerate-api.com"}>exchangerate-api.com/</Link></p>
    </div>
    </>
  )
}
