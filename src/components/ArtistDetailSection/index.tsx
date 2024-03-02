//Libraries imports
import * as Dialog from '@radix-ui/react-dialog';
import { X } from '@phosphor-icons/react';
import { Form } from '@/components/Form';

//Components imports
import { Avatar } from '../Avatar';



export function ArtistDetailSection() {
  return (
    <section className="flex flex-row gap-x-8 px-4 py-4 bg-white shadow-lg border-2 border-black rounded-lg">
      <div className="flex flex-col gap-x-3 ">
        <div className='gap-y-2'>
          <Avatar image='' height={256} width={256} />
        </div>
        <h1 className='text-center capitalize font-bold text-3xl text-black'>
            Bambi Baker
          </h1>
        <div className='flex flex-wrap gap-1'>

        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className=' p-2 bg-red-600 text-black'>Contratar</button>
          </Dialog.Trigger>

          <Dialog.Content className='flex justify-end '>
            <Form />
            <Dialog.Title />
            <Dialog.Close asChild className='flex absolute flex-row p-2'>
              <button><X className='text-lg text-neutral-700' /></button>
            </Dialog.Close>
          </Dialog.Content>

        </Dialog.Root>
      </div>
      <div className='flex flex-col'>
        <h2 className='font-bold text-black text-2xl'>
          Discografia
        </h2>
        <div className='flex flex-wrap gap-2 border-2 border-black'>
          <p>aiugaugabgbuwa</p>
          <p>aiugaugabgbuwa</p>
          <p>aiugaugabgbuwa</p>
          <p>aiugaugabgbuwa</p>
          <p>aiugaugabgbuwa</p>

          <p>aiugaugabgbuwa</p>
          <p>aiugaugabgbuwa</p>
          <p>aiugaugabgbuwa</p>

        </div>

      </div>
    </section>
  );
}

{/* <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className=' p-2 bg-red-600 text-black'>Contratar</button>
          </Dialog.Trigger>

          <Dialog.Content className='flex justify-end '>
            <Form />
            <Dialog.Title />
            <Dialog.Close asChild className='flex absolute flex-row p-2'>
              <button><X className='text-lg text-neutral-700' /></button>
            </Dialog.Close>
          </Dialog.Content>

        </Dialog.Root> */}