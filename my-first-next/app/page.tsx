import Image from 'next/image'; // Import Next.js Image component

export default function Home() {
    return (
        <>
            <section className="bg-purple-600 text-white py-16">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Colorful Home</h1>
                    <p className="text-lg mb-8">Discover amazing colors and designs.</p>
                    <a href="#"
                        className="inline-block bg-white text-purple-600 hover:bg-purple-100 hover:text-purple-800 py-2 px-6 rounded-lg uppercase font-semibold shadow-md transition duration-300">Explore
                        Now</a>
                </div>
            </section>

            {/* Featured Section */}
            <section className="container mx-auto mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Featured Item 1 */}
                    <div className="bg-yellow-200 rounded-lg overflow-hidden shadow-md">
                        {/* Replace image with SVG using Next.js Image component */}
                        <div className="w-full h-64 flex items-center justify-center">
                            <Image src="/plant.svg" alt="Plant SVG" width={200} height={200} />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Featured Product</h2>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    {/* Featured Item 2 */}
                    <div className="bg-blue-200 rounded-lg overflow-hidden shadow-md">
                    <div className="w-full h-64 flex items-center justify-center">
                            <Image src="/plant.svg" alt="Plant SVG" width={200} height={200} />
                        </div>
                        {/* <img src="https://via.placeholder.com/400x300" alt="Featured Item"
                            className="w-full h-64 object-cover" /> */}
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Another Featured Product</h2>
                            <p className="text-gray-700">Sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Services Section */}
            <section className="container mx-auto mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Service Item 1 */}
                    <div className="bg-purple-200 rounded-lg overflow-hidden shadow-md">
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Service Title</h2>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    {/* Service Item 2 */}
                    <div className="bg-yellow-200 rounded-lg overflow-hidden shadow-md">
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Another Service Title</h2>
                            <p className="text-gray-700">Sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.</p>
                        </div>
                    </div>

                    {/* Service Item 3 */}
                    <div className="bg-green-200 rounded-lg overflow-hidden shadow-md">
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Third Service Title</h2>
                            <p className="text-gray-700">Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
