const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div>
            <img
                className="person"
                src={picture}
                alt={firstName}
                width={70}
                height={70}
            />
            <ul>
                <li><b>FirstName:</b>{firstName} </li>
                <li><b>lastName:</b>{lastName} </li>
                <li><b>Gender:</b>{gender} </li>
                <li><b>Height:</b>{height} </li>
                <li><b>Birth:</b>{birth} </li>
            </ul>
        </div>
    )
}

export default IdCard;