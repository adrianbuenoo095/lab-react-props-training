import classes from "./idcard.module.css";

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div className={classes.mainContent}>
            <div>
                <img
                    className={classes.img}
                    src={picture}
                    alt={firstName}
                />
            </div>
            <div >
                <p><span className={classes.boldText}>FirstName:</span>{firstName}</p>
                <p><span className={classes.boldText}>lastName:</span>{lastName}</p>
                <p><span className={classes.boldText}>Gender:</span> {gender}</p>
                <p><span className={classes.boldText}>Height:</span> {height}</p>
                <p><span className={classes.boldText}>Birth:</span>{birth}</p>
            </div >
        </div >
    )
}

export default IdCard;