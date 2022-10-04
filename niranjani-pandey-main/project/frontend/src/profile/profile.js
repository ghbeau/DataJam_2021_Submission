import React from 'react';

import './profile.css';

class Profile extends React.Component {
    render() {
        return <div id='profile'>
            <h1>Natasha Grace Olson</h1>
            <div id='profileData'>
                <img src="./profileStockPhoto.jpg" id='profileImage' alt='your profile photo' />
                <div id='fieldsWrapper'>
                    <div className='profileField'>
                        <h2 className='profileFieldTitle'>Title</h2>
                        <p className='profileFieldValue'>Event Organizer</p>
                    </div>
                    <div className='profileField'>
                        <h2 className='profileFieldTitle'>Organization</h2>
                        <p className='profileFieldValue'>Students Against Exploitation</p>
                    </div>
                    <div className='profileField'>
                        <h2 className='profileFieldTitle'>Email</h2>
                        <p className='profileFieldValue'>demoemail@gmail.com</p>
                    </div>
                    <div className='profileField'>
                        <h2 className='profileFieldTitle'>Phone</h2>
                        <p className='profileFieldValue'>123-456-7890</p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Profile;