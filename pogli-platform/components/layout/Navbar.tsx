"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const [aboutOpen, setAboutOpen] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);
	const [othersOpen, setOthersOpen] = useState(false);

	const aboutDropdownRef = useRef<HTMLDivElement>(null);
	const servicesDropdownRef = useRef<HTMLDivElement>(null);
	const othersDropdownRef = useRef<HTMLDivElement>(null);

	const navLinks = [
		{ name: "HOME", href: "/" },
		{ name: "ABOUT US", href: "/about" },
		{ name: "SERVICES", href: "/services" },
		{ name: "WHY INDIA?", href: "/why-india" },
		{ name: "OTHERS", href: "/others" },
	];
	

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				aboutDropdownRef.current &&
				event.target instanceof Node &&
				!aboutDropdownRef.current.contains(event.target)
			) {
				setAboutOpen(false);
			}

			if (
				servicesDropdownRef.current &&
				event.target instanceof Node &&
				!servicesDropdownRef.current.contains(event.target)
			) {
				setServicesOpen(false);
			}

			if (
				othersDropdownRef.current &&
				event.target instanceof Node &&
				!othersDropdownRef.current.contains(event.target)
			) {
				setOthersOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<header className="sticky top-0 z-50 bg-white border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-6 md:px-3 py-4 flex items-center justify-between">
				{/* Logo */}
				<img src="/nav-logo.png" alt="logo" className="h-13 w-auto" />

				<nav className="hidden md:flex items-center gap-8 relative">
					{navLinks.map((link) => {
						// ABOUT DROPDOWN
						if (link.name === "ABOUT US") {
							return (
								<div key={link.name} className="relative" ref={aboutDropdownRef}>
									<button
										onClick={() => setAboutOpen(!aboutOpen)}
										className={`text-sm font-medium tracking-wide ${
											pathname.startsWith("/about")
												? "text-blue-900"
												: "text-gray-700 hover:text-blue-900"
										}`}
									>
										{link.name}
									</button>

									{aboutOpen && (
										<div className="text-black absolute top-10 left-0 w-60 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
											{[
												{ name: "WHAT WE DO", href: "/about/what-we-do" },
												{
													name: "MISSION / VISION",
													href: "/about/mission-vision",
												},
												{ name: "OUR VALUES", href: "/about/values" },
												{ name: "POGLI MEMBERS", href: "/about/members" },
												{
													name: "COMPANY PROFILE",
													href: "/about/company-profile",
												},
											].map((item) => {
												const isActive = pathname.startsWith(item.href);

												return (
													<Link
														key={item.name}
														href={item.href}
														onClick={() => setAboutOpen(false)}
														className={`block px-5 py-3 text-sm transition ${
															isActive
																? "bg-blue-100 text-blue-900 font-medium"
																: "text-gray-700 hover:bg-gray-100"
														}`}
													>
														{item.name}
													</Link>
												);
											})}
										</div>
									)}
								</div>
							);
						}

						if (link.name === "SERVICES") {
							return (
								<div
									key={link.name}
									className="relative"
									ref={servicesDropdownRef}
								>
									<button
										onClick={() => setServicesOpen(!servicesOpen)}
										className={`text-sm font-medium tracking-wide ${
											pathname.startsWith("/services")
												? "text-blue-900"
												: "text-gray-700 hover:text-blue-900"
										}`}
									>
										{link.name}
									</button>

									{servicesOpen && (
										<div className="absolute top-10 left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
											{[
												{
													name: "NEW BUSINESS CREATION",
													href: "/services/new-business",
												},
												{
													name: "P-I CUBE",
													href: "/services/picube",
												},
												{
													name: "DX SOLUTIONS",
													href: "/services/dx-solutions",
												},
												{
													name: "OTHER SERVICES",
													href: "/services/other-services",
												},
											].map((item) => {
												const isActive = pathname.startsWith(item.href);

												return (
													<Link
														key={item.name}
														href={item.href}
														onClick={() => setServicesOpen(false)}
														className={`block px-6 py-4 text-sm tracking-wide transition ${
															isActive
																? "bg-blue-100 text-blue-900 font-medium"
																: "text-[#2f43a0] hover:bg-gray-100"
														}`}
													>
														{item.name}
													</Link>
												);
											})}
										</div>
									)}
								</div>
							);
						}

						if (link.name === "OTHERS") {
							return (
								<div
									key={link.name}
									className="relative"
									ref={othersDropdownRef}
								>
									<button
										onClick={() => setOthersOpen(!othersOpen)}
										className={`text-sm font-medium tracking-wide ${
											pathname.startsWith("/others")
												? "text-blue-900"
												: "text-gray-700 hover:text-blue-900"
										}`}
									>
										{link.name}
									</button>

									{othersOpen && (
										<div className="absolute top-10 left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
											{[
												{
													name: "BLOGS/NEWS",
													href: "/others/blogs",
												},
												{
													name: "MATERIAL REQUEST",
													href: "/others/material-request",
												},
												{
													name: "CONTACT US",
													href: "/others/contact",
												},
											].map((item) => {
												const isActive = pathname.startsWith(item.href);

												return (
													<Link
														key={item.name}
														href={item.href}
														onClick={() => setOthersOpen(false)}
														className={`block px-6 py-4 text-sm tracking-wide transition ${
															isActive
																? "bg-blue-100 text-blue-900 font-medium"
																: "text-[#2f43a0] hover:bg-gray-100"
														}`}
													>
														{item.name}
													</Link>
												);
											})}
										</div>
									)}
								</div>
							);
						}
									

						// NORMAL LINKS
						return (
							<Link
								key={link.name}
								href={link.href}
								className={`text-sm font-medium tracking-wide relative ${
									pathname === link.href
										? "text-blue-900"
										: "text-gray-700 hover:text-blue-900"
								}`}
							>
								{link.name}

								{pathname === link.href && (
									<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-900"></span>
								)}
							</Link>
						);
					})}
				</nav>

				{/* Desktop Button */}
				<div className="hidden md:block">
					<button className="bg-[#3b4ba3] hover:bg-[#2f3d85] text-white h-12 px-5 py-3 mx-5 rounded-md text-3sm font-medium transition">
						Get Started
					</button>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-blue-900"
					onClick={() => setOpen(!open)}
				>
					{open ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{open && (
				<div className="md:hidden bg-white px-6 py-6 space-y-4 shadow-md">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							onClick={() => setOpen(false)}
							className={`block text-base font-medium ${
								pathname === link.href ? "text-blue-900" : "text-gray-700"
							}`}
						>
							{link.name}
						</Link>
					))}

					{/* Mobile CTA */}
					<button className="w-full mt-4 bg-[#3b4ba3] text-white py-3 rounded-md font-medium">
						Get Started
					</button>
				</div>
			)}
		</header>
	);
};

export default Navbar;
