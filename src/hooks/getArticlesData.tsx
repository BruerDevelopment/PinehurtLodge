
import fs from 'fs';
import path from 'path';
import { ElementType, useEffect } from 'react';
import dynamic, { LoaderComponent } from 'next/dynamic';
const env: "development" | "production" | "test" = "production"//process.env.NODE_ENV//
const Dir = "/area_guide/articles"
const postsDirectory = path.join(process.cwd(), '/src/data' + Dir);

export type ArticleMeta = Meta;
export const getArticlesData = getData;
export const getArticleContent = getContent;
export const getArticleMeta = getMeta;

type Meta = {
    id: string,
    ignore?:boolean,
    date: Date,
    title: string,
    type: string,
    visibility: "public" | "unlisted" | "private",
    isGroup: boolean,
    isHome: boolean,
    zoom:number,
    location:[number, number],
    cover: string,
    groupid: string,
    group:string
}

async function getData(subPostDir?: string, options?:{visibilityOverride:boolean}): Promise<Meta[]> {
    "use client";
    // Get file names under /area_guide_places
    let dir = subPostDir == undefined ? "" : subPostDir;
    let readPath = path.join(postsDirectory, dir);
    const fileNames = fs.readdirSync(readPath);
    let allPostsData:Meta[] = [];
    for (let i = 0; i < fileNames.length; i++) {
        const fileName = fileNames[i];
        let fullPath = path.join(readPath, fileName)
        if (fs.statSync(fullPath).isDirectory()) {
            let subposts: Meta[] = await getData(path.join(dir, fileName), options);
            
            allPostsData.push(...subposts)
            continue;
        }
        // Remove ".md" from file name to get id
        const id = path.join(dir, fileName).split("\\").join("/").replace(/\.md$/, '').replace(/\.mdx$/, '');
        // Read markdown file as jsx
        const library = await import(`@/data${Dir}/${id}.mdx`);
        const meta = library.Meta
        
        // Combine the data with the id
        let post:Meta  = {
            id,
            ...meta
        };
        allPostsData.push( post);

    }
    let places_data = allPostsData.map((post, i) => {
        let _id = post.id.split("/");
        if (_id[_id.length - 1] == "index") {
            _id = _id.slice(0, -1);
        }
        let id = _id.join("/");
        return {
            ...post,
            id,
        }
    });

    return places_data.filter(p=>p.ignore != true)

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

export async function getContent(article: string[]):Promise<ElementType> {
    let p = new Promise<LoaderComponent | undefined>((resolve, reject) => {
        try {

            import(`@/data${Dir}/${article.join("/")}.mdx`).then((component) => {
                return resolve(component)
            }).catch(() => {
                article.push("index")
                import(`@/data${Dir}/${article.join("/")}.mdx`).then((component) => {
                    return resolve(component)
                }).catch(() => {
                    return resolve(undefined)
                })
            })
        } catch (e) {
            return resolve(undefined)
        }
    })
    let loader = await p;
    if (loader == undefined) return ()=><></>;
    return dynamic(async ()=> loader);
}   
export async function getMeta(article: string[]): Promise < Meta | undefined> {
    let p = new Promise<Meta | undefined>((resolve, reject) => {
        try {
            import(`@/data${Dir}/${article.join("/")}.mdx`).then((library) => {
                return resolve(library.Meta)
            }).catch(() => {
                article.push("index")
                import(`@/data${Dir}/${article.join("/")}.mdx`).then((library) => {
                    return resolve(library.Meta)
                })
            })
        } catch (e) {
            return resolve(undefined)
        }
    })
    return await p;
}   