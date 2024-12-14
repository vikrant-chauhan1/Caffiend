import CoffeeForm from "./components/CoffeeForm";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Stats from "./components/Stats";
import History from "./components/History";


function App() {

  const isAuthenticated = true;

  const AuthenticatedContent=(
    <>
      <Stats />
      <History />
    
    </>
  );
 

  return (
    <Layout>
      <Hero />
      <CoffeeForm />
      {isAuthenticated && AuthenticatedContent}
    </Layout>
  )
}

export default App
