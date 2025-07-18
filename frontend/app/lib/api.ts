const revalidationTime = 1000 // seconds
const STRAPI_URL = process.env.STRAPI_URL || 'http://strapi:1337';

// https://docs.strapi.io/cms/api/rest
// Helper funciton for fetching public content in strapi
async function fetchStrapi(path: string) {
	const res = await fetch(`${STRAPI_URL}${path}`, {
		headers: {
			'Content-Type': 'application/json',
		},
		next: {revalidate: revalidationTime}
	});

	if (!res.ok) {
		throw new Error(`Failed to fetch ${path}: ${res.status} ${res.statusText}`);
	}

	const json = await res.json();
	return json.data;
}

// Fetch all blogs 
export async function getBlogs() {
  return fetchStrapi('/api/blogs?fields[0]=title&fields[1]=description&populate[cover]=*&populate[tags]=*');
}

// Fetch blog with documentID
export async function getBlogByDocId(docId: string) {
	return fetchStrapi(`/api/blog/${docId}`);
}

// Get latest blogs 
export async function getLatestBlogs(limit: number) {
	return fetchStrapi(`/api/blogs?sort=createdAt:desc&pagination[limit]=${limit}`);
}

// Fetch all projects
export async function getProjects() {
	return fetchStrapi('/api/projects?fields[0]=title&fields[1]=description&populate[cover]=*&populate[tags]=*');
}

// Fetch project with documentID
export async function getProjectByDocId(docId: string) {
	return fetchStrapi(`/api/project/${docId}`);
}
