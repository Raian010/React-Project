import PropTypes from 'prop-types';
import CartAccount from './CartAccount';
const CartAccounts = ({selectCourses,totalCredit}) => {
    return (
        <div className="text-left border  ml-2 mt-6 p-2">
            <h2 className="text-xl font-semibold text-blue-400">Credit hour Remaining: </h2>
            <hr className="my-2" />
            <h2 className="text-xl font-semibold">Course Name </h2>
            <ol>
                {selectCourses.map((selectCourse,idx) => <CartAccount key={idx} selectCourse={selectCourse}></CartAccount>)}
            </ol>
            <hr className="my-2" />
        </div>
    );
};

CartAccounts.propTypes= {
    selectCourses: PropTypes.object.isRequired,
    totalCredit: PropTypes.number
}

export default CartAccounts;