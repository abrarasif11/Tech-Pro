import React from 'react';

const FAQ = () => {
    return (
        <section className="dark:bg-gray-800 font-poppins dark:text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
			<div>
				<h3 className="text-2xl font-semibold hover:bg-green-600 rounded-md">Quran Course</h3>
				<p className="mt-1 dark:text-gray-400">We are proud to teach you and your child in a safe and friendly environment. We make sure that the students find the study quick, easy, and enjoyable. We believe that our well-designed online Quran courses are enough to train you in recitation and Tajweed. Moreover, we provide you with an opportunity to understand Quran in the Arabic language. For this, we are bringing two courses: “Basic Arabic Grammar” and “Quran with Tafseer”.

We deliver the best online education in Arabic, Quranic, and Islamic learning. To make it easier for you to find what you desire, we have designed six different online Quran courses.</p>
			</div>
			<div>
				<h3 className="text-2xl hover:bg-red-600 rounded-md font-semibold">IELTS Course</h3>
				<p className="mt-1 dark:text-gray-400"> IELTS is important for those who are absolute beginners. In fact, those who are already familiar with the IELTS exam can seek coaching too, due to the continuous practice it provides. IELTS Online is the new way to take the IELTS Academic test. You can now choose to take the world’s leading English language test at home or in a private location with a stable internet connection. It uses the same IELTS multi-layered security processes in pre-test, test day and post-test operations. Recognising Organisations will use the same online verification system as the one used to verify in-centre results. </p>
			</div>
			<div>
				<h3 className="font-semibold hover:bg-indigo-600 rounded-md text-2xl">Web Development</h3>
				<p className="mt-1 dark:text-gray-400">Go from no-code to an in-demand junior web developer, at a fraction of the cost of a bootcamp. Start with the front-end by learning HTML, CSS, and JavaScript. Then, master the back-end and APIs to round out your full-stack skills.</p>
			</div>
			<div>
				<h3 className="font-semibold hover:bg-yellow-400 rounded-md text-2xl">Graphics Design</h3>
				<p className="mt-1 dark:text-gray-400">Graphic Design courses are primarily skill-based courses. The candidates who have hopes and aspirations to become Graphic Designers can enroll in these courses after 10+2, or after graduation. Graphic Designing includes logo creation, designing visuals, illustration and anything that is a part of visual communications. On completion of a Graphic Design course, one can secure a job as a Graphic Designer, Picture Editor, Design Manager, Teacher/ Lecturer, etc.</p>
			</div>
			<div>
				<h3 className="font-semibold hover:bg-lime-600 rounded-md text-2xl">Game Development</h3>
				<p className="mt-1 dark:text-gray-400">There’s a gamer in all of us — whether you play on your phone, a console, a computer, or a virtual reality rig. And it takes people, either individually or in large teams, to bring these great experiences to life. Learn the foundations of Game Development and create your very own video game.</p>
			</div>
			<div>
				<h3 className="font-semibold hover:bg-blue-600 rounded-md text-2xl">Cyber Security</h3>
				<p className="mt-1 dark:text-gray-400">Cybersecurity job growth is accelerating, as is the demand for highly skilled cybersecurity professionals. Designed for today’s busy professionals, our courses and programs explain the principles and technologies that underlie cybersecurity. Now is the time to strengthen your cybersecurity knowledge and set yourself apart.</p>
			</div>
		</div>
	</div>
</section>
    );
};

export default FAQ;