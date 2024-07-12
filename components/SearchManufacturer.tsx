'use client';
import {
    Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition
} from "@headlessui/react";
import {SearchManufacturerProps} from "@/types";
import Image from "next/image";
import {Fragment, useState} from "react";

import {manufacturers} from "@/constants";

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
    const [query, setQuery] = useState("");

    const filteredManufacturers =
        query === "" ? manufacturers : manufacturers.filter((item) => (
            item.toLowerCase()
                .replace(/\s/g, "")
                .includes(query.toLowerCase()
                    .replace(/\s/g, "",),)
        ),);

    return (
        <div className={'search-manufacturer'}>
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">

                    <ComboboxButton className={'absolute top-[14px]'}>
                        <Image
                            src={'/car-logo.svg'}
                            alt={'Car Logo'}
                            width={20}
                            height={20}
                        />
                    </ComboboxButton>

                    <ComboboxInput
                        className={'search-manufacturer__input'}
                        placeholder={'Volkswagen'}
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    >
                    </ComboboxInput>

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <ComboboxOptions>
                            {
                                filteredManufacturers.map((item) => (
                                    <ComboboxOption
                                        value={item}
                                        key={item}
                                        className='
                                            relative search-manufacturer__option 
                                            text-gray-900 data-[focus]:bg-primary-blue data-[focus]:text-white'
                                    >
                                        {(selected) => (
                                            <>
                                                <span
                                                    className={`block truncate font-normal data-[selected]:font-medium`}>
                                                    {item}
                                                </span>

                                                {/* Show an active blue background color if the option is selected */}
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 text-teal-500 data-[focus]:text-white`}
                                                    ></span>
                                                ) : null}
                                            </>
                                        )}
                                    </ComboboxOption>
                                ))

                            }
                        </ComboboxOptions>
                    </Transition>

                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer;