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
		// <footer className="bg-[#cbebfd] px-8 md:px-20 py-1 text-black pt-10">
		// 	<div className="max-w-7xl mx-auto">
		// 		{/* Top Section */}
		// 		<div className="grid md:grid-cols-4 gap-12 items-start">
		// 			{/* Logo Box */}
		// 			<div className="flex justify-center md:justify-start">
		// 				<img
		// 					src="/footer-logo.png"
		// 					alt="Logo"
		// 					className="w-[500px] h-[130px] rounded-md mt-20 ml-10"
		// 				/>
		// 			</div>

		// 			{/* Column 1 */}
		// 			<div className="ml-20">
		// 				<h3 className="text-2xl font-bold mb-6 uppercase">サービス一覧</h3>
		// 				<ul className="text-lg leading-relaxed">
		// 					<li>会社概要</li>
		// 					<li>事業内容</li>
		// 					<li>採用情報</li>
		// 					<li>プライバシーポリシー</li>
		// 				</ul>
		// 			</div>

		// 			{/* Column 2 */}
		// 			<div className="ml-5">
		// 				<h3 className="text-2xl font-bold mb-6 uppercase">お役立ち情報</h3>
		// 				<ul className="text-lg leading-relaxed">
		// 					<li>よくある質問</li>
		// 					<li>最新ニュース</li>
		// 					<li>プレスリリース</li>
		// 					<li>ご利用ガイド</li>

		// 				</ul>
		// 			</div>

		// 			{/* Contact Section */}
		// 			<div>
		// 				<h3 className="text-3xl font-bold mb-6">お問い合わせ</h3>

		// 				<div className="space-y-5 text-lg">
		// 					<div className="flex gap-4 items-start">
		// 						<Phone className="text-blue-700 mt-1" />
		// 						<div>
		// 							<p>All: (123–465–7890</p>
		// 							<p>All: (123–465–7890</p>
		// 						</div>
		// 					</div>

		// 					<div className="flex gap-4 items-center">
		// 						<Mail className="text-blue-700" />
		// 						<p>メール: info@pogli.co.jp</p>
		// 					</div>

		// 					<div className="flex gap-4 items-start">
		// 						<MapPin className="text-blue-700 mt-1" />
		// 						<div>
		// 							<p>京都府京都市下京区</p>
		// 							<p>中堂寺南町１３４番地</p>
		// 							<p>ASTEM棟１０F</p>
		// 						</div>
		// 					</div>
		// 				</div>

		// 				{/* Social Icons */}
		// 				<div className="flex gap-4 mt-8">
		// 					{[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map(
		// 						(Icon, i) => (
		// 							<div
		// 								key={i}
		// 								className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white"
		// 							>
		// 								<Icon size={20} />
		// 							</div>
		// 						),
		// 					)}
		// 				</div>
		// 			</div>
		// 		</div>

		// 		{/* Divider */}
		// 		<div className="border-t border-black mt-14 pt-8">
		// 			<p className="text-center text-xl font-medium">
		// 				Managed By Pogli Co., Ltd.
		// 			</p>
		// 		</div>
		// 	</div>
		// </footer>
		<footer className="bg-[#cbebfd] px-18 md:px-16 py-6 text-black">
			<div className="max-w-7xl mx-auto">
				{/* Top Section */}
				<div className="grid md:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr] gap-2 items-start">
					{/* Logo */}
					<div className="flex justify-center md:justify-start mt-14 ml-19">
						<img
							src="/footer-logo.png"
							alt="Logo"
							className="w-[220px] h-auto"
						/>
					</div>
					{/* Column 1 */}
					<div>
						<h3 className="text-lg font-bold mb-3">サービス一覧</h3>
						<ul className="text-sm space-y-1">
							<li>会社概要</li>
							<li>事業内容</li>
							<li>採用情報</li>
							<li>プライバシーポリシー</li>
						</ul>
					</div>

					{/* Column 2 */}
					<div>
						<h3 className="text-lg font-bold mb-3">お役立ち情報</h3>
						<ul className="text-sm space-y-1">
							<li>よくある質問</li>
							<li>最新ニュース</li>
							<li>プレスリリース</li>
							<li>ご利用ガイド</li>
						</ul>
					</div>

					{/* Contact */}
					<div className="mr-22">
						<h3 className="text-lg font-bold mb-3">お問い合わせ</h3>

						<div className="space-y-3 text-sm">
							<div className="flex gap-2 items-start">
								<Phone className="text-blue-700 mt-0.5" size={16} />
								<div>
									<p>All: (123–465–7890)</p>
									<p>All: (123–465–7890)</p>
								</div>
							</div>

							<div className="flex gap-2 items-center">
								<Mail className="text-blue-700" size={16} />
								<p>info@pogli.co.jp</p>
							</div>

							<div className="flex gap-2 items-start">
								<MapPin className="text-blue-700 mt-0.5" size={16} />
								<div>
									<p>京都府京都市下京区</p>
									<p>中堂寺南町134番地</p>
									<p>ASTEM棟10F</p>
								</div>
							</div>
						</div>

						{/* Social */}
						<div className="flex gap-3 mt-4">
							{[
								FaFacebookF,
								FaTwitter,
								FaInstagram,
								FaLinkedinIn,
								FaYoutube,
							].map((Icon, i) => (
								<div
									key={i}
									className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white"
								>
									<Icon size={14} />
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-black mt-6 pt-4">
					<p className="text-center text-sm">Managed By Pogli Co., Ltd.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
