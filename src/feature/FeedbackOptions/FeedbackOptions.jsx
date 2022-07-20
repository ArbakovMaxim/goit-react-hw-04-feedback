import { ButtonFeedback, ButtonWrapper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map(option => {
        return (
          <ButtonFeedback
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </ButtonFeedback>
        );
      })}
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
