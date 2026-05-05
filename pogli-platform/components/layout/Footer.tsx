import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
	FaYoutube,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-[#cbebfd] px-8 md:px-20 py-5 text-black pt-10">
			<div className="max-w-7xl mx-auto">
				{/* Top Section */}
				<div className="grid md:grid-cols-4 gap-12 items-start">
					{/* Logo Box */}
					<div className="flex justify-center md:justify-start">
						<img
							src="/footer-logo.png"
							alt="Logo"
							className="w-[500px] h-[150px] rounded-md mt-20 ml-10"
						/>
					</div>

					{/* Column 1 */}
					<div className="ml-20">
						<h3 className="text-2xl font-bold mb-6 uppercase">Lorem Ipsum</h3>
						<ul className="text-lg leading-relaxed">
							<li>Many</li>
							<li>Ipsum Is</li>
							<li>Simply As</li>
							<li>Dummys</li>
							<li>Text Of The</li>
							<li>Print</li>
							<li>Typesetting</li>
							<li>Industry</li>
						</ul>
					</div>

					{/* Column 2 */}
					<div className="ml-5">
						<h3 className="text-2xl font-bold mb-6 uppercase">Readable</h3>
						<ul className="text-lg leading-relaxed">
							<li>Lorem Ipsum Is Simply</li>
							<li>Dummy Text Of</li>
							<li>The Printing And Type</li>
							<li>Setting Industry.</li>
							<li>Lorem Ipsum Has</li>
							<li>Been The Industry Standard</li>
							<li>Dummy Text Ever Since</li>
							<li>When An Unknown Printer</li>
							<li>Tooks A Galley</li>
						</ul>
					</div>

					{/* Contact Section */}
					<div>
						<h3 className="text-3xl font-bold mb-6">お問い合わせ</h3>

						<div className="space-y-5 text-lg">
							<div className="flex gap-4 items-start">
								<Phone className="text-blue-700 mt-1" />
								<div>
									<p>All: (123–465–7890</p>
									<p>All: (123–465–7890</p>
								</div>
							</div>

							<div className="flex gap-4 items-center">
								<Mail className="text-blue-700" />
								<p>info@loremipsum.com</p>
							</div>

							<div className="flex gap-4 items-start">
								<MapPin className="text-blue-700 mt-1" />
								<div>
									<p>京都府京都市下京区</p>
									<p>中堂寺南町１３４番地</p>
									<p>ASTEM棟１０F</p>
								</div>
							</div>
						</div>

						{/* Social Icons */}
						<div className="flex gap-4 mt-8">
							{[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map(
								(Icon, i) => (
									<div
										key={i}
										className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white"
									>
										<Icon size={20} />
									</div>
								),
							)}
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-black mt-14 pt-8">
					<p className="text-center text-xl font-medium">
						Managed By Pogli Co., Ltd.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
