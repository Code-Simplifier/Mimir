import type { Chapter } from "$lib";
import { json } from "@sveltejs/kit";

export const prerender = true;

async function getChapters() {
	let chapters: Chapter[] = [];

	const paths = import.meta.glob("/src/content/courses/*/chapters/*.md", { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug =
			path.split("/").at(-3)?.replace(".md", "") + "/" + path.split("/").at(-1)?.replace(".md", "");

		if (file && typeof file === "object" && "metadata" in file && slug) {
			const metadata = file.metadata as Omit<Chapter, "slug">;
			const chapter = { ...metadata, slug } satisfies Chapter;

			chapter.published && chapters.push(chapter);
		}
	}

	chapters = chapters.sort((p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime());

	return chapters;
}

export async function GET() {
	const chapters = await getChapters();
	return json(chapters);
}
