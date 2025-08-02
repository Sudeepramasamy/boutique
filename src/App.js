import React from "react";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-pink-600">Boutique</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-pink-600 transition">Home</a>
            <a href="#collection" className="text-gray-700 hover:text-pink-600 transition">Collection</a>
            <a href="#about" className="text-gray-700 hover:text-pink-600 transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-pink-600 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-pink-100 to-purple-100 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">Elegant Fashion, Timeless Style</h2>
          <p className="mb-8 text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium fashion pieces that celebrate your unique style
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="bg-pink-600 text-white px-8 py-4 rounded-lg hover:bg-pink-700 transition transform hover:scale-105 shadow-lg"
            >
              Shop via WhatsApp
            </a>
            <a
              href="#collection"
              className="bg-white text-pink-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition border-2 border-pink-600"
            >
              Browse Collection
            </a>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Shop by Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-pink-100 rounded-xl p-8 text-center hover:bg-pink-200 transition transform group-hover:scale-105">
                <div className="text-4xl mb-4">👗</div>
                <h4 className="text-xl font-semibold mb-2">Party Wear</h4>
                <p className="text-gray-600">Stunning outfits for special occasions</p>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-purple-100 rounded-xl p-8 text-center hover:bg-purple-200 transition transform group-hover:scale-105">
                <div className="text-4xl mb-4">👚</div>
                <h4 className="text-xl font-semibold mb-2">Casual Wear</h4>
                <p className="text-gray-600">Comfortable everyday fashion</p>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-indigo-100 rounded-xl p-8 text-center hover:bg-indigo-200 transition transform group-hover:scale-105">
                <div className="text-4xl mb-4">💼</div>
                <h4 className="text-xl font-semibold mb-2">Formal Wear</h4>
                <p className="text-gray-600">Professional and elegant styles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Ecommerce Style */}
      <section id="collection" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Latest Collection</h3>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
                  <img src="dress 1.jpg"/>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">Elegant Evening Dress</h4>
                <p className="text-gray-600 text-sm mb-3">Perfect for special occasions</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-bold text-lg">₹2,999</span>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition text-sm">
                    Inquire
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                  <img src="dress 2.jpg"/>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">Casual Summer Top</h4>
                <p className="text-gray-600 text-sm mb-3">Comfortable and stylish</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-bold text-lg">₹1,499</span>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition text-sm">
                    Inquire
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-indigo-200 to-indigo-300 flex items-center justify-center">
                  <img src="dress 3.jpg"/>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">Designer Kurti</h4>
                <p className="text-gray-600 text-sm mb-3">Traditional with modern touch</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-bold text-lg">₹2,199</span>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition text-sm">
                    Inquire
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
                  <img src="dress 4.jpg"/>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">Formal Blazer</h4>
                <p className="text-gray-600 text-sm mb-3">Professional and chic</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-bold text-lg">₹3,499</span>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition text-sm">
                    Inquire
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center">
                  <img src="dress 5.jpg"/>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">Boho Maxi Dress</h4>
                <p className="text-gray-600 text-sm mb-3">Flowy and feminine</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-bold text-lg">₹2,799</span>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition text-sm">
                    Inquire
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center">
                  <img src="dress 6.jpg"/>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">Party Jumpsuit</h4>
                <p className="text-gray-600 text-sm mb-3">Trendy and comfortable</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-bold text-lg">₹2,299</span>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition text-sm">
                    Inquire
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 7 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-teal-200 to-teal-300 flex items-center justify-center">
                  <img src="dress 7.jpg"/>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">Ethnic Saree</h4>
                <p className="text-gray-600 text-sm mb-3">Traditional elegance</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-bold text-lg">₹4,999</span>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition text-sm">
                    Inquire
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 8 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                  <img src="dress 8.jpg"/>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">Denim Jacket</h4>
                <p className="text-gray-600 text-sm mb-3">Classic and versatile</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-bold text-lg">₹1,899</span>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition text-sm">
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-pink-700 hover:to-purple-700 transition transform hover:scale-105 shadow-lg">
              View More Collections
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold mb-8 text-gray-800">About Sparkle Boutique</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <p className="text-lg text-gray-600 mb-6">
                 Boutique brings you the finest in fashion, carefully curated and crafted for those who love elegance and grace. From casuals to party wear, we've got it all.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-600 rounded-full mr-3"></div>
                  <span>Premium Quality Materials</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-600 rounded-full mr-3"></div>
                  <span>Latest Fashion Trends</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-600 rounded-full mr-3"></div>
                  <span>Affordable Luxury</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-8">
              <div className="text-6xl mb-4">✨</div>
              <h4 className="text-2xl font-semibold mb-2">Our Mission</h4>
              <p className="text-gray-600">
                To make every woman feel confident and beautiful with our carefully selected fashion pieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Visit Our Store</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-2xl font-semibold mb-6">Store Information</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-pink-600 mr-3 mt-1">📍</div>
                  <div>
                    <h5 className="font-semibold">Address</h5>
                    <p className="text-gray-600">123 Fashion Street, Boutique Plaza, City 560001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-pink-600 mr-3 mt-1">🕒</div>
                  <div>
                    <h5 className="font-semibold">Opening Hours</h5>
                    <p className="text-gray-600">Mon-Sat: 10AM - 8PM<br />Sunday: 11AM - 6PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-pink-600 mr-3 mt-1">📞</div>
                  <div>
                    <h5 className="font-semibold">Contact</h5>
                    <p className="text-gray-600">+91 XXXXXXXXXX</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="https://wa.me/916380806315"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center"
                >
                  <span className="mr-2">💬</span>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full min-h-80"
                src="https://www.google.com/maps/embed?pb=!1m18..."
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-pink-400 mb-4">Boutique</h4>
              <p className="text-gray-300">Your destination for elegant and timeless fashion.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-pink-400 transition">Home</a></li>
                <li><a href="#collection" className="hover:text-pink-400 transition">Collection</a></li>
                <li><a href="#about" className="hover:text-pink-400 transition">About</a></li>
                <li><a href="#contact" className="hover:text-pink-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Categories</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-pink-400 transition">Party Wear</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Casual Wear</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Formal Wear</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Ethnic Wear</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition">
                  <span className="text-white">f</span>
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition">
                  <span className="text-white">📷</span>
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition">
                  <span className="text-white">💬</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Boutique. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}