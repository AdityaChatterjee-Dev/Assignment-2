import Header from "./Header";
import StudentCard from "./StudentCard";
import Footer from "./Footer";

function App() {
  return (
<div>
<Header />

<StudentCard name="Shashi" age={22} course="React" />
<StudentCard name="Rahul" age={23} course="Java" />

<Footer />
</div>
  );
}

export default App;
