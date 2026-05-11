// "use client";

// import React from "react";
// import { ArrowRight, Mail, Phone } from "lucide-react";

// const FormSection = () => {
// 	return (
// 		// <section className="relative overflow-hidden bg-[#2f3f9f] py-20">

// 		// 	{/* Background Shapes */}
// 		// 	<div className="absolute top-0 left-0 w-[420px] h-[420px] bg-[#4457c2] rounded-full opacity-30 blur-3xl" />
// 		// 	<div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#4457c2] rounded-full opacity-30 blur-3xl" />

// 		// 	<div className="relative z-10 max-w-6xl mx-auto px-6">

// 		// 		{/* FORM CARD */}
// 		// 		<div className="bg-white rounded-[22px] shadow-2xl p-8 md:p-12">

// 		// 			<form className="space-y-8">

// 		// 				{/* COMPANY */}
// 		// 				<div>
// 		// 					<label className="block text-[15px] font-medium text-black mb-3">
// 		// 						会社名 / Company Name <span className="text-red-500">*</span>
// 		// 					</label>

// 		// 					<input
// 		// 						type="text"
// 		// 						placeholder="株式会社POGLI / POGLI Co., Ltd."
// 		// 						className="w-full h-[60px] rounded-xl border border-gray-400 px-5 text-lg outline-none focus:border-[#2f3f9f]"
// 		// 					/>
// 		// 				</div>

// 		// 				{/* NAME */}
// 		// 				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// 		// 					<div>
// 		// 						<label className="block text-[15px] font-medium text-black mb-3">
// 		// 							姓 / Last Name <span className="text-red-500">*</span>
// 		// 						</label>

// 		// 						<input
// 		// 							type="text"
// 		// 							placeholder="田中 / Tanaka"
// 		// 							className="w-full h-[90px] rounded-xl border border-gray-400 px-5 text-lg outline-none focus:border-[#2f3f9f]"
// 		// 						/>
// 		// 					</div>

// 		// 					<div>
// 		// 						<label className="block text-[15px] font-medium text-black mb-3">
// 		// 							名 / First Name <span className="text-red-500">*</span>
// 		// 						</label>

// 		// 						<input
// 		// 							type="text"
// 		// 							placeholder="太郎 / Taro"
// 		// 							className="w-full h-[60px] rounded-xl border border-gray-400 px-5 text-lg outline-none focus:border-[#2f3f9f]"
// 		// 						/>
// 		// 					</div>
// 		// 				</div>

// 		// 				{/* EMAIL */}
// 		// 				<div>
// 		// 					<label className="block text-[15px] font-medium text-black mb-3">
// 		// 						メールアドレス / Email Address <span className="text-red-500">*</span>
// 		// 					</label>

// 		// 					<div className="relative">
// 		// 						<Mail
// 		// 							size={24}
// 		// 							className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
// 		// 						/>

// 		// 						<input
// 		// 							type="email"
// 		// 							placeholder="example@pogli.com"
// 		// 							className="w-full h-[60px] rounded-xl border border-gray-400 pl-16 pr-5 text-lg outline-none focus:border-[#2f3f9f]"
// 		// 						/>
// 		// 					</div>
// 		// 				</div>

// 		// 				{/* PHONE */}
// 		// 				<div>
// 		// 					<label className="block text-[15px] font-medium text-black mb-3">
// 		// 						電話番号 / Phone Number <span className="text-red-500">*</span>
// 		// 					</label>

// 		// 					<div className="relative">
// 		// 						<Phone
// 		// 							size={24}
// 		// 							className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
// 		// 						/>

// 		// 						<input
// 		// 							type="tel"
// 		// 							placeholder="03-1234-5678"
// 		// 							className="w-full h-[60px] rounded-xl border border-gray-400 pl-16 pr-5 text-lg outline-none focus:border-[#2f3f9f]"
// 		// 						/>
// 		// 					</div>
// 		// 				</div>

