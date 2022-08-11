import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"

const ReviewStars = ({rating}) => {

    return (
        <>
            <FontAwesomeIcon className={rating > 0 ? "blue-star" : "white-star"} icon={faStar} />
            <FontAwesomeIcon className={rating > 1 ? "blue-star" : "white-star"} icon={faStar} />
            <FontAwesomeIcon className={rating > 2 ? "blue-star" : "white-star"} icon={faStar} />
            <FontAwesomeIcon className={rating > 3 ? "blue-star" : "white-star"} icon={faStar} />
            <FontAwesomeIcon className={rating > 4 ? "blue-star" : "white-star"} icon={faStar} />
        </>
    )
}

export default ReviewStars