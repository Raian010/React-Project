import PropTypes from 'prop-types';
const CartAccount = ({selectCourse}) => {
    const {title} = selectCourse;
    return (
        <div>
            <li className='text-normal'>{title}</li>
        </div>
    );
};

CartAccount.propTypes= {
    selectCourse: PropTypes.object.isRequired,
}

export default CartAccount;