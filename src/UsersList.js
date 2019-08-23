import React from 'react';

const UsersList = props => {
    return (
        <div>

            {props.usersList.map(info => {
                return (
                    <div key = {info.id}>
                    <h3>{info.name}</h3>
                    <p>{info.email}</p>
                    </div>

                )
            })}
        </div>
    )
}

export default UsersList;