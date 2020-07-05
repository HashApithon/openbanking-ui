import { connect } from 'react-redux';
import App from './App';
import {initializeData} from '@openbanking/ui-data/src/actions/app'

const mapStateToProps = state => ({
    message: state.app.message,
    loading: state.common.loading
});


const mapDispatchToProps = dispatch => ({
    getInitialData:(message)=>
        dispatch(initializeData(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);