// 		// 				{/* MESSAGE */}
// 		// 				<div>
// 		// 					<label className="block text-[15px] font-medium text-black mb-3">
// 		// 						ご依頼内容 / Request Details{" "}
// 		// 						<span className="text-red-500">*</span>
// 		// 					</label>

// 		// 					<textarea
// 		// 						rows={7}
// 		// 						placeholder="Enter your request here..."
// 		// 						className="w-full rounded-xl border border-gray-400 p-5 text-lg outline-none resize-none focus:border-[#2f3f9f]"
// 		// 					/>
// 		// 				</div>

// 		// 				{/* BUTTON */}
// 		// 				<div className="flex justify-center pt-2">

// 		// 					<button className="bg-[#3145b5] hover:bg-[#27389a] text-white text-2xl font-semibold px-14 py-5 rounded-full shadow-xl transition-all duration-300">
// 		// 						送信 / Submit ➤
// 		// 					</button>
// 		// 				</div>
// 		// 			</form>
// 		// 		</div>
// 		// 	</div>
// 		// </section>

// 		// <section className="bg-white py-20 px-4">

// 		// 	<div className="max-w-6xl mx-auto bg-white rounded-[24px] shadow-xl p-8 md:p-12">

// 		// 		<form className="space-y-8">

// 		// 			{/* COMPANY */}
// 		// 			<div>
// 		// 				<label className="block text-[17px] font-medium text-black mb-3">
// 		// 					会社名 / Company Name{" "}
// 		// 					<span className="text-red-500">*</span>
// 		// 				</label>

// 		// 				<input
// 		// 					type="text"
// 		// 					placeholder="株式会社POGLI / POGLI Co., Ltd."
// 		// 					className="w-full h-[58px] rounded-xl border border-gray-300 pl-5 py-3 text-[17px] text-black placeholder:text-gray-400 bg-white outline-none focus:border-[#3145b5] focus:ring-2 focus:ring-[#3145b5]/20"
// 		// 				/>
// 		// 			</div>

// 		// 			{/* NAME */}
// 		// 			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// 		// 				<div>
// 		// 					<label className="block text-[17px] font-medium text-black mb-3">
// 		// 						姓 / Last Name{" "}
// 		// 						<span className="text-red-500">*</span>
// 		// 					</label>

// 		// 					<input
// 		// 						type="text"
// 		// 						placeholder="田中 / Tanaka"
// 		// 						className="w-full h-[58px] rounded-xl border border-gray-300 pl-5 py-3 text-[17px] text-black placeholder:text-gray-400 bg-white outline-none focus:border-[#3145b5] focus:ring-2 focus:ring-[#3145b5]/20"
// 		// 					/>
// 		// 				</div>

// 		// 				<div>
// 		// 					<label className="block text-[17px] font-medium text-black mb-3">
// 		// 						名 / First Name{" "}
// 		// 						<span className="text-red-500">*</span>
// 		// 					</label>

// 		// 					<input
// 		// 						type="text"
// 		// 						placeholder="太郎 / Taro"
// 		// 						className="w-full h-[58px] rounded-xl border border-gray-300 pl-5 py-3 text-[17px] text-black placeholder:text-gray-400 bg-white outline-none focus:border-[#3145b5] focus:ring-2 focus:ring-[#3145b5]/20"
// 		// 					/>
// 		// 				</div>
// 		// 			</div>

// 		// 			{/* EMAIL */}
// 		// 			<div>
// 		// 				<label className="block text-[17px] font-medium text-black mb-3">
// 		// 					メールアドレス / Email Address{" "}
// 		// 					<span className="text-red-500">*</span>
// 		// 				</label>

// 		// 				<div className="relative">

// 		// 					<Mail
// 		// 						size={22}
// 		// 						className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
// 		// 					/>

// 		// 					<input
// 		// 						type="email"
// 		// 						placeholder="example@pogli.com"
// 		// 						className="w-full h-[58px] rounded-xl border border-gray-300 pl-5 py-3 text-[17px] text-black placeholder:text-gray-400 bg-white outline-none focus:border-[#3145b5] focus:ring-2 focus:ring-[#3145b5]/20"
// 		// 					/>
// 		// 				</div>
// 		// 			</div>

