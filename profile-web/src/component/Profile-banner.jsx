import './profile-banner.css'
import resume from '../assets/resume.png'
import githubIcon from '../assets/github-icon.png'

const ProfileBanner = () => {
    return (
        <div className="banner-wrapper">
            <div className="text-field">
                <p>Name: Jihoon Choi</p>
                <p>Role: Frontend/Backend</p>
                <div className="link-wrapper">
                <p>Resume:
                    <img 
                      src={resume}
                      alt="resume"
                      className="pixel-icon"
                    />
                    
                </p>
                <p>Github:{' '} 
                    <a href="https://github.com/JihoonCho1">
                        <img 
                        src={githubIcon}
                        alt="Github"
                        className="pixel-icon"
                        />
                    </a>
                </p>
                
                </div>
            </div>
        </div>
    )
}

export default ProfileBanner