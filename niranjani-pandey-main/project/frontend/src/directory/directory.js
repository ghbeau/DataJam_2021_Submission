import React from 'react';
import Papa from 'papaparse'

import './directory.css';

const startingData = `Name,Province,City,Description,Website,Crisis Hotline,Type,,
Assaulted Women’s Helpline,Ontario,Toronto,"Provides anonymous and confidential crisis counseling, informational and emotional support to women. (Toronto, ON)
",http://www.awhl.org/,"(Toll Free)1-866-863-0511, (Toll Free TTY): 1-866-863-7868",,,
Talk for Healing,Ontario,NA,"Talk4Healing is a helpline available to all Aboriginal women living in urban, rural and remote communities, both on and off reserve",,1-888-200-9997,,Hour Start,Hour End
Talk for Healing,Ontario,Thunder Bay,"Talk4Healing is a helpline available to all Aboriginal women living in urban, rural and remote communities, both on and off reserve",http://www.talk4healing.com/,807-346-HELP (4357),,,
Fem'aide,Ontario,NA,Provincial helpline for francophone women in Ontario dealing with violence,http://www.femaide.ca/,"1-877-336-2433, 1-866-860-7082 (TTY)",,,
Battered Women’s Support Services,BC,Vancouver,"Provides education, advocacy and support services to assist women",http://www.bwss.org/,"604-687-1867, 1-855-687-1868 (Toll Free)",,,
Greater Vancouver Crisis Line,BC,,"Non-profit organizing that provides emotional support to youth, adults and seniors in distress, click the link for more helplines and information. ",https://crisiscentre.bc.ca/contact-us/,1-866-872-0113 (TTY),,,
Domestic Violence Helpline (Victim Link),BC,,Helpline designed to provide information and support to those experiencing domestic violence.,http://www.domesticviolencebc.ca/,1-800-563-0808.,,,
Surrey Women’s Center,BC,Surrey,"Offer a range of crisis services to victims of domestic violence, sexual assault, child abuse and other forms of family violence. 24/7 helpline services provided.",http://surreywomenscentre.ca/,,,,
WAVAW,BC,,Works to end violence against women through various support programs and services including an emotional and informational support 24-hour crisis line,http://www.wavaw.ca/,"604-255-6344, 1-877-392-7583 (Toll Free)",,,
North Shore Crisis Services Society,BC,North Vancouver,,http://nscss.net/,604-987-3374,,,
BC Coalition to Eliminate Abuse of Seniors,BC,Vancouver,Helpline providing emotional and legal information and referral for seniors experiencing abuse.,"http://bcceas.ca/
","604-437-1940, (TTY) 604-437-1940, (Toll Free) 1-866-437-1940",,08 00,20 00
Children of the Street Society,BC,,,https://www.childrenofthestreet.com/youth,604-666-6779 (TEXT),,,
Covenant House Vancouver,BC,Vancouver,Covenant House Vancouver offers a clear exit from life on the street to homeless youth.,https://www.covenanthousebc.org/get-help/,1-877-685-7474,,,
Deborah’s Gate,BC,,,https://www.illuminateht.com/connect/, 1-855-332-4283,,,
Migrant Workers Centre,BC,,Migrant Workers Centre is a non-profit organization dedicated to legal advocacy for migrant workers in BC.,www.mwcbc.ca,1-888-669-4482,,,
Onyx Program,BC,,"Onyx is a free, confidential, voluntary support service for youth aged 13-18, of all genders and all orientations, who are, or are at risk of, being sexually exploited.",https://www.plea.ca/youth-programs/youth-outreach/onyx/,1-877-411-7532,,,
VictimLinkBC,BC,,"VictimLinkBC is a toll-free, confidential, multilingual service available across B.C. and the Yukon 24 hours a day, 7 days a week and can be accessed by calling or texting 1-800-563-0808 or sending an email to VictimLinkBC@bc211.ca. It provides information and referral services to all victims of crime and immediate crisis support to victims of family and sexual violence, including victims of human trafficking exploited for labour or sexual services.",https://www2.gov.bc.ca/gov/content/justice/criminal-justice/victims-of-crime/victimlinkbc,1-800-563-0808,(TEXT or CALL),,'`

class Directory extends React.Component {
    constructor(props) {
        super()
        console.log('start')
        const ngoData = Papa.parse(startingData, {delimiter: ',', header: true}).data
        console.log(ngoData)

        this.state = {
            ngos: ngoData,
        }
    }

    render() {
        return <div id='directory'>
            <h1>Help Resources</h1>
            <div id='directoryWrapper'>
                {this.state.ngos.map(ngoData =>
                    <div className='ngo'>
                        <div className='ngoDataWrapper'>
                            <a href={ngoData.Website} className='ngoTitle'>{ngoData.Name}</a>
                            <div className='ngoSubtitle'>
                                <p className='ngoSubtitleText'>{ngoData.City}, {ngoData.Province}</p>
                                <p className='divider ngoSubtitleText'>|</p>
                                <p className='ngoSubtitleText'>{ngoData['Crisis Hotline']}</p>
                            </div>
                            <p className='ngoDescription'>{ngoData.Description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    }
}

export default Directory;
