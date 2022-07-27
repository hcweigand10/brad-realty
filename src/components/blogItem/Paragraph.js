import React from 'react'

const Paragraph = ({para, index}) => {

    const imgSrc = para.imgSrc
    const text = para.text
    const title = para.title
    const odd = (index%2===0)

    return (
        <div className='my-5'>
            <h1 className='text-center mb-4' style={{fontWeight: "bold"}}>{title}</h1>
            {imgSrc ? (
                <div className='align-items-center'>
                    {odd ? (
                        <div className='row justify-content-center'>
                            <img className='col-4' src={imgSrc} alt="paragraph pic"/>
                            <p className='col-6'>{text}</p>
                        </div>
                    ):(
                        <div className='row justify-content-center'>
                            <p className='col-6'>{text}</p>
                            <img className='col-4' src={imgSrc} alt="paragraph pic"/>
                        </div>
                    )}
                </div>
            ):(
                <div className=''>
                    <p className='col-10 mx-auto'>{text}</p>
                </div>
            )}
        </div>
    )
}

export default Paragraph