
export default function Disp({amount,tip,Reset}){
    return(
        <>
        <p > <b>you pay ${amount+tip}  (${amount}+ ${tip}) </b></p>
        <button onClick={Reset}>Reset</button>
        </>
    )
}