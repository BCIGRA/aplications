import CancelIcon from '@mui/icons-material/Cancel';
import { WelcomeBubbleProps } from '../../../constants';

const WelcomeBubble = ({ welcomeMessage, closeWelcomeMessage, handleChangeIcon }: WelcomeBubbleProps) => {
  return (
    welcomeMessage && (
      <>
        <CancelIcon
          className="cancel"
          id="cancel"
          fontSize="small"
          onClick={closeWelcomeMessage}
        />
        <div
          className="bubble-div"
          data-testid="bubble"
          onClick={handleChangeIcon}
        >
          Hey there, welcome back! Anything I can help you with?
        </div>

        {/* Inline styles here */}
        <style jsx>{`
          .bubble-div {
            padding: 10px;
            border-radius: 5px;
            max-width: 220px;
            display: inline-block;
            position: relative;
            cursor: pointer;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          
          .bubble-div::after {
            content: '';
            position: absolute;
            right: 0;
            top: 50%;
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-left-color: #FFFFFF;
            border-right: 0;
            border-bottom: 0;
            margin-top: -5px;
            margin-right: -10px;
          }

          .cancel {
            margin-bottom: 25px;
            color: grey;
            cursor: pointer;
          }
        `}</style>
      </>
    )
  );
};

export default WelcomeBubble;
