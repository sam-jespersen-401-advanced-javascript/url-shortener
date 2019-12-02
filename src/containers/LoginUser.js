import { connect } from 'react-redux';
import UserForm from '../components/UserForm';
import { sessionLogin } from '../actions/sessionActions';

const mapStateToProps = () => ({
  buttonText: 'Login'
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, username, password) {
    event.preventDefault();
    dispatch(sessionLogin(username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
