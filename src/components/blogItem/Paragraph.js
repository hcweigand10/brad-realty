import React from 'react'

const Paragraph = ({para, index}) => {
    const odd = (index%2===0)

    return (
        <div className='my-5' style={{fontFamily: "Compass Sans"}}>
            <h2 className='text-center mb-4' style={{fontWeight: "bold"}}>{para.paragraph_title}</h2>
            {para.image_url ? (
                <div className='align-items-center'>
                    {odd ? (
                        <div className='row justify-content-center'>
                            <img className='col-4' src={para.image_url} alt="paragraph pic"/>
                            <p className='col-6'>{para.content}</p>
                        </div>
                    ):(
                        <div className='row justify-content-center'>
                            <p className='col-6'>{para.content}</p>
                            <img className='col-4' src={para.image_url} alt="paragraph pic"/>
                        </div>
                    )}
                </div>
            ):(
                <div className=''>
                    <p className='col-10 mx-auto'>{para.content}</p>
                </div>
            )}
        </div>
    )
}

export default Paragraph