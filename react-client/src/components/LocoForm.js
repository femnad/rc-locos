import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

import * as actions from '../actions';


export class LocoForm extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    return (
      <div className="form">
	<input type="text" />
	<button type="Submit"
		onClick={() => this.props.submitAddr("helloblahblahblah")} >Submit</button>
	Sharing: {this.props.isSharing ? "true" : "false"}
      </div>
    );
  }
  
}


// Set up redux-connected component
const mapStateToProps = (state) => {
  return {
    isSharing: state.get('isSharing')
  };
}
export const LocoFormContainer = connect(mapStateToProps, actions)(LocoForm);