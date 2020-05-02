import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { asyncConnect } from 'redux-connect';
import { bindActionCreators, compose } from 'redux';
import * as userActionCreators from '../../services/user/userActionCreators';
import logo from '../../static/logo.png';
import ration from '../../static/ration.png';
import hunger from '../../static/hunger.png';
import shelter from '../../static/shelter.png';
import epass from '../../static/epass.png';
import migrant from '../../static/migrant.png';
import senior from '../../static/senior.png';
import transport from '../../static/transport.png';
import donate from '../../static/donate.svg';
import yt from '../../static/yt.png';
import wa from '../../static/wa.png';
import feedback from '../../static/feedback.svg';
import adobe from '../../static/adobe.svg';
import delhigovt from '../../static/delhigovt.svg';

class LandingPage extends React.Component {
  componentDidMount() {
    const { userActions } = this.props;
  }

  render() {
    return (
      <div>
        <header>
          <div>
            <ul id="header--left">
              <a href="/"><li><img className="logo" src={logo} /></li></a>
              <li></li>
              <li id="selected" style={{color: '#234D8C'}}>Lockdown Services</li>
              <li></li>
              <li onClick={() => {this.context.router.push('/covid-delhi-info/')}}>Information</li>
              <li></li>
              <li onClick={() => {this.context.router.push('/covid-delhi-data/')}}>Data</li>
              <li></li>
            </ul>
          </div>
          <div id="header--right">
          </div>
        </header>
        <div>
          <main>
            <img className="logo" src={logo} style={{display: 'none'}} />
            <h1>Delhi Government Lockdown Services</h1>
            <div id="services">
              <a href="https://ration.jantasamvad.org/ration/"><div className="services--item" style={{backgroundImage: 'url('+ration+')'}}>
                Apply for Ration
              </div></a>
              <a href="https://www.google.co.in/maps/d/embed?mid=1iyesu48igcUWqkPS7J3TKMO_fGSqDvjU"><div id="services-two" className="services--item" style={{backgroundImage: 'url('+hunger+')'}}>
                Find a Hunger Relief Center
              </div></a>
              <a href="https://www.google.co.in/maps/d/embed?mid=1Bb7-aFko_z2RVe_1feVbSFvTK_ucVHyY"><div id="services-three" className="services--item" style={{backgroundImage: 'url('+shelter+')'}}>
                Find a Shelter
              </div></a>
              <a href="https://epass.jantasamvad.org/epass/init/"><div id="services-four" className="services--item" style={{backgroundImage: 'url('+epass+')'}}>
                Get a Curfew e-Pass for mobility
              </div></a>
              <a href="http://tte.delhigovt.nic.in/wps/wcm/connect/doit_dbcwwb/DBCWWB/home/"><div id="services-five" className="services--item" style={{backgroundImage: 'url('+migrant+')'}}>
                Compensation for Migrant Labour
              </div></a>
              <a href="http://www.socialwelfare.delhigovt.nic.in/home/social-welfare-department"><div id="services-six" className="services--item" style={{backgroundImage: 'url('+senior+')'}}>
                Pension for Senior Citizens, Disabled &amp; Widows
              </div></a>
              <a href="http://pucc.delhi.gov.in/cvfa/"><div id="services-seven" className="services--item" style={{backgroundImage: 'url('+transport+')'}}>
                Compensation for Transport Providers
              </div></a>
            </div>
            {/* link */}
            <div id="downloadlist--btn"><img src={adobe} style={{marginRight: '8px'}} />Download list of shelters, ration centers and hunger relief centers</div>
            {/* link */}
          </main>
          <aside style={{width: '200px'}} />
          <footer>
            {/* link */}
            <div id="footer--actions">
              <div className="footercta" style={{background: '#EC4B4B', color: 'white'}}><img src={donate} style={{marginRight: '8px', height: '20px', fontWeight: 600}} />Donate to CM/LG Relief Fund </div>
              <div className="footercta"><img src={wa} style={{marginRight: '8px', height: '24px'}} />Delhi Govt. Corona Helpline: 8800007722</div>
              <div className="footercta"><img src={yt} style={{marginRight: '8px', height: '18px'}} />Delhi Govt. YouTube Channel </div>
            </div>
            {/* link */}
            <img id="footerlogo" src={delhigovt} />
            <div id="footerlinks">
              {/* link */}
              <div>Privacy Policy</div>
              <div>About</div>
              {/* link */}
            </div>
          </footer>
          <div id="feedback--btn"><img src={feedback} style={{marginRight: '8px', height: '20px'}} />Got Feedback?</div>
        </div>
      </div>

    );
  }
}

LandingPage.propTypes = {
  userActions: PropTypes.object.isRequired,
};

const beforeRouteEnter = [{
  promise: ({ store: { dispatch, getState } }) => {
    const promise = null;
    return __BROWSER__ ? null : promise;
  },
}];

const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(userActionCreators, dispatch),
});

export default compose(
  asyncConnect(beforeRouteEnter, null, mapDispatchToProps),
)(LandingPage);
