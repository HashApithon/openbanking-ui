import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = (state) => ({
    loading: state.common.loading,
    error: state.common.error,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)
