import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
require('./InputRange.css');

let oneStep = '';

class InputRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      leftPosition: false,
      thumbActive: false,
      thumbHeight: 0,
      thumbWidth: 0,
      thumbTop: '10px',
      thumbMarginLeft: '-6px'
    }
    this.rangeChange = this.rangeChange.bind(this);
    this.rangeFocus = this.rangeFocus.bind(this);
    this.rangeMouseLeave = this.rangeMouseLeave.bind(this);
  }

  componentDidMount() {
    this.setState({value: this.props.value})
    let input = this.refs.input;
    let inputWidth = input.offsetWidth;
    oneStep = inputWidth / this.props.max;
    this.setState({leftPosition: oneStep * this.props.value});
  }

  rangeChange(e) {
    let newValue = e.target.value;
    this.setState({value: newValue, leftPosition: oneStep * newValue})
  }

  rangeFocus() {
    this.setState({thumbActive: true, thumbHeight: '30px', thumbWidth: '30px', thumbTop: '-20px', thumbMarginLeft: '-15px'});
  }

  rangeMouseLeave() {
    this.refs.input.blur();
    this.setState({thumbActive: false, thumbHeight: 0, thumbWidth: 0, thumbTop: '10px', thumbMarginLeft: '-6px'});
  }

  render() {
    const {
      className,
      min,
      max,
      value,
      ...attributes
    } = this.props;

    const inputClass = classNames(
      className
    );

    const thumbClass = classNames(
      'thumb',
      this.state.thumbActive ? 'active' : false
    );

    return (
      <form className="range-field">
        <input className={inputClass} min={this.props.min} max={this.props.max} value={this.state.value} ref="input" type="range" onChange={this.rangeChange} onFocus={this.rangeFocus} onMouseLeave={this.rangeMouseLeave}/>
        <span className={thumbClass} style={{left: this.state.leftPosition, height: this.state.thumbHeight, width: this.state.thumbWidth, top: this.state.thumbTop, marginLeft: this.state.thumbMarginLeft}}>
          <span className="value">{this.state.value}</span>
        </span>
      </form>
    );
  }
}

InputRange.propTypes = {
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number
};

InputRange.defaultProps = {
  min: 0,
  max: 100,
  value: 50
};

export default InputRange;
