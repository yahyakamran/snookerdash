    
const Register = () => {
    return(
    <div className="h-screen">
        <h1 className="text-5xl text-center">Snooker Dash</h1>
        <form
            className="flex flex-col items-center justify-center
                mt-[10rem] text-2xl"
            >
            <label htmlFor="email">Enter Email</label><br></br>
            <input type="email" id="email" name="email"
                className="border-solid border-2 border-sky-500"
            ></input>
            <br/>
            <label htmlFor="password">Enter Password</label><br></br>
            <input type="text" id="password" name="password"
                className="border-solid border-2 border-sky-500"
            ></input>
            <br></br>
            <label htmlFor="password">Confirm Password</label><br></br>
            <input type="text" id="password" name="password"
                className="border-solid border-2 border-sky-500"
            ></input>
            <div
                className="bg-blue-400 text-white font-bold py-2 px-4 rounded
                        hover:cursor-pointer mt-[1rem]"
            >Submit</div>
            <span className="text-xl text-blue-600 hover:cursor-pointer mt-[1rem]"
            >Already have an account</span>
        </form>
    </div>

 )
}


export default Register

