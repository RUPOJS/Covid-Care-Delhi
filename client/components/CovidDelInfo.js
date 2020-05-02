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
            <ul id="header--right_content">
              <li><img id="playbtn" src={playbadge}/></li>
              <li><img id="delhigovt" src={delhigovt} /></li>
            </ul>
          </div>
        </header>
        <main>
          <h1>Information About Corona</h1>
          <div id="symptoms">
            <div id="symptoms--content">
              Find out if you’re infected
              <div id="test--btn">Take the test →</div>
            </div>
          </div>
          <div id="infogrid">
            <div className="infogrid--item" style={{backgroundImage: 'url('+testing+')'}}>
              Apply for Ration
            </div>
            <div className="infogrid--item" style={{backgroundImage: 'url('+map+')', color: 'black'}}>
              Find a Hunger Relief Center
            </div>
            <div className="infogrid--item" style={{backgroundImage: 'url('+testing2+')'}}>
              Find a Shelter
            </div>
            <div className="infogrid--item" style={{backgroundImage: 'url('+mask+')', width: '320px', height: '160px'}} />
            <div className="infogrid--item" style={{backgroundImage: 'url('+mask+')', width: '320px', height: '160px'}} />
            <div className="infogrid--item" style={{backgroundImage: 'url('+mask+')', width: '320px', height: '160px'}} />
          </div>
          {/* link */}
          <div id="downloadlist--btn"><img src={adobe} style={{marginRight: '8px'}} />Download list of COVID Health Services and Containment Zones</div>
          {/* link */}
          <h3 style={{marginTop: '30px'}}>View more infographics →</h3>
        </main>
        <footer>
          {/* link */}
          <div id="footer--actions">
            <div className="footercta"><img src={wa} style={{marginRight: '8px', height: '20px'}} />Delhi Govt. Corona Helpline: 8800007722</div>
            <div className="footercta"><img src={yt} style={{marginRight: '8px', height: '18px'}} />Delhi Govt. YouTube Channel </div>
          </div>
          {/* link */}
          <img src={delhigovt} style={{height: '75px', marginTop: '50px'}} />
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
