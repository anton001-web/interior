import React, {useEffect, useState} from 'react'
import {articleTags} from "../../data/blogsData";

const ArticlesItem = ({article}) => {
    const textRef = React.createRef()
    const [accordionOpen, setAccordionOpen] = useState(false)

    const accordionToggle = () => {
        setAccordionOpen(!accordionOpen)
    }

    let totalText = article.articleText

    const textEdit = () => {

        articleTags.forEach(tag => {
            totalText = totalText.replaceAll(`${tag.tag}`, `<span id=${tag.id}>${tag.tag}</span>`)
        })

        textRef.current.insertAdjacentHTML('beforeend', totalText)
    }


    useEffect(() => {
        textEdit()
    }, [])

    return (
        <div className='article'>
            <h3 className='article-title'>{article.articleTitle}</h3>
            <div className='article-info'>
                <span className='article-date'>
                    {article.articleDate}
                </span>
                    <span className='article-views'>
                        <img src="./assets/images/eyeIco.png" alt=""/>
                        {article.aritcleViews}
                    </span>
            </div>
            <div className='article-img__block'>
                <img src={article.articleImg} alt="img" className='article-img'/>
            </div>
            <div className='article-text__wrap'>
                <div className={`article-text__block ${accordionOpen && 'accordion-active'}`}>
                    <p className='article-text' ref={textRef}></p>
                </div>
                <button className='article-accordion-toggle__btn' onClick={accordionToggle}>{accordionOpen ? 'Скрыть' : 'Читать полностью'}</button>
            </div>
        </div>
    )
}

export default ArticlesItem