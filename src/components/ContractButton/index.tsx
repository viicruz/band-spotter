import * as Dialog from '@radix-ui/react-dialog';
import { X } from '@phosphor-icons/react';
import { Form } from '@/components/Form';

export function ContractButton() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="w-full px-5 py-2 rounded-lg bg-gradient-to-br from-yellow-200 via-emerald-500 to-violet-500">
                    <p className="text-xl font-bold text-neutral-50">
                        Contratar
                    </p>
                </button>
            </Dialog.Trigger>

            <Dialog.Portal >
                <Dialog.Overlay className='absolute top-0 left-0 w-full h-full bg-neutral-100/50 z-10 backdrop-blur-lg' />
                <Dialog.Content className='fixed z-10 flex justify-end max-h-[90%] p-4 overflow-y-scroll -translate-x-1/2 -translate-y-1/2 bg-white border-2 rounded-lg top-1/2 left-1/2 border-neutral-300'>
                    <Form />
                    <Dialog.Title />
                    <Dialog.Close asChild className='absolute flex flex-row p-2'>
                        <button><X className='text-lg text-neutral-700 pb-2' /></button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>

        </Dialog.Root>
    )
}