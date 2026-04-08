import Nav from "../components/Nav";

export default function Register() {
  const registerForm = () => {
    // Logic for handling form submission will go here
    return <form>Form</form>;
  };

  return (
    <Nav className="w-full justify-center items-center">
      <div className="w-full max-w-md mx-auto mt-8">
        <h1 className="text-6xl"> Register</h1>
        <div className="w-full max-w-md mx-auto mt-8">{registerForm()}</div>
      </div>
    </Nav>
  );
}
