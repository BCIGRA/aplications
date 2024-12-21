import Badge from '@mui/material/Badge';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { WelcomeCircleProps } from '../../../constants';

const WelcomeCircle = ({ changeIcon, welcomeMessage, handleChangeIcon, image, width }: WelcomeCircleProps) => {
  let display, icon;

  if (changeIcon) {
    icon = <CloseIcon style={{ fontSize: 40, color: "#5851DB" }} />;
  } else {
    icon = <QuestionAnswerOutlinedIcon style={{ fontSize: 40, color: "#5851DB" }} />;
  }

  if (welcomeMessage) {
    display = (
      <>
        &nbsp;&nbsp;
        <Badge badgeContent={1} overlap="circular" color="error">
          <button className="avatar" data-testid="avatar-button" onClick={handleChangeIcon}>
            <img alt="avatar" data-testid="welcome-circle-image" src={image} width={width} />
          </button>
        </Badge>
      </>
    );
  } else {
    display = (
      <button className="avatar" data-testid="avatar-button" onClick={handleChangeIcon}>
        {icon}
      </button>
    );
  }

  return (
    <>
      {display}
      <style jsx>{`
        .avatar {
          padding: 7px 7px;
          border: 2px solid #000000;
          border-radius: 50%; /* to get a circular shape */
          cursor: pointer;
          background-color: #000000;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
      `}</style>
    </>
  );
}

export default WelcomeCircle;
