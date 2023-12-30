import { dev } from '$app/environment';
// import { error } from '@sveltejs/kit';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load() {
    // 'Articles' would come from a network/db call IRL
    return {
        articles: [
            {slug: 'code-offline', title: 'Learning to Code Offline', subtitle: 'The web is a dangerous place for coding newbies; try starting out with a book.'},
            {slug: 'play-with-old-tech', title: 'Why Play With the Old Stuff?', subtitle: 'Learning jQuery will show you how we got to React - and where we\'re headed next.'}
        ]
    }
    // error(404, 'Not found');
}