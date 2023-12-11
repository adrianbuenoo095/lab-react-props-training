const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div>
            <img
                className="card"
                src={picture}
            />
            <p>FirstName:{firstName}</p>
            <p>LastName:{lastName}</p>
            <h1>gender:{gender}</h1>
            <p>height:{height}</p>
            <h1>birth:{birth}</h1>
        </div>
    )

}

export default IdCard;