import NavBar from "./NavBar"

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h2 className="text-center">Welcome to MindfulMeals!</h2>
            <p className="mt-4">
              At MindfulMeals, we're dedicated to helping you achieve a balanced
              and healthy lifestyle through mindful eating and fasting. Our
              easy-to-use platform allows you to seamlessly log your meals,
              track nutritional information, and monitor your fasting progress.
            </p>
            <h4 className="mt-4">Meal Log</h4>
            <p>
              Keep track of what you eat every day and gain insights into the
              nutritional content of your meals. Our meal log provides detailed
              information on calories and carbs to help you make informed
              dietary choices.
            </p>
            <h4 className="mt-4">Fasting Tracker</h4>
            <p>
              Start and manage your fasting periods effortlessly. Our fasting
              tracker not only keeps you updated on your progress but also
              informs you about the metabolic phase you're currently in, helping
              you optimize your fasting routine for maximum benefits.
            </p>
            <p className="mt-4">
              Join us on the journey to a healthier you with MindfulMeals!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
