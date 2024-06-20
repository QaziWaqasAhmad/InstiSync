import React, { useState } from 'react';
import Buttons from './Buttons';

function ForgotPasswordModal() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="modal fade" id="forgotPasswordModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"  style={{ color: '#fdb813' }}>Forgot Password</h5>
             {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>  */}
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label style={{ color: '#fdb813' }}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
              
              <label style={{ color: '#fdb813', marginTop: '10px'  }}>New Password</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <label style={{ color: '#fdb813', marginTop: '10px'  }}>Enter New Password Again</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <Buttons
                    name="Reset Password"
                    className="btn btn-primary reset-password"
                    onClick={""}
                  />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordModal;
