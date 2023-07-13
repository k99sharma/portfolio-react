/**
 * Request wrapper generic function
 */
export async function request<TResponse>(
    url: string, 
    config: RequestInit={}
    ): Promise<TResponse>{
    try {
        const res = await fetch(url, config);
        return await res.json();
    } catch (err) {
        console.error(err);
        return { blogs: [], error: false };
    }
}