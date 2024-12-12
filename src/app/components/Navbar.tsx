/** @format */
import React from "react";
import { MdWbSunny } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import SearchBox from "@/app/components/SearchBox";
import { useState } from "react";


type Props = {};

export default function Navbar({ }: Props) {
    const [city, srtCity] = useState("");
    const [error, setError] = useState("");

    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);



    async function handleInputChang(value: string) {
        setCity(value);
        if (value.length >= 3) {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${API_KEY}`
                );
                return (
                    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
                        <div className="h-[80px]   w-full   flex   justify-between items-center max-w-7xl px-3 mx-auto">
                            <p className="flex item-center justify-center gap-2  ">
                                <h2 className="text-gray-500 text-3xl">Weather</h2>
                                <MdWbSunny className="text-3xl mt-1 text-yellow-300" />
                            </p>
                            <section className="flex gap-2 items-center">
                                <MdMyLocation className="text-2x1 text-gray-400 hover:opacity-80 cursar-pointer" />
                                <MdOutlineLocationOn className="text-3x1" />
                                <p className="text-slate-900/80 text-sm"> Canada </p>
                                <div>{/* SearchBox */}
                                    <SearchBox
                                        value={city}
                                        onSubmit={handleSubmiSearch}
                                        onChange={(e) => handleInputChang(e.target.value)}
                                    />
                                </div>

                            </section>
                        </div>
                    </nav>
                )
            }