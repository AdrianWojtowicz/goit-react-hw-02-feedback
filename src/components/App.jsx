import { Component } from "react";
import PropTypes from 'prop-types';

export class App extends Component {

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100)
  }

  goodFeed = () => {
    this.setState(state => ({ good: state.good + 1 }));
  }

  neutralFeed = () => {
    this.setState(state => ({ neutral: state.neutral + 1 }));
  }

  badFeed = () => {
    this.setState(state => ({ bad: state.bad + 1 }));
  }

  render() {
    return (
      <div>
        <h3>Please leave feedback</h3>
        <button type="button" onClick={this.goodFeed}>Good</button>
        <button type="button" onClick={this.neutralFeed}>Neutral</button>
        <button type="button" onClick={this.badFeed}>Bad</button>
        <h4>Statistics</h4>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
};