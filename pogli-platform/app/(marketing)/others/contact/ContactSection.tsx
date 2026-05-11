// "use client";

// import React from "react";
// import {
// 	Building2,
// 	MapPin,
// 	Phone,
// 	Mail,
// 	BriefcaseBusiness,
// } from "lucide-react";

// const ContactSection = () => {
// 	return (
// 		<section className="relative overflow-hidden bg-[#eef2ff] py-16 px-4">
			
// 			{/* BACKGROUND CURVE */}
// 			<div className="absolute top-0 left-0 w-full h-[280px] bg-[#3145b5] rounded-b-[120px]" />

// 			<div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.3fr] gap-8">
				
// 				{/* LEFT CARD */}
// 				<div className="bg-white rounded-[24px] shadow-xl p-8">
					
// 					<h2 className="text-4xl font-bold text-[#0f172a] mb-2">
// 						Contact Details
// 					</h2>

// 					<p className="text-gray-500 text-lg mb-10">
// 						Our team is ready to assist you.
// 					</p>

// 					<div className="space-y-8">

// 						{/* ITEM */}
// 						<div className="flex gap-5">
// 							<div className="w-14 h-14 rounded-xl bg-[#dbeafe] flex items-center justify-center shrink-0">
// 								<Building2 className="text-[#1e3a8a]" size={26} />
// 							</div>

// 							<div>
// 								<h3 className="text-2xl font-bold text-[#0f172a]">
// 									株式会社POGLI
// 								</h3>

// 								<p className="text-gray-600 text-lg">
// 									Company: POGLI Co., Ltd.
// 								</p>
// 							</div>
// 						</div>

// 						{/* ITEM */}
// 						<div className="flex gap-5">
// 							<div className="w-14 h-14 rounded-xl bg-[#dbeafe] flex items-center justify-center shrink-0">
// 								<MapPin className="text-[#1e3a8a]" size={26} />
// 							</div>

// 							<div>
// 								<h3 className="text-xl font-bold text-[#0f172a] leading-relaxed">
// 									〒600-8813 京都府京都市下京区中堂寺南町
// 									134番地 ASTEM棟10F
// 								</h3>

// 								<p className="text-gray-600 text-lg">
// 									Address: Kyoto Research Park
// 								</p>
// 							</div>
// 						</div>

// 						{/* ITEM */}
// 						<div className="flex gap-5">
// 							<div className="w-14 h-14 rounded-xl bg-[#dbeafe] flex items-center justify-center shrink-0">
// 								<Phone className="text-[#1e3a8a]" size={26} />
// 							</div>

// 							<div>
// 								<h3 className="text-2xl font-bold text-[#0f172a]">
// 									+81-75-xxxx-xxxx
// 								</h3>

// 								<p className="text-gray-600 text-lg">
// 									Phone: +81-75-xxxx-xxxx
// 								</p>
// 							</div>
// 						</div>

// 						{/* ITEM */}
// 						<div className="flex gap-5">
// 							<div className="w-14 h-14 rounded-xl bg-[#dbeafe] flex items-center justify-center shrink-0">
// 								<Mail className="text-[#1e3a8a]" size={26} />
// 							</div>

// 							<div>
// 								<h3 className="text-2xl font-bold text-[#0f172a]">
// 									info@poglienterprise.com
// 								</h3>

// 								<p className="text-gray-600 text-lg">
// 									Email: info@poglienterprise.com
// 								</p>
// 							</div>
// 						</div>

// 						{/* ITEM */}
// 						<div className="flex gap-5">
// 							<div className="w-14 h-14 rounded-xl bg-[#dbeafe] flex items-center justify-center shrink-0">
// 								<BriefcaseBusiness
// 									className="text-[#1e3a8a]"
// 									size={26}
// 								/>
// 							</div>

// 							<div>
// 								<h3 className="text-2xl font-bold text-[#0f172a]">
// 									管理部門
// 								</h3>

// 								<p className="text-gray-600 text-lg">
// 									Department: Administration
// 								</p>
// 							</div>
// 						</div>
// 					</div>

// 					{/* MAP */}
// 					<div className="mt-10 overflow-hidden rounded-2xl border">
// 						<img
// 							src="/map-img.jpg"
// 							alt="Map"
// 							className="w-full h-[220px] object-cover"
// 						/>
// 					</div>
// 				</div>

// 				{/* RIGHT FORM */}
// 				<div className="bg-white rounded-[24px] shadow-xl p-8">
					
// 					<form className="space-y-7">

// 						{/* NAME */}
// 						<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
							
