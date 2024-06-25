import React from 'react'

const blogcontent = () => {
    // dynamic routes product which are based on Id 
    var name = "Garima";
  return (
    <div>
      
<body class="bg-gray-100">
    {/* <!-- Sidebar --> */}
    <div class="bg-gray-800 text-gray-100 h-screen w-64 fixed top-0 left-0">
        <div class="p-4">
            <h1 class="text-2xl font-bold">Blog Dashboard</h1>
            <p class="mt-2">Welcome, {name}</p>
        </div>
        <nav class="mt-8">
            <a href="#" class="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">Dashboard</a>
            <a href="#" class="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">Posts</a>
            <a href="#" class="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">Categories</a>
            <a href="#" class="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">Users</a>
        </nav>
    </div>

    {/* <!-- Main Content --> */}
    <div class="ml-64 p-4">
        {/* <!-- Header --> */}
        <header class="flex justify-between items-center mb-4">
            <h2 class="text-3xl font-semibold text-gray-800">Posts</h2>
            <button
                class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                New Post
            </button>
        </header>

        {/* <!-- Blog Posts --> */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* <!-- Dummy Blog Post Card --> */}
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/400x200" alt="Blog Post" class="w-full h-40 object-cover"/>
                <div class="p-4">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Blog Post Title</h3>
                    <p class="text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#"
                        class="block mt-2 text-blue-500 hover:text-blue-600 focus:text-blue-600 focus:outline-none">Read
                        more</a>
                </div>
            </div>

           
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/400x200" alt="Blog Post" class="w-full h-40 object-cover"/>
                <div class="p-4">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Another Blog Post</h3>
                    <p class="text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#"
                        class="block mt-2 text-blue-500 hover:text-blue-600 focus:text-blue-600 focus:outline-none">Read
                        more</a>
                </div>
            </div>

            <div class="p-4">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Blog Listing</h3>
                    <p class="text-pink-600 leading-relaxed">Blog 1.</p>
                    <p class="text-pink-600 leading-relaxed">Blog 2.</p>
                    <p class="text-pink-600 leading-relaxed">Blog 3.</p>

                    <a href="#"
                        class="block mt-2 text-blue-500 hover:text-blue-600 focus:text-blue-600 focus:outline-none">Read
                        more</a>
                </div>

        </div>
    </div>
</body>
    



    </div>
  )
}

export default blogcontent
