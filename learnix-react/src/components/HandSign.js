const HandSign = ({ letter, imageSrc }) => {
    return (
        <div className="hand-sign" data-sign={letter}>
            <img src={imageSrc} alt={`${letter} Hand Sign`} />
            <p>{letter}</p>
        </div>
    );
};

export default HandSign;