// 							<div>
// 								<label className="block text-lg font-semibold mb-3">
// 									姓 / Last Name{" "}
// 									<span className="text-red-500">*</span>
// 								</label>

// 								<input
// 									type="text"
// 									placeholder="Pogli"
// 									className="w-full h-[58px] rounded-xl border border-gray-300 px-5 text-lg outline-none focus:border-[#3145b5]"
// 								/>
// 							</div>

// 							<div>
// 								<label className="block text-lg font-semibold mb-3">
// 									名 / First Name{" "}
// 									<span className="text-red-500">*</span>
// 								</label>

// 								<input
// 									type="text"
// 									placeholder="Taro"
// 									className="w-full h-[58px] rounded-xl border border-gray-300 px-5 text-lg outline-none focus:border-[#3145b5]"
// 								/>
// 							</div>
// 						</div>

// 						{/* EMAIL */}
// 						<div>
// 							<label className="block text-lg font-semibold mb-3">
// 								メールアドレス / Email{" "}
// 								<span className="text-red-500">*</span>
// 							</label>

// 							<input
// 								type="email"
// 								placeholder="example@poglienterprise.com"
// 								className="w-full h-[58px] rounded-xl border border-gray-300 px-5 text-lg outline-none focus:border-[#3145b5]"
// 							/>
// 						</div>

// 						{/* PHONE */}
// 						<div>
// 							<label className="block text-lg font-semibold mb-3">
// 								電話番号 / Phone Number
// 							</label>

// 							<input
// 								type="tel"
// 								placeholder="+81-00-0000-0000"
// 								className="w-full h-[58px] rounded-xl border border-gray-300 px-5 text-lg outline-none focus:border-[#3145b5]"
// 							/>
// 						</div>

// 						{/* MESSAGE */}
// 						<div>
// 							<label className="block text-lg font-semibold mb-3">
// 								お問い合わせ内容 / Message{" "}
// 								<span className="text-red-500">*</span>
// 							</label>

// 							<textarea
// 								rows={7}
// 								placeholder="Please write your inquiry here..."
// 								className="w-full rounded-xl border border-gray-300 p-5 text-lg outline-none resize-none focus:border-[#3145b5]"
// 							/>
// 						</div>

// 						{/* BUTTON */}
// 						<button className="bg-[#3145b5] hover:bg-[#25379a] text-white text-xl font-semibold px-10 py-4 rounded-xl shadow-lg transition">
// 							送信 / Submit
// 						</button>
// 					</form>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default ContactSection;


"use client";

import {
	Building2,
	MapPin,
	Phone,
	Mail,
	BriefcaseBusiness,
} from "lucide-react";

