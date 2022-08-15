import React, {useState} from 'react'
import moment from "moment"

const NewBlog = ({postNewBlog}) => {
    const [paragraphGroups, setParagraphGroups] = useState([<ParagraphForm index={1} key={1}/>])
    const [numParagraphs, setNumParagraphs] = useState(1);

    const deleteParagraph = (e) => {
        e.preventDefault()
        setParagraphGroups(paragraphGroups.splice(0,paragraphGroups.length-1))
        setNumParagraphs(numParagraphs-1)
    }

    const addParagraph = (e) => {
        e.preventDefault()
        setParagraphGroups([...paragraphGroups, <ParagraphForm index={numParagraphs+1} key={numParagraphs+1}/>])
        setNumParagraphs(numParagraphs+1)
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
        for (let i = 1; i < paragraphGroups.length+1; i++) {
            const paragraphObj = {
                paragraph_title: document.getElementById(`paragraph-title-${i}`).value,
                content: document.getElementById(`paragraph-content-${i}`).value,
                image_url: document.getElementById(`paragraph-thumbnail-${i}`).value,
                blogId: null
            }
            console.log(paragraphObj)
            paragraphs.push(paragraphObj)
        }
        postNewBlog(blogObj, paragraphs)
    }
    

    return (
        <form className='my-4' id='new-blog-form' onSubmit={handleBlogSubmit}>
            <h4>Blog Info</h4>
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
        <div className='my-2 py-2' id={`form-group-${index}`}>
    <h4>Paragraph #{index}</h4>
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