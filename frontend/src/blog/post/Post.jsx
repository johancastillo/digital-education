
const Post = ({image, title, description, date}) => {
    return (
        <div class="card" style={{ width: '100%' }}>
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
                
                <h5 class="card-title">
                    {title}
                </h5>


                <p class="card-text">
                    { description ? description : "" }
                </p>

                <div className="mt-2 d-flex justify-content-between align-items-center">

                    <div className="d-flex justify-content-cente align-items-center">
                        <img width="40px" style={{ borderRadius: '50%' }} src="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=ApBaKpppVx0AX_-C2gF&tp=1&oh=efdfd7a1484b78234f4639e102c20ad2&oe=602C6874" alt="" />
                        
                        <span className="mx-2">
                            
                        </span>
                    </div>

                    <div>
                        <span className="icon icon-calendar mx-1"></span>
                        <span>
                            {date}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Post
