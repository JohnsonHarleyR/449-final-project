const Loading = ({
    isLightColor = false,
}) => {

    const textColor = isLightColor ? 'text-white' : 'text-black';

    return (
        <div className="loading-box flex justify-center">
            <h2 className={`${textColor} text-5xl font-semibold pt-6 pb-6`}>Loading...</h2>
        </div>
    )
}

export default Loading;