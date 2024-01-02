import { dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

/**
 * Pretends to get a blog post from a database
 * @param {String} slug The key used to look up the article
 */

function getPostFromDb(slug) {
    let articles = [
        {
            title: 'Learning to Code Offline', 
            subtitle: 'The web is a dangerous place for coding newbies; try starting out with a book.',
            updated: 'Dec 28, 2023',
            slug: ''
        },
        {
            title: 'Why Play With the Old Stuff?', 
            subtitle: 'Learning jQuery will show you how we got to React - and where we\'re headed next.',
            updated: 'Dec 27, 2023',
            slug: ''
        }
    ]

    return slug == "code-offline" ? articles[0] : articles[1]

}

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const post = await getPostFromDb(params.slug)
    post.slug = params.slug
    return post
}