import architCardImage from '../architCardImage.jpg'

export default function Info() {
    return (
        <div>
            <img src={architCardImage} alt="Archit's DP" style={{
                width:'100%',
            }}/>
            <h1>Archit Garg</h1>
            <p className="title"> Frontend Developer</p>
            <p className="webaddress">brandarchit.com</p>
            <div className='infoButtons'>
                <a href="mailto:archit.g1998@gmail.com" 
                className="emailButton"
                target="_blank"
                rel="noreferrer">
                    <span>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/email-2091034-1767507.png" 
                        alt="Email logo" />
                        Email
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/imarchitgarg/" 
                className="linkedinButton"
                target="_blank"
                rel="noreferrer">
                    <span>
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                        alt="Linkedin logo" />
                    </span>
                    <span>
                        LinkedIn
                    </span>
                </a>
            </div>
        </div>  
    )
}