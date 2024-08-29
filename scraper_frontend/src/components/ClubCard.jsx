const ClubCard = ({ test }) => {
    return (

        <div className="club-card">
            <h3>{test.Subject}</h3>
            <p>{test.ResourceID}</p>
            <p>{test.Description}</p>
        </div>


    )
}

export default ClubCard