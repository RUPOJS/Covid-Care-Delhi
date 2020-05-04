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
import delhi from '../static/delhi.png';
import india from '../static/india.png';
import mapmock from '../static/mapmock.svg';
import gplay from '../static/gplay.svg';
import appstore from '../static/appstore.svg';

class CovidDelData extends React.Component {
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
              <li onClick={() => {this.context.router.push('/covid-delhi-info/')}} style={{color: '#234D8C'}}>Information</li>
              <li></li>
              <li id="selected-data">Data</li>
              <li></li>
            </ul>
          </div>
          <div id="header--right">
          </div>
        </header>
        <main>
          <img className="logo" src={logo} style={{display: 'none'}} />
          <div className="maintitlebar">
            <h1>Delhi Covid Updates</h1>
            <img src={delhigovt} height="65px" />
          </div>
          <div id="main--sections">
            <div id="updates">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className="update--item">
                  <div className="update--title">India Covid Cases</div>
                  <div className="update--confirmed">
                    <div>Confirmed</div>
                    16689
                  </div>
                  <div className="update--stats">
                    <img className="update--stats_map" src={india} />
                    <div className="stats--active">
                      <div>Active</div>
                      47
                    </div>
                    <div className="stats--recovered">
                      <div>Recovered</div>
                      47
                    </div>
                    <div className="stats--deaths">
                      <div>Deaths</div>
                      47
                    </div>
                  </div>
                  <div className="update--source">Source: MoHFW, GoI</div>
                </div>
                <div className="update--item">
                  <img className="update--stats_map" src={delhi} />
                  <div className="update--title">Delhi Covid Cases</div>
                  <div className="update--confirmed">
                    <div>Confirmed</div>
                    16689
                  </div>
                  <div className="update--stats">
                    <div className="stats--active">
                      <div>Active</div>
                      47
                    </div>
                    <div className="stats--recovered">
                      <div>Recovered</div>
                      47
                    </div>
                    <div className="stats--deaths">
                      <div>Deaths</div>
                      47
                    </div>
                  </div>
                  <div className="update--source">Last updated: April 27, 2020</div>
                </div>
                <div className="update--item">
                  <div className="update--title">Tests Conducted In Delhi</div>
                  <div className="teststoday">
                    <div>Tests Today</div>
                    47
                  </div>
                  <div className="testsconducted">
                    <div>Total Tests Conducted</div>
                    611
                  </div>
                  <div className="update--source">Last updated: April 27, 2020</div>
                </div>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div id="mapviz">
                  <div id="districtdata">
                    <h5 style={{marginBottom: '10px'}}>District Data</h5>
                    <ul>
                      <li>New Delhi<span className="districtdata--number">12</span></li>
                      <li>North West<span className="districtdata--number">3</span></li>
                      <li>North<span className="districtdata--number">5</span></li>
                      <li>West<span className="districtdata--number">56</span></li>
                      <li>South West<span className="districtdata--number">67</span></li>
                      <li>South<span className="districtdata--number">24</span></li>
                      <li>South East<span className="districtdata--number">7</span></li>
                      <li>Central<span className="districtdata--number">89</span></li>
                      <li>North East<span className="districtdata--number">112</span></li>
                      <li>Shahdara<span className="districtdata--number">3</span></li>
                      <li>East<span className="districtdata--number">4</span></li>
                    </ul>
                    <div className="update--source" style={{marginTop: '15px'}}>Last updated: April 27, 2020</div>
                  </div>
                  <div id="map"><img src={mapmock} style={{'height': '500px'}} /></div>
                </div>
              </div>
              <div id="datasource">Source: Health Department, GNCTD</div>
            </div>
            <aside>
              <div className="asideComponent">
                <h6>Downloads</h6>
                <div className="asideComponentItem"><img src={adobe} style={{marginRight: '8px'}} />Delhi Health Bulletin</div>
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

CovidDelData.propTypes = {
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
)(CovidDelData);
