import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [inputName, setInputName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputName.trim() !== "" && password.trim() !== "") {
      setStudentName(inputName);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setInputName("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {!isLoggedIn ? (
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Student Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter Student Name"
              className="w-full p-3 mb-4 border rounded-lg"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            /><br />

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-3 mb-4 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br />&nbsp;

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-4">Welcome, {studentName} 👋</h1>
          <p className="mb-6 text-gray-600">This is your student dashboard.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-100 rounded-xl shadow">
              <h3 className="font-bold text-lg">📚 Courses</h3>
              <p className="text-gray-700 mt-2">View enrolled subjects</p>
            </div>

            <div className="p-4 bg-green-100 rounded-xl shadow">
              <h3 className="font-bold text-lg">📝 Assignments</h3>
              <p className="text-gray-700 mt-2">Check pending work</p>
            </div>

            <div className="p-4 bg-yellow-100 rounded-xl shadow">
              <h3 className="font-bold text-lg">📊 Attendance</h3>
              <p className="text-gray-700 mt-2">Track attendance records</p>
            </div>

            <div className="p-4 bg-purple-100 rounded-xl shadow">
              <h3 className="font-bold text-lg">🏆 Results</h3>
              <p className="text-gray-700 mt-2">View exam performance</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="mt-6 w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
