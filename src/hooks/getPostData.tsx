
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useEffect } from 'react';
import dynamic, { LoaderComponent } from 'next/dynamic';
const env:"development" | "production" | "test" = "production"//process.env.NODE_ENV//
const postsDirectory = path.join(process.cwd(), '/src/posts');

export type PostMeta = {
    id: string,
    date: Date,
    title: string,
    visibility: "public" | "unlisted" | "private"
    description:string,
    readTime: string,
    cover: string,
    nextPost?:string,
    prevPost?:string,
}
export async function getPostData(subPostDir?: string, options?:{visibilityOverride:boolean}): Promise<PostMeta[]> {
    "use client";
    // Get file names under /posts
    let dir = subPostDir == undefined ? "" : subPostDir;
    let readPath = path.join(postsDirectory, dir);
    const fileNames = fs.readdirSync(readPath);
    let allPostsData:PostMeta[] = [];
    for (let i = 0; i < fileNames.length; i++) {
        const fileName = fileNames[i];
        let fullPath = path.join(readPath, fileName)
        if (fs.statSync(fullPath).isDirectory()) {
            let subposts: PostMeta[] = await getPostData(path.join(dir, fileName), options);
            
            allPostsData.push(...subposts)
            continue;
        }
        // Remove ".md" from file name to get id
        const id = path.join(dir, fileName).split("\\").join("/").replace(/\.md$/, '').replace(/\.mdx$/, '');
        // Read markdown file as jsx
        const library = await import(`@/posts/${id}.mdx`);
        const meta = library.Meta
        
        // Combine the data with the id
        let post:PostMeta  = {
            id,
            ...meta
        };
        allPostsData.push( post);

    }   
    let FilteredPosts = allPostsData
        //transform index page ids
        .map((post, i) => {
            let _id = post.id.split("/");
            if (_id[_id.length - 1] == "index") {
                _id = _id.slice(0, -1);
            }
            let id = _id.join("/");
            return {
                ...post,
                id,
            }
        })
        .filter((p) => {
            if (options?.visibilityOverride == true) return true;
            if(p.id.includes("/")) return false;//A sub page is unlisted in a list of posts / accessed by the index page
            if(env == "development") return true;
            if (p.visibility == undefined) return true;
            if (p.visibility == "public") return true;
            return false;
        })
        // Sort posts by date
        .sort((a, b) => {
            if (a.date < b.date) {
            return 1;
            } else {
            return -1;
            }
        })
    
    //These are split apart because it references the filtered posts
    return FilteredPosts
        //Map next post to data
        .map((post, i) => {
            let nextPost = FilteredPosts[i + 1];
            let prevPost = FilteredPosts[i - 1];
            if (nextPost == undefined && prevPost == undefined) return post;
            let nextPostID = nextPost != undefined ? nextPost.id : undefined;
            let prevPostID = prevPost != undefined ? prevPost.id : undefined;
            return {
                ...post,
                nextPost:nextPostID,
                prevPost:prevPostID
            }
        });
}

export async function getPostContent(article: string[]) {
    let p = new Promise<LoaderComponent>((resolve, reject) => {
        import(`@/posts/${article.join("/")}.mdx`).then((component) => {
            return resolve(component)
        }).catch(() => {
            article.push("index")
            import(`@/posts/${article.join("/")}.mdx`).then((component) => {
                return resolve(component)
            })
        })
    })
    return dynamic(async ()=> await p);
}   
export async function getPostMeta(article: string[]): Promise<PostMeta> {
    let p = new Promise<PostMeta>((resolve, reject) => {
        import(`@/posts/${article.join("/")}.mdx`).then((library) => {
            return resolve(library.Meta)
        }).catch(() => {
            article.push("index")
            import(`@/posts/${article.join("/")}.mdx`).then((library) => {
                return resolve(library.Meta)
            })
        })
    })
    return await p;
}   