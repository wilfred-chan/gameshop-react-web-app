import React, { useEffect, useState } from 'react'

const EditProfileItem = ({ profile }) => {

    return (
        <>

            <form className="pt-5 form-width">
                <div>
                    <span>User Name</span>
                    <input className="form-control"
                        required
                        id="firstname"
                        type="text"

                    />
                </div>

                <div>
                    <span>Bio</span>
                    <input className="form-control"
                        type="text"
                    />
                </div>

                <div>
                    <span>Location</span>
                    <input
                        type="text"
                        className="form-control"
                    />
                </div>
            </form>

            <div className="position-relative btn-pos align-self-center my-2 pt-2">
                <button className="btn btn-secondary">
                        Save
                </ button>

            </div>

        </>
    )
}
export default EditProfileItem