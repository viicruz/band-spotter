"use client"

import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from '@phosphor-icons/react';


import { Form } from '@/components/Form';



export default function ArtistDetail() {

  return (
    <div className="artist-detaw-full min-h-svh flex bg-white justify-center items-center">

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className=' p-2 bg-red-600 text-black'>Contratar</button>
        </Dialog.Trigger>

        <Dialog.Content className='flex justify-end '>
          <Form />
          <Dialog.Title />
          <Dialog.Close asChild  className='flex absolute flex-row p-2'>
            <button><X className='text-lg text-neutral-700'/></button>
          </Dialog.Close>
        </Dialog.Content>

      </Dialog.Root>



    </div>
  );
}
