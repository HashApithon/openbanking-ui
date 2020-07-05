import React, { useEffect } from 'react'
import {getToken} from '@openbanking/ui-data/lib/services/authService'
import {parse} from 'query-string'

import { connect } from 'react-redux';
import { Redirect } from 'react-router';

function Home(props) {

  const {code} = parse(window.location.hash.substring(1))
  props.getToken(code)

  useEffect(()=>{
    if(props.token){
      return <Redirect to="/accounts" />
    }
  },[props.token])

  return (
    <div>
    </div>
  );
}

const mapStateToProps = state => ({
    token:state.user.token
});


const mapDispatchToProps = dispatch => ({
    getToken:(code)=>
      getToken(dispatch, code)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
