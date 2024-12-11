/** @format */
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

//https://api.openweathermap.org/data/2.5/forecast?q=montreal&appid=f8308b9212f84de2c4c2f1b35117be2b&cnt=1


export default function Home() {
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen ">
      <Navbar />
    </div>
  );
}
