const Login = () => {
    return (
        <>
         <div className="flex items-center justify-center flex-col">
            <h1 className="text-5xl text-center">Snooker Dash</h1>
            <form
                className="flex flex-col items-center justify-center
                    mt-[10rem] text-2xl"
            >
                <label htmlFor="email">Email</label>
                <br></br>
                <input type="email" id="email" name="email"
                    className="border-solid border-2 border-sky-500"
                ></input>
                <br></br>
                <label htmlFor="password">Password</label><br></br>
                <input type="text" id="password" name="password"
                    className="border-solid border-2 border-sky-500"
                ></input>
                <div className="flex gap-[1rem] justify-center items-center">
                        <input id="default-checkbox" type="checkbox" value=""
                        className="
                        w-4 h-4 text-blue-600 border-gray-300 rounded
                        focus:ring-blue-500"
                        ></input>
                    <span className="text-xl text-blue-600 hover:cursor-pointer"
                    >remember me</span>
                    <span className="text-xl text-blue-600 hover:cursor-pointer"
                    >forget password</span>
                </div>
                <div
                    className="bg-blue-400 text-white font-bold py-2 px-4 rounded
                            hover:cursor-pointer mt-[1rem]"
                >Submit</div>
                <span className="text-xl text-blue-600 hover:cursor-pointer mt-[1rem]"
                >Create Account</span>
            </form>
        </div>
    </>
    )
}

export default Login
