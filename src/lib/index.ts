export type Tags = {
	title: string;
	bgColor: string;
	fgColor: string;
};

export type Article = {
	title: string;
	slug: string;
	thumbnail: string;
	category: string;
	desc: string;
	date: string;
	published: boolean;
	tags: Tags[];
};

export type Course = {
	title: string;
	slug: string;
	thumbnail: string;
	date: string;
	published: boolean;
	chapters: number;
	price: "Free" | "Pro";
	level: "Beginner" | "Intermediate" | "Advanced";
};

export type Chapter = {
	id: number;
	title: string;
	slug: string;
	video: string;
	icon: string;
	desc: string;
	date: string;
	published: boolean;
};