// 		// 			{/* PHONE */}
// 		// 			<div>
// 		// 				<label className="block text-[17px] font-medium text-black mb-3">
// 		// 					電話番号 / Phone Number{" "}
// 		// 					<span className="text-red-500">*</span>
// 		// 				</label>

// 		// 				<div className="relative">

// 		// 					<Phone
// 		// 						size={20}
// 		// 						className="absolute left-9 top-1/2 -translate-y-1/2 text-gray-500"
// 		// 					/>

// 		// 					<input
// 		// 						type="tel"
// 		// 						placeholder="03-1234-5678"
// 		// 						className="w-full h-[58px] rounded-xl border border-gray-300 pl-5 py-3 text-[17px] text-black placeholder:text-gray-400 bg-white outline-none focus:border-[#3145b5] focus:ring-2 focus:ring-[#3145b5]/20"
// 		// 					/>
// 		// 				</div>
// 		// 			</div>

// 		// 			{/* MESSAGE */}
// 		// 			<div>
// 		// 				<label className="block text-[17px] font-medium text-black mb-3">
// 		// 					ご依頼内容 / Request Details{" "}
// 		// 					<span className="text-red-500">*</span>
// 		// 				</label>

// 		// 				<textarea
// 		// 					rows={8}
// 		// 					placeholder="Enter your request here..."
// 		// 					className="w-full rounded-xl border border-gray-300 p-5 text-[17px] text-black placeholder:text-gray-400 bg-white outline-none resize-none focus:border-[#3145b5] focus:ring-2 focus:ring-[#3145b5]/20"
// 		// 				/>
// 		// 			</div>

// 		// 			{/* BUTTON */}
// 		// 			<div className="flex justify-center mt-8">
// 		// 			<button className="flex items-center gap-2 bg-[#2c3f8f] hover:bg-[#24357a] text-white px-6 py-6 rounded-full font-medium transition">
// 		// 				送信 / Submit
// 		// 				<ArrowRight size={18} />
// 		// 			</button>
// 		// 		</div>
// 		// 		</form>
// 		// 	</div>
// 		// </section>

// 		<section className="relative overflow-hidden bg-white py-20 px-4">
// 			{/* BLUE CURVE BACKGROUND */}
// 			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[420px] bg-blue-900 rounded-t-[100%] z-0" />

// 			{/* OPTIONAL EXTRA SHAPE */}
// 			<div className="absolute bottom-0 right-[-120px] w-[500px] h-[500px] bg-[#4457c2] opacity-30 rotate-12 z-0" />

// 			<div className="relative z-10 max-w-6xl mx-auto bg-white rounded-[24px] shadow-xl p-8 md:p-12">
// 				<form className="space-y-8">
// 					{/* COMPANY */}
// 					<div>
// 						<label className="block text-[17px] font-medium text-black mb-3">
// 							会社名 / Company Name <span className="text-red-500">*</span>
// 						</label>

// 						<input
// 							type="text"
// 							placeholder="株式会社POGLI / POGLI Co., Ltd."
// 							className="w-full h-[58px] rounded-xl border border-gray-300 pl-5 py-3 text-[17px] text-black placeholder:text-gray-400 bg-white outline-none focus:border-[#3145b5] focus:ring-2 focus:ring-[#3145b5]/20"
// 						/>
// 					</div>

// 					{/* NAME */}
// 					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// 						<div>
// 							<label className="block text-[17px] font-medium text-black mb-3">
// 								姓 / Last Name <span className="text-red-500">*</span>
// 							</label>

// 							<input
// 								type="text"
// 								placeholder="田中 / Tanaka"
// 								className="w-full h-[58px] rounded-xl border border-gray-300 pl-5 py-3 text-[17px] text-black placeholder:text-gray-400 bg-white outline-none focus:border-[#3145b5] focus:ring-2 focus:ring-[#3145b5]/20"
// 							/>
// 						</div>

