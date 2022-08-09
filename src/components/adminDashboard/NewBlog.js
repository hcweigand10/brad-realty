import React, {useState} from 'react'
import moment from "moment"

const NewBlog = ({postNewBlog}) => {
    const [paragraphGroups, setParagraphGroups] = useState([<ParagraphForm index={1} key={1}/>])
    let numParagraphs = 1;

    const deleteParagraph = (e) => {
        e.preventDefault()
        numParagraphs--
        setParagraphGroups(paragraphGroups.splice(0,paragraphGroups.length-1))
    }

    const addParagraph = (e) => {
        e.preventDefault()
        numParagraphs++
        setParagraphGroups([...paragraphGroups, <ParagraphForm index={numParagraphs} key={numParagraphs}/>])
    }

    const handleBlogSubmit = (e) => {
        e.preventDefault()
        const blogObj = {
            title: document.getElementById("FormControlInputTitle").value,
            subtitle: document.getElementById("FormControlInputSubtitle").value,
            thumbnail: document.getElementById("FormControlInputThumbnail").value,
            date: moment().format('MMMM Do, YYYY')
        }
        const paragraphs = []
        for (let i = 0; i < paragraphs.length; i++) {
            const paragraphObj = {
                paragraph_title: document.getElementById(`paragraph-title-${i}`).value,
                content: document.getElementById(`paragraph-content-${i}`).value,
                image_url: document.getElementById(`paragraph-thumbnail-${i}`).value,
                blogId: null
            }
            paragraphs.push(paragraphObj)
        }
        postNewBlog(blogObj, paragraphs)
    }
    

    return (
        <form id='new-blog-form' onSubmit={handleBlogSubmit}>
  <div class="form-group">
    <label htmlFor="FormControlInputTitle">Blog Title</label>
    <input type="text" class="form-control" id="FormControlInputTitle"/>
  </div>
  <div class="form-group">
    <label htmlFor="FormControlInputSubtitle">Subtitle</label>
    <input type="text" class="form-control" id="FormControlInputSubtitle"/>
  </div>
  <div class="form-group">
    <label htmlFor="FormControlInputThumbnail">Thumbnail URL</label>
    <input type="text" class="form-control" id="FormControlInputThumbnail"/>
  </div>
  
  {paragraphGroups}
  <button className='btn btn-secondary' onClick={addParagraph}>Add Paragraph</button>
  <button className='btn btn-danger' onClick={deleteParagraph}>Delete Paragraph</button>
  <button className='btn btn-primary' type='submit'>Post Blog</button>
</form>
    )
}

const ParagraphForm = ({index}) => {
    return (
<div id={`form-group-${index}`}>
    <div className='form-group'>
        <label htmlFor={`paragraph-title-${index}`}>Paragraph Title</label>
        <input type="text" class="form-control" id={`paragraph-title-${index}`}/>
    </div>
    <div className='form-group'>
        <label htmlFor={`paragraph-thumbnail-${index}`}>Paragraph Thumbnail URL</label>
        <input type="text" class="form-control" id={`paragraph-thumbnail-${index}`}/>
    </div>
    <div className='form-group'>
        <label htmlFor={`paragraph-content-${index}`}>Paragraph Content</label>
        <textarea class="form-control" id={`paragraph-content-${index}`} rows="3"></textarea>
    </div>
  </div>
    )
}

export default NewBlog