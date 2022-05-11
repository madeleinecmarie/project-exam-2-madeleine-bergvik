import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Filter() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-10 py-2 bg-white text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Filter
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        // enter="transition ease-out duration-100"
        // enterFrom="transform opacity-0 scale-95"
        // enterTo="transform opacity-100 scale-100"
        // leave="transition ease-in duration-75"
        // leaveFrom="transform opacity-100 scale-100"
        // leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div className="filter__inner">
                  <input type="checkbox" className="filter__input" />
                  <label className="filter__label">Free cancellation</label>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block py-2 text-sm"
                  )}
                >
                  <h4 className="inputs__h4">Star Rating</h4>
                  <div className="inputs">
                    <div>
                      <input type="checkbox" className="" />
                      <label className="inputs__label">1 star</label>
                    </div>
                    <div>
                      <input type="checkbox" className="" />
                      <label className="inputs__label">2 star</label>
                    </div>
                    <div>
                      <input type="checkbox" className="" />
                      <label className="inputs__label">3 star</label>
                    </div>
                    <div>
                      <input type="checkbox" className="" />
                      <label className="inputs__label">4 star</label>
                    </div>
                    <div>
                      <input type="checkbox" className="" />
                      <label className="inputs__label">5 star</label>
                    </div>
                  </div>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
