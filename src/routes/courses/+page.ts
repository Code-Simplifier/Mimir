import type { Course } from "$lib";

export async function load({ fetch }) {
	const response = await fetch("/api/courses");
	const courses: Course[] = await response.json();

	return { courses };
}
