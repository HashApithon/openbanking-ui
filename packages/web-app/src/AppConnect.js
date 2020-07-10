import { connect, useSelector, useDispatch } from 'react-redux'
import App from './App'

const mapStateToProps = (state) => ({
    loading: state.common.loading,
    error: state.common.error,
})

const mapDispatchToProps = (dispatch) => ({})

//export default connect(mapStateToProps, mapDispatchToProps)(App)

export const App = () => {
    const loading = useSelector(state => state.common.loading);
    const error = useSelector(state => state.common.error);
    const dispatch = useDispatch();
}