// 						<div>
// 							<label className="block text-[17px] font-medium text-black mb-3">
// 								名 / First Name <span className="text-red-500">*</span>
// 							</label>

// 							<input
// 								type="text"
// 								placeholder="太郎 / Taro"
// 								className="w-full h-[58px] rounded-xl border border-gray-300 pl-5 py-3 text-[17px] text-black placeholder:text-gray-400 bg-white outline-none focus:border-[#3145b5] focus:ring-2 focus:ring-[#3145b5]/20"
// 							/>
// 						</div>
// 					</div>

// 					{/* EMAIL */}
// 					<div>
// 						<label className="block text-[17px] font-medium text-black mb-3">
// 							メールアドレス / Email Address{" "}
// 							<span className="text-red-500">*</span>
// 						</label>

// 						<div className="relative">
// 							<Mail
// 								size={22}
// 								className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
// 							/>

// 							<input
// 								type="email"
// 								placeholder="example@pogli.com"
// 								className="w-full h-[58px] rounded-xl border border-gray-300 pl-14 py-3 text-[17px] text-black placeholder:text-gray-400 bg-white outline-none focus:border-[#3145b5] focus:ring-2 focus:ring-[#3145b5]/20"
// 							/>
// 						</div>
// 					</div>

// 					{/* PHONE */}
// 					<div>
// 						<label className="block text-[17px] font-medium text-black mb-3">
// 							電話番号 / Phone Number <span className="text-red-500">*</span>
// 						</label>

// 						<div className="relative">
// 							<Phone
// 								size={20}
// 								className="absolute left-4 right-5 top-1/2 -translate-y-1/2 text-gray-500"
// 							/>

// 							<input
// 								type="tel"
// 								placeholder="03-1234-5678"
// 								className="w-full h-[58px] rounded-xl border border-gray-300 pl-17 py-3 text-[17px] text-black placeholder:text-gray-400 bg-white outline-none focus:border-[#3145b5] focus:ring-2 focus:ring-[#3145b5]/20"
// 							/>
// 						</div>
// 					</div>

// 					{/* MESSAGE */}
// 					<div>
// 						<label className="block text-[17px] font-medium text-black mb-3">
// 							ご依頼内容 / Request Details{" "}
// 							<span className="text-red-500">*</span>
// 						</label>

// 						<textarea
// 							rows={8}
// 							placeholder="Enter your request here..."
// 							className="w-full rounded-xl border border-gray-300 p-5 text-[17px] text-black placeholder:text-gray-400 bg-white outline-none resize-none focus:border-[#3145b5] focus:ring-2 focus:ring-[#3145b5]/20"
// 						/>
// 					</div>

// 					{/* BUTTON */}
// 					<div className="flex justify-center mt-8">
// 						<button className="flex items-center gap-2 bg-[#2c3f8f] hover:bg-[#24357a] text-white px-8 py-5 rounded-full font-medium transition shadow-lg">
// 							送信 / Submit
// 							<ArrowRight size={18} />
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</section>
// 	);
// };

// export default FormSection;

"use client";

