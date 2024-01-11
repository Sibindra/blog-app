const Footer = () => {
    return (
        <div className="p-6">

            <hr className="h-px bg-black dark:bg-white border-none mb-2" />

            <div className="flex flex-col items-center justify-between md:flex-row">
                2024 All Rights Reserved

                <div className=" mt-4 md:m-0 hidden sm:flex">
                    <div className="-mx-4">
                        <a
                            target="_blank"
                            href="https://github.com/Sibindra"
                            className="px-2 md:px-4 text-xs md:text-sm transition-colors duration-300 hover:text-blue-500 hover:underline"
                        >
                            GITHUB
                        </a>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer