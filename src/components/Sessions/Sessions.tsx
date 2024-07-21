import './sessions.css';
import { SessionFilterForm } from './SessionFilterForm/SessionFilterForm';
import { useLocationParams } from '../../hooks/useLocationParams';

export const Sessions = () => {
  const {
    session_key
  } = useLocationParams();

  return (
    <div className='session-container'>
      <SessionFilterForm />

    </div>
  );
};