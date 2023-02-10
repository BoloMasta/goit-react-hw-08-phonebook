import PropTypes from 'prop-types';
// import css from './Notification.module.scss';
import Typography from '@mui/material/Typography';

export const Notification = ({ message }) => <Typography variant="h6">{message}</Typography>;

Notification.propTypes = {
  message: PropTypes.string,
};
