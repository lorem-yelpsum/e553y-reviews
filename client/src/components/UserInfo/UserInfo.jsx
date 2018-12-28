const React = require('react');
const styles = require('./styles.css');

const UserInfo = ({userInfo}) => {
    let {name, city, photo, reviewCount, photoCount, elite} = userInfo;

    return (
        <div className={styles.userInfo}>
            <div className={styles.avatarPanel}>
                <img className={styles.avatar} src={photo} alt={name + '\'s avatar'} />
            </div>

            <div className={styles.detailsPanel}>
                <ul className={styles.details}>
                    <li className={styles.userName}>{name}</li>
                    <li className={styles.city}>{city}</li>
                    <li className={styles.stats}>
                        <span className={styles.starIcon}></span> 
                        <b>{reviewCount}</b>
                        &nbsp;reviews
                    </li>
                    <li className={styles.stats}>
                        <span className={styles.cameraIcon}></span> 
                        <b>{photoCount}</b>
                        &nbsp; photos
                    </li>
                </ul>
                
            </div>
        </div>
    )

}

export default UserInfo;