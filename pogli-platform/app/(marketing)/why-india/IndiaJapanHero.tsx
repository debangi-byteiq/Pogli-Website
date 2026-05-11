"use client";

export default function IndiaJapanHero() {
	return (
		<section className="relative h-[500px] overflow-hidden">

			{/* BACKGROUND IMAGE */}
			<img
				src="/flag.jpg"
				alt="India Japan"
				className="absolute inset-0 w-full h-full object-cover"
			/>

			{/* DARK OVERLAY */}
			<div className="absolute inset-0 bg-black/50 z-[1]" />

			{/* CONTENT */}
			<div className="relative z-10 flex items-center justify-center h-full px-4">

				<div className="relative text-center">

					{/* HUGE BACKGROUND TEXT */}
					<h1
						className="
							absolute
							left-1/2
							top-1/39
							-translate-x-1/2
							-translate-y-1/2
							text-white/20
							font-black
							text-[70px]
							md:text-[150px]
							leading-none
							whitespace-nowrap
							select-none
							pointer-events-none
						"
					>
						なぜインドなのか
					</h1>

					{/* MAIN HEADING */}
					<h2
						className="
							relative
							z-10
							text-white
							font-bold
							text-[26px]
							md:text-[58px]
							leading-tight
                            mt-27
						"
					>
						なぜ世界は今、インドに注目しているのか？
					</h2>
				</div>
			</div>
		</section>
	);
}