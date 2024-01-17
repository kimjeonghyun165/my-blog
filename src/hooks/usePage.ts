export function usePage(posts: any, postsPerPage: number, currentPage: number) {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    return posts.slice(startIndex, endIndex);
}
