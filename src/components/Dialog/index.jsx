import AskComponent from './ask';
import ConfirmComponent from './confirm';
import MessageComponent from './message';
import OpenComponent from './open';
import SaveComponent from './save';
import './dialog.css';

const Dialog = () => {
  return (
    <div className='dialog'>
      <h1>Dialog 弹窗</h1>
      <AskComponent />
      <ConfirmComponent />
      <MessageComponent />
      <OpenComponent />
      <SaveComponent />
    </div>
  );
};

export default Dialog;
