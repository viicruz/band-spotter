'use client'
//Libraries Imports
import { useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';

export function SearchBar() {
    return (
        <div className='w-2/5 border-2 flex flex-row justify-center items-center gap-3 pl-3 pr-3 rounded-lg bg-white'>
            <button>
                <MagnifyingGlass size={24} color='black' />
            </button>
            <input className='w-full h-11 text-start text-black placeholder-black outline-none' type="text" placeholder='Digite o nome do artista' />
        </div>
    )
}