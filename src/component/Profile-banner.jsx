import './profile-banner.css'
import resume from '../assets/resume.png'
import githubIcon from '../assets/github-icon.png'
import coffeeBar from '../assets/caffeine-bar.png'
import profile from '../assets/dav_pfp.png'

const ProfileBanner = () => {
    return (
        <div className="banner-wrapper">
            <div className="profile-picture">
                <img src={profile} className="pfp"/>
            </div>
            <div className="text-field">
                <p>Name: Jihoon Choi</p>
                <p>Role: Frontend/Backend</p>
                <div className="link-wrapper">
                <p>Resume:{' '}
                    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <img 
                        src={resume}
                        alt="resume"
                        className="pixel-icon"
                        />
                    </a>
                </p>
                <p>Github:{' '} 
                    <a href="https://github.com/JihoonCho1" target="_blank" rel="noopener noreferrer">
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