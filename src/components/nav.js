import { Disclosure} from '@headlessui/react';
import BrainIcon from '../images/brain_icon.png';

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto mr-3"
                    src={BrainIcon}
                    alt="Brain Icon"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto mr-3"
                    src={BrainIcon}
                    alt="Brain Icon"
                  />
                  <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-3xl lg:text-3xl text-white">
                     Burden of Crypto
                  </h1>
                </div>
              </div>
            </div>
          </div>

        </>
      )}
    </Disclosure>
  )
}