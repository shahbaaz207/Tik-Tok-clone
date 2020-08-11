import React from 'react'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from  'react-ticker'

const VideoFooter = ({channel,description,song}) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>{channel}</h3>
                <p className='des'>{description}</p>
                <MusicNoteIcon className="videoFooter_icon"/>
                <Ticker mode="smooth">
                    {({index})=>(
                        <div className="ticker">
                        <h5>{song}</h5>
                        </div>
                    )}
                </Ticker>
            </div>
            <div className="videoFoote"></div>
            <img className='videoFooter_record' src='https://static.thenounproject.com/png/934821-200.png' alt="" />
        </div>
    )
}


export default VideoFooter


