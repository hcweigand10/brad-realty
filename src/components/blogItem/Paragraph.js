import React from 'react'

const Paragraph = ({para, index}) => {
    const odd = (index%2===0)

    return (
        <div className='my-5 p-1' style={{fontFamily: "Compass Sans"}}>
            <h2 className='text-center mb-4' style={{fontWeight: "bold"}}>{para.paragraph_title}</h2>
            {para.image_url ? (
                <div className='align-items-center col-md-10 col-lg-8 mx-auto'>
                    {odd ? (
                        <div className='row justify-content-center'>
                            <img className='col-md-5 col-lg-3' src={para.image_url} alt="paragraph pic"/>
                            <p className='col-md-7 col-lg-7'>{para.content}</p>
                        </div>
                    ):(
                        <div className='row justify-content-center'>
                            <p className='col-md-7 col-lg-7'>{para.content}</p>
                            <img className='col-md-5 col-lg-3' src={para.image_url} alt="paragraph pic"/>
                        </div>
                    )}
                </div>
            ):(
                <div className='col-md-10 col-lg-8 mx-auto'>
                    <p className='col-12 mx-auto'>{para.content}</p>
                </div>
            )}
        </div>
    )
}

export default Paragraph