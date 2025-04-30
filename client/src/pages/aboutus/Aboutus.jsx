import React from "react";
import PropTypes from "prop-types";
import firstabout from "../../assets/firstabout.png";
import secabout from "../../assets/secabout.png";
const stories = [
	{
		title: "Our Journey Begins",
		description:
			"Tripeazy started with a vision—to make travel seamless, affordable, and unforgettable. What began as a small idea grew into a full-fledged platform connecting travelers with curated experiences, trusted agencies, and hassle-free bookings. We believe that every journey should be effortless and enriching, whether it’s a weekend getaway or an international adventure.",
		image: firstabout,
	},
	{
		title: "Our Mission & Values",
		description:
			"At Tripeazy, we are committed to providing a smooth and secure travel booking experience. We partner with top-rated agencies, ensuring quality and reliability for every trip. Our mission is to redefine the way people explore the world by offering personalized travel solutions, round-the-clock support, and seamless navigation through our user-friendly platform.",
		image: secabout,
	},
];

const StoryItem = ({ item, index }) => {
	const { title, description, image } = item;
	return (
		<>
			<div
				className={`col-span-12 md:col-span-5 ${
					index % 2 === 0
						? "order-1 md:order-2 md:col-start-7"
						: "order-2 md:order-1 md:col-start-2"
				}`}
			>
				<div
					className={`flex flex-col justify-center ${
						index % 2 === 0 ? "lg:pl-14" : "lg:pr-14"
					}`}
				>
					<h4 className="text-3xl font-bold mb-4">{title}</h4>
					<p className="text-lg leading-relaxed text-justify opacity-80 mb-0 md:pr-6">
						{description}
					</p>
				</div>
			</div>
			<div
				className={`${
					index % 2 === 0
						? "order-1 md:col-start-2"
						: "order-1 md:order-2 md:col-start-7"
				} col-span-12 md:col-span-5 mb-6 md:mb-0 mt-6 md:mt-0`}
			>
				<div>
					<img
						src={image}
						alt={title}
						className="max-w-full h-auto rounded-2xl shadow-lg"
					/>
				</div>
			</div>
		</>
	);
};

StoryItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const AboutUs = () => {
	return (
		<section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
			<div className="container px-4">
				<div className="grid grid-cols-12 justify-center text-center mb-12">
					<div className="col-span-12 md:col-span-8 md:col-start-3">
						<h2 className="text-5xl font-extrabold mb-6">About Tripeazy</h2>
						<p className="text-xl opacity-80 mb-4">
							We are more than just a travel booking platform—we are your travel partner,
							ensuring a stress-free and memorable experience every step of the way.
						</p>
					</div>
				</div>

				{stories.map((item, i) => (
					<div
						className="grid grid-cols-12 justify-center items-center mt-12"
						key={i}
					>
						<StoryItem item={item} index={i + 1} />
					</div>
				))}
			</div>
		</section>
	);
};

export default AboutUs;
