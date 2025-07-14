// Code Keypad Component Here

function Keypad (){
    function handleChange (){
        console.log ('Entering password...')
    }
    return (
        <div>
            <form>
                <label>
                    password:
                <input type="password" onChange={handleChange}></input>
                </label>
            </form>
        </div>
    )
}

export default Keypad;