import "./Video.css"
import video from './html.mp4'

const Video = () => {
    return (
        <div className="video">
            <video src={video} width="100%" controls></video>
        </div>
    )
}

export default Video
