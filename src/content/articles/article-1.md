---
title: Next15 is here & its faster than ever!
desc: A deep dive into all the new features alongside a new compiler.
date: "2024-5-29"
thumbnail: "/images/article-1/thumbnail.png"
category: guide
published: true
tags:
  [
    { title: "nextjs", bgColor: "bg-slate-100", fgColor: "text-slate-800" },
    { title: "javascript", bgColor: "bg-yellow-300", fgColor: "text-slate-800" }
  ]
---

<script>
  import TOC from "$lib/components/shared/toc.svelte";
  import Link from "$lib/components/shared/link.svelte"
  import Heading from "$lib/components/shared/heading.svelte"
  import CodeSpan from "$lib/components/shared/codespan.svelte"
  
  import Warning from "$lib/components/shared/blocks/warning.svelte"
  import Success from "$lib/components/shared/blocks/success.svelte"
  import Error from "$lib/components/shared/blocks/Error.svelte"
  import Info from "$lib/components/shared/blocks/Info.svelte"

</script>

<TOC>
Here is all that you will find in this article as we await the global launch of Next.js 15:

- Support for the <Link title="React 19" url="#react19RC" /> RC.
- <CodeSpan title="fetch" /> requests, <CodeSpan title="GET" /> route handlers and <Link url="#caching" title="Caching" />.
- Experimental <Link title="Partial Prehydration" url="#partial-prerendering" />.
- <Link title="New API" url="#next-after" /> to execute code after a response.
- Enable <Link title="Turbopack" url="#turbopack" /> in local development.
- New <Link title="config options" url="#new-config" /> for App/Pages Router.
- <Link title="Summary" url="#summary" /> of the article.
- Read at <Link title="Medium" url="https://medium.com/@codesimplifier/next-js-15-is-going-to-be-faster-than-ever-1373ccbe88e2" />

</TOC>

<Heading title="REACT19 (RC) SUPPORT IS NOW AVAILABLE" />

React 19 Release Candidate (RC) introduces several new features and improvements aimed at enhancing performance, developer experience, and overall application stability. Key updates include __concurrent rendering__, which allows React to prepare multiple versions of the UI simultaneously, reducing blocking and improving responsiveness. Server components have been __refined__ for better server-side rendering and faster initial loads.
<br />

Next.js 15 RC now supports React 19 RC, which includes new features for both the client and server like __Actions__.

<Warning>

The React Compiler is currently only possible to use in Next.js through a Babel plugin, which could result in slower build times.

</Warning>

<Error>

The React Compiler is currently only possible to use in Next.js through a Babel plugin, which could result in slower build times.

</Error>

<Success>

The React Compiler is currently only possible to use in Next.js through a Babel plugin, which could result in slower build times.

</Success>

<Info>

The React Compiler is currently only possible to use in Next.js through a Babel plugin, which could result in slower build times.

</Info>