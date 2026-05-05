// "use client";

// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navLinks = [
//     { label: 'Why India?', href: '#why-india' },
//     { label: 'Service', href: '#service' },
//     { label: 'News', href: '#news' },
//     { label: 'Company', href: '#company' },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <span className="text-2xl font-bold text-indigo-900">POGLI</span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="text-gray-700 hover:text-cyan-500 font-medium transition-colors duration-300"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* Desktop Buttons */}
//           <div className="hidden md:flex items-center space-x-3">
//             <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded transition-colors duration-300">
//               Materials
//             </button>
//             <button className="px-6 py-2 bg-indigo-900 hover:bg-indigo-800 text-white font-semibold rounded transition-colors duration-300">
//               Contact Us
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-cyan-500 focus:outline-none"
//             >
//               {isOpen ? (
//                 <X size={24} />
//               ) : (
//                 <Menu size={24} />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navLinks.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-cyan-500 font-medium transition-colors duration-300"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.label}
//               </a>
//             ))}
//             <div className="flex flex-col space-y-2 mt-4 px-3">
//               <button className="w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded transition-colors duration-300">
//                 Materials
//               </button>
//               <button className="w-full px-4 py-2 bg-indigo-900 hover:bg-indigo-800 text-white font-semibold rounded transition-colors duration-300">
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="w-full bg-white px-8 md:px-20 py-6 shadow-sm">
			<div className="max-w-[1600px] mx-auto flex items-center justify-start gap-20">
				{/* Logo */}
				<div>
					<Link href="/">
						<img
						src="/nav-logo.png"
						alt="Pogli Logo"
						className="w-[230px] h-auto"
					/>
					</Link>
				</div>

				{/* Nav Links */}
				<div className="hidden md:flex items-center gap-14 text-[#2E3E9E] text-xl font-medium ml-65">
					<a href="#">Why India?</a>
					<a href="#">Service</a>
					<a href="#">News</a>
					<a href="#">Company</a>
				</div>

				{/* Buttons */}
				<div className="hidden md:flex items-center gap-6">
					<button className="bg-[#18A8F2] hover:bg-[#1095d9] text-white px-12 py-4 text-xl font-semibold rounded-sm">
						Materials
					</button>

					<Link href="/contact">
						<button className="bg-[#2E3E9E] hover:bg-[#25338a] text-white px-12 py-4 text-xl font-semibold rounded-sm">
							Contact Us
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
