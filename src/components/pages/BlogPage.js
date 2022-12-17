import React, {useEffect} from 'react'
import ArticlesItem from "../pagesComponents/ArticlesItem";
import {articlesList, articleTags} from "../../data/blogsData";


const BlogPage = () => {

    return (
        <section className='blog-page'>
            <div className="container">
                <div className="blog-page__blog-content">
                    <h1 className='blog-page__title-clone title-black'>Блог</h1>
                    <div className='blog-page__blogs-list__block'>
                        <h1 className='blog-page__title title-black'>Блог</h1>
                        <div className='blog-page__blogs-list'>
                            {
                                articlesList.map((article, ind) => (
                                    <ArticlesItem key={ind} article={article} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='blog__links-sideBar'>
                        <ul className='blog-links__list'>
                            {
                                articleTags.map((tag, ind) => (
                                    <div className='article-tagLink__wrap'>
                                        <a className='article-tagLink' href={`blog-page/#${tag.id}`}>{tag.tag}</a>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogPage