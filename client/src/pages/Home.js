import React from 'react';
import { connect } from 'react-redux';
import Container from 'components/containers/Container';


const Home = ({}) => {
    
    return (
        <Container>
            Home
        </Container>

    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { })(Home);