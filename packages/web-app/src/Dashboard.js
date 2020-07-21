import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeJourney } from '@openbanking/ui-data/lib/services/auth-service'
import { setAccessToken } from '@openbanking/ui-data/lib/actions/auth'
import { setAccountId } from '@openbanking/ui-data/src/actions/account'

const Dashboard = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        //remove access_token to start journey again
        localStorage.removeItem('token')
        localStorage.removeItem('refresh_token')
        dispatch(setAccessToken(null,null))
        dispatch(setAccountId(null))
    },[])

    function setType(type) {
        // initialize aisp/pisp journey to get authorization URL
        initializeJourney(dispatch, type)
    }

    return (
        <div>
        

<div class="pusher">
<div class="ui inverted vertical masthead center aligned segment">

  <div class="ui container">
    <div class="ui large secondary inverted pointing menu">
      <a class="toc item">
        <i class="sidebar icon"></i>
      </a>
      <a class="active item">Home</a>
      <a class="item">About</a>
      <a class="item">Company</a>
      <a class="item">Careers</a>
      
    </div>
  </div>

  <div class="ui text container">
    <h1 class="ui inverted purple header">
      Imagine-a-Company which gives instant credit scores based on your transactions data. We are here to do that.
    </h1>
    <h2>Get instant credit score free of cost.</h2>
    <div class="ui huge primary button" onClick={() => setType('aisp')}>Get Started <i class="right arrow icon"></i></div>
  </div>

</div>

<div class="ui vertical stripe segment">
  <div class="ui middle aligned stackable grid container">
    <div class="row">
      <div class="eight wide column">
        <h3 class="ui violet header">We use Open Banking</h3>
        <p>With the help of openbanking, we extensively use the customer data in a safe and secure manner to give the credit scores</p>
        
      </div>
      <div class="six wide right floated column">
        <img src="https://mk0bfsieletsonlt96u6.kinstacdn.com/wp-content/uploads/2019/10/Open-Banking-FB-950x520.jpg" class="ui large bordered rounded image" />
      </div>
    </div>
    <div class="row">
      <div class="center aligned column">
        <a class="ui huge button" onClick={() => setType('aisp')}>Check Them Out</a>
      </div>
    </div>
  </div>
</div>


<div className="dashboard">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="text">
                            <h3>Open Banking</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="journeyBtns">
                            <button
                                className="journeyBtn"
                                onClick={() => setType('aisp')}
                            >
                                Account Information Service Provider (AISP)
                            </button>
                            <button
                                className="journeyBtn"
                                // to do 
                            >
                                Payment Initiation Service Provider (PISP)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>




<div class="ui inverted vertical footer segment">
  <div class="ui container">
    <div class="ui stackable inverted divided equal height stackable grid">
      <div class="three wide column">
        <h4 class="ui inverted header">About</h4>
        <div class="ui inverted link list">
          <a href="#" class="item">Sitemap</a>
          <a href="#" class="item">Contact Us</a>
          <a href="#" class="item">Religious Ceremonies</a>
          <a href="#" class="item">Gazebo Plans</a>
        </div>
      </div>
      <div class="three wide column">
        <h4 class="ui inverted header">Services</h4>
        <div class="ui inverted link list">
          <a href="#" class="item">Banana Pre-Order</a>
          <a href="#" class="item">DNA FAQ</a>
          <a href="#" class="item">How To Access</a>
          <a href="#" class="item">Favorite X-Men</a>
        </div>
      </div>
      <div class="seven wide column">
        <h4 class="ui inverted header">Footer Header</h4>
        <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
      </div>
    </div>
  </div>
</div>
</div>




</div>
    )
}

export default Dashboard
