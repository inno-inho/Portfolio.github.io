import React from "react";

export default function Footer(): JSX.Element {
    return (
        <React.Fragment>
            <footer className="text-gray-600 border-t body-font">
                <div className="container flex flex-col items-center px-5 py-8 md:px-10 mx-auto sm:flex-row">
                    <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start" href="#void">
                        <span className="footer_text font-semibold text-[#118eff]">Inno's portFolio</span>
                    </a>
                    <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">© 2025 李 仁浩 —
                        <a className="ml-1 text-gray-600" href="#void">＠inno-inho</a>
                    </p>
                    <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a className="text-gray-500" href="https://github.com/inno-inho">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd">
                                </path>
                            </svg>
                        </a>
                    </span>
                </div>
            </footer>
        </React.Fragment>
    )
}