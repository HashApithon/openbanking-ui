import React,{useEffect} from 'react'
import createRequest from '@openbanking/ui-data/src/services/request'

import { connect } from 'react-redux';
import Loading from '@openbanking/ui-common/lib/Loading';

function Home(props) {
  useEffect(()=>{
    props.getInitialData()
  },[])
  return (
    <div>
     Home component 
     <Loading />
     <pre>{(JSON.stringify(props.data,null,4))}</pre>
    </div>
  );
}

const mapStateToProps = state => ({
    data: state.app.data
});


const mapDispatchToProps = dispatch => ({
    getInitialData:()=>
        createRequest(dispatch,'todos/1','get')
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
