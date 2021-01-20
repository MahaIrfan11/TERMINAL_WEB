import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
const Dashboard = ({
    getCurrentProfile,
    deleteAccount,
    auth: { user },
    profile: { profile, loading }
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return loading && profile === null ? (
        <Spinner />
    ) : (
            <Fragment>
                <h1 className='large text-primary'>Dashboard</h1>
                <p className='lead'>
                    <i className='fas fa-user' /> Welcome {user && user.name}
                </p>
                {profile !== null ? (
                    <Fragment>
                        <DashboardActions />
                        <Experience experience={profile.experience} />
                        <Education education={profile.education} />
                        <div className='my-2'>
                            <button className='btn btn-danger' onClick={() => deleteAccount()}>
                                <i className='fas fa-user-minus' /> Delete My Account
            </button>
                        </div>
                    </Fragment>
                ) : (
                        <Fragment>
                            <p>Welcome to UniExplorer! Here you can see the highest ranked universities in Pakistan and participate in the discussion, where other students and consultant will help you.</p>
                            <strong>To Book your appointment with the consultant,</strong>
                            <strong> Mail us at <a>UniExplorer@gmail.com </a></strong>
                            <strong>or Call us at 0334455667</strong>
                            <p>If you are the student, then <Link to="/posts"> Skip </Link> this part.</p>
                            <p>If you are a consultant and not yet setup a profile, please add some info.</p>
                            <Link to='/create-profile' className='btn btn-primary my-1'>
                                Create Profile
          </Link>
                        </Fragment>
                    )}
            </Fragment>
        );
};
Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});
export default connect(
    mapStateToProps,
    { getCurrentProfile, deleteAccount }
)(Dashboard);