import type { Chapter } from "$lib";
import { error } from "@sveltejs/kit";

export async function load({ params, fetch }) {
	try {
		const response = await fetch("/api/courses/chapters");
		const data: Chapter[] = await response.json();

		const chapters = data.filter((chapter) => chapter.slug.split("/").at(-2) === params.slug);

		const intro = await import(`../../../../content/courses/${params.slug}/_index.md`);

		return {
			content: intro.default,
			metadata: intro.metadata,
			slug: params.slug,
			chapters: chapters
		};
	} catch (e) {
		throw error(404);
	}
}
