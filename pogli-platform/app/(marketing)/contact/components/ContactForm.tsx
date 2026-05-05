import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
	FaYoutube,
} from "react-icons/fa";

const ContactForm = () => {
	return (
		<section className="w-full bg-[#f5f5f5] px-10 md:px-20 py-20 text-black">
			<div className="grid md:grid-cols-[35%_65%] gap-16">
				{/* LEFT SIDE */}
				<div>
					{/* Access */}
					<div className="mb-130 mt-20">
						<MapPin className="text-[#2E3E9E] w-14 h-14 mb-4" />
						<h3 className="text-[#2E3E9E] text-4xl font-bold mb-4">Access</h3>
						<p className="text-xl leading-relaxed">
							ASTEM10F
							<br />
							134 Chudoji Minamimachi, Shimogyo-ku,<br /> Kyoto City, Kyoto, Japa
							600-8813
						</p>
					</div>

					<hr className="border-black mb-16" />

					{/* TEL */}
					<div className="mb-16">
						<Phone className="text-[#2E3E9E] w-14 h-14 mb-4" />
						<h3 className="text-[#2E3E9E] text-4xl font-bold mb-4">TEL</h3>
						<p className="text-xl mb-8">
							受付時間：平日午前9時００分〜午後5時００分
							<br />
							※土日祝及びお盆や年末年始の時期を除く
						</p>

						<p className="text-[#2E3E9E] text-2xl">Company : 080-1372-9288</p>
					</div>

					<hr className="border-black mb-10" />

					{/* Social */}
					<div className="flex gap-4">
						{[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map(
							(Icon, i) => (
								<div
									key={i}
									className="w-12 h-12 rounded-full bg-[#2E3E9E] flex items-center justify-center"
								>
									<Icon className="text-white w-6 h-6" />
								</div>
							),
						)}
					</div>
				</div>

				{/* RIGHT SIDE FORM */}
				<form className="space-y-8">
					{/* Name */}
					<div>
						<label className="block text-xl font-semibold mb-2">
							Name <span className="text-red-500">(Required)</span>
						</label>
						<input
							type="text"
							className="w-100 p-4 text-lg bg-white"
							placeholder="ここに名前"
						/>
					</div>

					{/* Company */}
					<div>
						<label className="block text-xl font-semibold mb-2">
							Company Name <span className="text-red-500">(Required)</span>
						</label>
						<input
							type="text"
							className="w-150 bg-white p-4 text-lg"
							placeholder="Lorem Ipsu"
						/>
					</div>

					{/* Email */}
					<div>
						<label className="block text-xl font-semibold mb-2">
							Email ID <span className="text-red-500">(Required)</span>
						</label>
						<input
							type="email"
							className="w-full bg-white p-4 text-lg"
							placeholder="Lorem Ipsu"
						/>
					</div>

					{/* TEL */}
					<div>
						<label className="block text-xl font-semibold mb-2">TEL</label>
						<input
							type="text"
							className="w-full bg-white p-4 text-lg"
							placeholder="+ country code      local number"
						/>
					</div>

					{/* Address */}
					<div>
						<label className="block text-xl font-semibold mb-2">Address</label>
						<input type="text" className="w-full bg-white p-4 text-lg" />
					</div>

					{/* Subject */}
					<div>
						<label className="block text-xl font-semibold mb-2">
							Subject <span className="text-red-500">(Required)</span>
						</label>
						<input
							type="text"
							className="w-full bg-white p-4 text-lg"
							placeholder="プルダウンで件名..."
						/>
					</div>

					{/* Inquiry */}
					<div>
						<label className="block text-xl font-semibold mb-2">
							Inquiry Details <span className="text-red-500">(Required)</span>
						</label>
						<textarea
							rows={8}
							className="w-full bg-white p-4 text-lg"
							placeholder="Free text field..."
						></textarea>
					</div>

					{/* Checkbox */}
					<div className="border border-gray-400 p-6 flex items-center gap-4 w-150 h-30">
						<input type="checkbox" className="h-9 w-9" />
						<label className="text-2xl">I agree to the Privacy Policy.</label>
					</div>

					{/* Submit */}
					<button className="bg-[#2E3E9E] text-white px-16 py-4 text-xl font-semibold">
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default ContactForm;
