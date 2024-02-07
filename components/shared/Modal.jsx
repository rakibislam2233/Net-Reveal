import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaXmark } from "react-icons/fa6";
import ReactPlayer from "react-player";

const Modal = ({ isOpen, setIsOpen, title, video }) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md md:max-w-lg lg:max-w-2xl transform overflow-hidden  bg-[#111825] mt-10 px-4 py-6 text-left align-middle rounded shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex justify-between items-center mb-5">
                      <h1 className="text-xl font-semibold">{title}</h1>
                      <button
                        className="w-10 h-10 border rounded-full flex justify-center items-center text-white shadow-xl border-c[#0B212E] bg-[#0B212E]"
                        onClick={closeModal}
                      >
                        <FaXmark />
                      </button>
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                    <ReactPlayer
                      url={`https://www.youtube.com/watch?v=${video}`}
                      controls
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Modal;
