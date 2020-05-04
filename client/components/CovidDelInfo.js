import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { asyncConnect } from 'redux-connect';
import { bindActionCreators, compose } from 'redux';
import * as userActionCreators from '../services/user/userActionCreators';
import logo from '../static/logo.png';
import ration from '../static/ration.png';
import hunger from '../static/hunger.png';
import shelter from '../static/shelter.png';
import epass from '../static/epass.png';
import migrant from '../static/migrant.png';
import senior from '../static/senior.png';
import transport from '../static/transport.png';
import donate from '../static/donate.svg';
import yt from '../static/yt.png';
import wa from '../static/wa.png';
import feedback from '../static/feedback.svg';
import adobe from '../static/adobe.svg';
import delhigovt from '../static/delhigovt.svg';
import playbadge from '../static/playbadge.png'
import testing from '../static/testing.png';
import testing2 from '../static/testing2.png';
import map from '../static/map.png';
import mask from '../static/mask.png';
import gplay from '../static/gplay.svg';
import appstore from '../static/appstore.svg';

class CovidDelInfo extends React.Component {
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
              <li  onClick={() => {this.context.router.push('/')}} style={{color: '#234D8C'}}>Lockdown Services</li>
              <li></li>
              <li id="selected-info" style={{color: '#234D8C'}}>Information</li>
              <li></li>
              <li onClick={() => {this.context.router.push('/covid-delhi-data/')}}>Data</li>
              <li></li>
            </ul>
          </div>
          <div id="header--right">
          </div>
        </header>
        <main>
          <img className="logo" src={logo} style={{display: 'none'}} />
          <div className="maintitlebar">
            <h1>Information<br />About Corona</h1>
            <img src={delhigovt} height="65px" />
          </div>
          <div id="main--sections">
            <div id="symptoms">
              <div id="symptomsmain">
                <div id="symptoms--content">
                  Find out if you’re infected
                  <div id="test--btn">Take the test →</div>
                </div>
              </div>
              <div className="infogrid--item" style={{backgroundImage: 'url('+testing+')'}}>
                Apply for Ration
              </div>
              <div className="infogrid--item" style={{backgroundImage: 'url('+map+')', color: 'black'}}>
                Find a Hunger Relief Center
              </div>
              <div className="infogrid--item" style={{backgroundImage: 'url('+testing2+')'}}>
                Find a Shelter
              </div>
              <div className="infogrid--item" style={{backgroundImage: 'url('+mask+')', width: 'auto', height: '260px', gridColumn: '1/3'}} />
              <h3>Infographics<br />about Covid19 →</h3>
            </div>
            <aside>
              <div className="asideComponent">
                <h6>Downloads</h6>
                <div className="asideComponentItem"><img src={adobe} style={{marginRight: '8px'}} />List of COVID Health Services</div>
                <div className="asideComponentItem"><img src={adobe} style={{marginRight: '8px'}} />List of Containment Zones</div>
              </div>
              <div className="asideComponent" style={{marginBottom: '28px'}}>
                <h6>Other Links</h6>
                <div className="asideComponentItem" style={{color: '#878787'}}><img src={wa} style={{marginRight: '8px', height: '24px'}} />Delhi Govt. Corona Helpline 8800007722</div>
                <div className="asideComponentItem" style={{color: '#878787'}}><img src={yt} style={{marginRight: '8px', height: '18px'}} />List of hunger relief centers &amp; ration centers</div>
              </div>
              <div className="footercta" style={{background: '#EC4B4B', color: 'white'}}><img src={donate} style={{marginRight: '8px', height: '20px', fontWeight: 600}} />Donate to CM/LG Relief Fund </div>
              <div className="asideComponent">
                <h6 style={{borderBottom: 'none', paddingBottom: '5px'}}>Download Apps</h6>
                <div>
                  <img src={gplay} style={{marginRight: '6px'}} />
                  <img src={appstore} />
                </div>
              </div>
            </aside>
          </div>
        </main>
        <footer>
          <div id="footerlinks">
            {/* link */}
            <div>Privacy Policy</div>
            <div>About</div>
            {/* link */}
          </div>
        </footer>
        <div id="feedback--btn"><img src={feedback} style={{marginRight: '8px', height: '20px'}} />Got Feedback?</div>
      </div>
    );
  }
}

CovidDelInfo.propTypes = {
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
)(CovidDelInfo);