export default function ContactSection() {
	return (
		<section className="relative overflow-hidden bg-[#f5f5f5] py-20 px-4">

			{/* BACKGROUND */}
			<div className="absolute inset-0 overflow-hidden">

				<div className="absolute top-0 w-full h-[340px] bg-[#2c3f8f]" />

				<div className="absolute -top-[220px] -left-[220px] w-[650px] h-[650px] rounded-full bg-[#3b4db8] opacity-70" />

				<div className="absolute -top-[220px] -right-[220px] w-[650px] h-[650px] rounded-full bg-[#3b4db8] opacity-70" />
			</div>

			{/* CONTENT */}
			<div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.3fr] gap-8">

				{/* LEFT CARD */}
				<div className="bg-white rounded-[24px] p-10 shadow-xl">

					<h2 className="text-2xl font-bold text-[#0f1b35]">
						Contact Details
					</h2>

					<p className="text-gray-500 text-lg mt-4 mb-12">
						Our team is ready to assist you.
					</p>

					<div className="space-y-10">

						{/* ITEM */}
						<div className="flex gap-5">
							<div className="w-14 h-14 rounded-2xl bg-[#dce7ff] flex items-center justify-center shrink-0">
								<Building2 className="text-[#16304d]" />
							</div>

							<div>
								<h3 className="font-bold text-lg text-[#0f1b35]">
									株式会社POGLI
								</h3>

								<p className="text-gray-600 text-lg">
									Company: POGLI Co., Ltd.
								</p>
							</div>
						</div>

						{/* ITEM */}
						<div className="flex gap-5">
							<div className="w-14 h-14 rounded-2xl bg-[#dce7ff] flex items-center justify-center shrink-0">
								<MapPin className="text-[#16304d]" />
							</div>

							<div>
								<h3 className="font-bold text-lg leading-relaxed text-[#0f1b35]">
									〒600-8813 京都お京都市下京倒中堂寺南町134番地 ASTEM棟10F
								</h3>

								<p className="text-gray-600 text-sm">
									Address: Kyoto Research Park, ASTEM Building 10F
								</p>
							</div>
						</div>

						{/* ITEM */}
						<div className="flex gap-5">
							<div className="w-14 h-14 rounded-lg bg-[#dce7ff] flex items-center justify-center shrink-0">
								<Phone className="text-[#16304d]" />
							</div>

							<div>
								<h3 className="font-bold text-lg text-[#0f1b35]">
									+81-75-xxxx-xxxx
								</h3>

								<p className="text-gray-600 text-sm">
									Phone: +81-75-xxxx-xxxx
								</p>
							</div>
						</div>

						{/* ITEM */}
						<div className="flex gap-5">
							<div className="w-14 h-14 rounded-2xl bg-[#dce7ff] flex items-center justify-center shrink-0">
								<Mail className="text-[#16304d]" />
							</div>

							<div>
								<h3 className="font-bold text-lg text-[#0f1b35]">
									Info@Poglienterprise.Com
								</h3>

								<p className="text-gray-600 text-sm">
									Email: Info@Poglienterprise.Com
								</p>
							</div>
						</div>

						{/* ITEM */}
						<div className="flex gap-5">
							<div className="w-14 h-14 rounded-2xl bg-[#dce7ff] flex items-center justify-center shrink-0">
								<BriefcaseBusiness className="text-[#16304d]" />
							</div>

							<div>
								<h3 className="font-bold text-lg text-[#0f1b35]">
									管理部門
								</h3>

								<p className="text-gray-600 text-sm">
									Department: Administration
								</p>
							</div>
						</div>
					</div>

					{/* MAP */}
					<div className="mt-14 rounded-2xl overflow-hidden border border-gray-200 relative">
						<img
							src="/map.jpg"
							alt="Map"
							className="w-full h-[230px] object-cover"
						/>

						<button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-4 rounded-full font-semibold shadow-lg flex items-center gap-3">
							<MapPin size={18} />
							View on Map
						</button>
					</div>
				</div>

				{/* RIGHT CARD */}
				<div className="bg-white rounded-[24px] p-10 shadow-xl">

					<form className="space-y-8">

						{/* NAME */}
						<div className="grid md:grid-cols-2 gap-6">

							<div className="space-y-3">
								<label className="text-[18px] font-semibold text-[#0f1b35]">
									姓 / Last Name{" "}
									<span className="text-red-500">*</span>
								</label>

								<input
									type="text"
									placeholder="Pogli"
									className="w-full h-16 border border-gray-300 rounded-2xl px-5 text-sm outline-none"
								/>
							</div>

							<div className="space-y-3">
								<label className="text-[18px] font-semibold text-[#0f1b35]">
									名 / First Name{" "}
									<span className="text-red-500">*</span>
								</label>

								<input
									type="text"
									placeholder="Taro"
									className="w-full h-16 border border-gray-300 rounded-2xl px-5 text-sm outline-none"
								/>
							</div>
						</div>

						{/* EMAIL */}
						<div className="space-y-3">
							<label className="text-[18px] font-semibold text-[#0f1b35]">
								メールアドレス / Email{" "}
								<span className="text-red-500">*</span>
							</label>

							<input
								type="email"
								placeholder="example@poglienterprise.com"
								className="w-full h-16 border border-gray-300 rounded-2xl px-5 text-sm outline-none"
							/>
						</div>

						{/* PHONE */}
						<div className="space-y-3">
							<label className="text-[18px] font-semibold text-[#0f1b35]">
								電話番号 / Phone Number
							</label>

							<input
								type="text"
								placeholder="+81-00-0000-0000"
								className="w-full h-16 border border-gray-300 rounded-2xl px-5 text-sm outline-none"
							/>
						</div>

						{/* MESSAGE */}
						<div className="space-y-3">
							<label className="text-[18px] font-semibold text-[#0f1b35]">
								お問い合わせ内容 / Message{" "}
								<span className="text-red-500">*</span>
							</label>

							<textarea
								placeholder="Please write your inquiry here..."
								className="w-full h-[210px] border border-gray-300 rounded-2xl p-5 text-sm outline-none resize-none"
							/>
						</div>

						{/* BUTTON */}
						<button className="bg-[#3346b4] hover:bg-[#2c3f8f] transition-all duration-300 text-white text-xl font-semibold px-9 h-16 rounded-2xl shadow-lg">
							送信 / Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}