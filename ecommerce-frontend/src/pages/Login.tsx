import { useState } from "react"
import { FcGoogle } from "react-icons/fc"

function Login() {
    const [gender, setGender] = useState("")
    const [date, setDate] = useState("")
    return (
        <div className="login">
            <main>
                <h1 className="heading">login</h1>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select value={gender} onChange={e => setGender(e.target.value)} name="gender" id="gender">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Date of Birth</label>
                    <input
                        type="data"
                        name="data"
                        value={date}
                        id="date"
                        onChange={e => setDate(e.target.value)}
                    ></input>
                </div>
                <div>
                    <p>Already signed in once</p>
                    <button>
                        <FcGoogle /><span>Sign in with Google</span>
                    </button>
                </div>
            </main>
        </div>
    )
}

export default Login