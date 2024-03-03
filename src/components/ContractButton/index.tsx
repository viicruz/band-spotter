import * as Dialog from '@radix-ui/react-dialog';
import { X } from '@phosphor-icons/react';
import { Form } from '@/components/Form';

export function ContractButton() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="px-5 py-2 bg-gradient-to-br from-yellow-200 via-emerald-500 to-violet-500 rounded-lg w-full">
                    <p className="text-neutral-50 font-bold text-xl">
                        Contratar
                    </p>
                </button>
            </Dialog.Trigger>

            <Dialog.Portal >
                <Dialog.Overlay className='w-full h-full bg-neutral-100/50 backdrop-blur-lg absolute left-0 top-0' />
                <Dialog.Content className='flex max-h-full justify-end absolute top-0 left-1/2 bg-white -translate-x-1/2  z-10 border-2 border-neutral-300 rounded-lg p-4 overflow-y-scroll'>
                    <Form />
                    <Dialog.Title />
                    <Dialog.Close asChild className='flex absolute flex-row p-2'>
                        <button><X className='text-lg text-neutral-700' /></button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>

        </Dialog.Root>
    )
}