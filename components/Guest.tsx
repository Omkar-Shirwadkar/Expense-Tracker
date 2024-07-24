import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
    return ( 
    <div className="guest">
        <h1>Welcome</h1>
        <p>You'll have to sign in to manage your expenses</p>
        <SignInButton />
    </div> );
}
 
export default Guest;