import { ArrowRight, Mail, Phone } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
	return (
		<section className="relative overflow-hidden bg-[#f5f5f5] py-20 px-4">
			{/* BACKGROUND SHAPES */}
			<div className="absolute inset-0 overflow-hidden">
				{/* MAIN BLUE BASE */}
				<div className="absolute bottom-0 w-full h-[320px] bg-[#2c3f8f]" />

				{/* LEFT ARC */}
				<div
					className="
			absolute
			-bottom-[220px]
			-left-[220px]
			w-[650px]
			h-[650px]
			rounded-full
			bg-[#3a4db8]
			opacity-80
		"
				/>

				{/* RIGHT ARC */}
				<div
					className="
			absolute
			-bottom-[220px]
			-right-[220px]
			w-[650px]
			h-[650px]
			rounded-full
			bg-[#3a4db8]
			opacity-80
		"
				/>

				{/* CENTER GLOW */}
				<div
					className="
			absolute
			bottom-[-120px]
			left-1/2
			-translate-x-1/2
			w-[850px]
			h-[380px]
			bg-[#5166dc]
			blur-3xl
			opacity-30
			rounded-full
		"
				/>
			</div>
			{/* FORM CARD */}
			<div className="relative z-10 max-w-6xl mx-auto bg-white rounded-[24px] shadow-xl px-6 md:px-16 py-14">
				<form className="space-y-10">
					{/* COMPANY */}
					<div className="space-y-3">
						<label className="text-[18px] font-medium text-[#1d2940]">
							会社名 / Company Name <span className="text-red-500">*</span>
						</label>

						<input
							type="text"
							placeholder="株式会社POGLI / POGLI Co., Ltd."
							className="w-full h-14 rounded-xl border border-gray-400 px-5 text-lg outline-none focus:border-[#2f43b6]"
						/>
					</div>

					{/* NAME */}
					<div className="grid md:grid-cols-2 gap-8">
						<div className="space-y-3">
							<label className="text-[18px] font-medium text-[#1d2940]">
								姓 / Last Name <span className="text-red-500">*</span>
							</label>

							<input
								type="text"
								placeholder="田中 / Tanaka"
								className="w-full h-14 rounded-xl border border-gray-400 px-5 text-lg outline-none focus:border-[#2f43b6]"
							/>
						</div>

						<div className="space-y-3">
							<label className="text-[18px] font-medium text-[#1d2940]">
								名 / First Name <span className="text-red-500">*</span>
							</label>

							<input
								type="text"
								placeholder="太郎 / Taro"
								className="w-full h-14 rounded-xl border border-gray-400 px-5 text-lg outline-none focus:border-[#2f43b6]"
							/>
						</div>
					</div>

					{/* EMAIL */}
					<div className="space-y-3">
						<label className="text-[18px] font-medium text-[#1d2940]">
							メールアドレス / Email Address{" "}
							<span className="text-red-500">*</span>
						</label>

						<div className="flex items-center h-16 border border-gray-400 rounded-2xl px-5 bg-white">
							<FontAwesomeIcon
								icon={faEnvelope}
								className="text-gray-500 text-xl mr-4"
							/>

							<input
								type="email"
								placeholder="example@pogli.com"
								className="flex-1 bg-transparent outline-none text-lg text-gray-700 placeholder:text-gray-400"
							/>
						</div>
					</div>

					{/* PHONE */}
					<div className="space-y-3">
						<label className="text-[18px] font-medium text-[#1d2940]">
							電話番号 / Phone Number <span className="text-red-500">*</span>
						</label>

						<div className="flex items-center h-16 border border-gray-400 rounded-2xl px-5 bg-white">
							<FontAwesomeIcon
								icon={faPhone}
								className="text-gray-500 text-xl mr-4"
							/>

							<input
								type="text"
								placeholder="03-1234-5678"
								className="flex-1 bg-transparent outline-none text-lg text-gray-700 placeholder:text-gray-400"
							/>
						</div>
					</div>

					{/* MESSAGE */}
					<div className="space-y-3">
						<label className="text-[18px] font-medium text-[#1d2940]">
							少依頼内容 / Request Details{" "}
							<span className="text-red-500">*</span>
						</label>

						<textarea
							placeholder="Enter your request here..."
							className="w-full h-[220px] rounded-xl border border-gray-400 p-5 text-lg outline-none resize-none focus:border-[#2f43b6]"
						/>
					</div>

					{/* BUTTON */}
					<div className="flex justify-center mt-8">
						<button className="flex items-center gap-2 bg-[#2c3f8f] hover:bg-[#24357a] text-white px-8 py-5 rounded-full font-medium transition shadow-lg">
							送信 / Submit
							<ArrowRight size={18} />
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
