import React from 'react';
import PropTypes from 'prop-types';


class Dashboard extends React.Component {
    render() {
        return (
            <header>
                <h1>Dashboard</h1>
                <h2>Welcome back {this.props.user}!</h2>
            </header>
        );
    }
};

Dashboard.propTypes = {
    user: PropTypes.string
};

export default Dashboard;