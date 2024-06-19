import type { Course } from "$lib";
import { json } from "@sveltejs/kit";

export const prerender = true;

async function getCourses() {
	let courses: Course[] = [];

	const paths = import.meta.glob("/src/content/courses/*/*.md", { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split("/").at(-2)?.replace(".md", "") + "/intro";

		if (file && typeof file === "object" && "metadata" in file && slug) {
			const metadata = file.metadata as Omit<Course, "slug">;
			const course = { ...metadata, slug } satisfies Course;

			course.published && courses.push(course);
		}
	}

	courses = courses.sort((p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime());

	return courses;
}

export async function GET() {
	const courses = await getCourses();
	return json(courses);
}
