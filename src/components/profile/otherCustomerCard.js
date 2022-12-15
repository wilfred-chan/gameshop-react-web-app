import {Link} from "react-router-dom";

const OtherCustomerCard = ({user}) => {
    return (
        <>
            <div className="other-customer-card-flex">
                <div className="m-5">
                    <div>
                        <img src={user.image_url} alt="" />
                    </div>
                    <h3>{user.lastname} {user.firstname}</h3>
                    <span className="badge bg-warning text-dark">{user.role}</span>
                    <div className="p-3 mb-2 bg-light text-dark">{user.bio}</div>
                </div>
            </div>
        </>
    );
};
export default OtherCustomerCard;