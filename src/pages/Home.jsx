const Home = ({}) => {


    return (
        <div className="homepage">
            <div>
                <h1 className="welcome">Welcome to CineMood!</h1>
                <p>Movies are more than just entertainment—they set the tone for our emotions, transport us to different worlds, and help us unwind after a long day. But with endless streaming options available, choosing what to watch can feel overwhelming. CineMood takes the guesswork out of the equation, offering hand-picked recommendations tailored to how you feel and even the weather around you.
                Imagine a stormy evening, the rain tapping against your window—wouldn’t it be nice to cozy up with a thought-provoking drama or a nostalgic childhood favorite? Or maybe the sun is shining, and you’re in the mood for an uplifting comedy or an exciting adventure film? Whatever your mood, CineMood is here to guide you to the perfect watch.</p>
            </div>
            <div>
                <h1 className="howitworks">How it works:</h1>
                <p> 1. Tell Us How You Feel-Select your current mood, let us analyze the weather in your area or select a hobbie of yours. Get Tailored Recommendations</p> 
                <p> 2. We curate a list of movies that match your vibe. Discover Something New</p> 
                <p> 3. Find hidden gems, trending hits, or comforting favorites suited to your mood.</p>
                <button>TRY IT NOW!</button>
            </div>
            <div className="footer">
                <h1 className="emailhead">Join our Email list for all the new movie updates!</h1>
                <form action="">
                    <input type="Enter your email" placeholder="Enter your email"/>
                    <button>Sign up!</button>
                </form>
            </div>
        </div>
    )
}

export default Home
