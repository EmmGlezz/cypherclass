import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Challenge1 from './components/Challenge1'
import Challenge2 from './components/Challenge2'
import Challenge3 from './components/Challenge3'
import Challenge4 from './components/Challenge4'
import Challenge5 from './components/Challenge5'
import Progress from './components/Progress'
import { checkAuth, logout } from './services/authService'
import './App.css'

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [completedChallenges, setCompletedChallenges] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const auth = checkAuth()
    setIsAuthenticated(auth.isAuthenticated)
    setUser(auth.user)
    const storedCompletedChallenges = JSON.parse(localStorage.getItem('completedChallenges') || '[]')
    setCompletedChallenges(storedCompletedChallenges)
  }, [])

  const handleLogout = () => {
    logout()
    setIsAuthenticated(false)
    setUser(null)
    setCompletedChallenges([])
    localStorage.removeItem('completedChallenges')
  }

  const handleDashboard = () => {
    navigate('/dashboard')
  }

  const completeChallenge = (challengeNumber) => {
    if (!completedChallenges.includes(challengeNumber)) {
      const newCompletedChallenges = [...completedChallenges, challengeNumber]
      setCompletedChallenges(newCompletedChallenges)
      localStorage.setItem('completedChallenges', JSON.stringify(newCompletedChallenges))
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Cybersecurity Hackathon</h1>
        {isAuthenticated && (
          <>
            <button onClick={handleDashboard}>Dashboard</button>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </header>
      <Routes>
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
        } />
        <Route path="/dashboard" element={
          isAuthenticated ? <Dashboard user={user} completedChallenges={completedChallenges} /> : <Navigate to="/login" />
        } />
        <Route path="/challenge1" element={
          isAuthenticated ? <Challenge1 completeChallenge={completeChallenge} completedChallenges={completedChallenges} /> : <Navigate to="/login" />
        } />
        <Route path="/challenge2" element={
          isAuthenticated ? <Challenge2 completeChallenge={completeChallenge} completedChallenges={completedChallenges} /> : <Navigate to="/login" />
        } />
        <Route path="/challenge3" element={
          isAuthenticated ? <Challenge3 completeChallenge={completeChallenge} completedChallenges={completedChallenges} /> : <Navigate to="/login" />
        } />
        <Route path="/challenge4" element={
          isAuthenticated ? <Challenge4 completeChallenge={completeChallenge} completedChallenges={completedChallenges} /> : <Navigate to="/login" />
        } />
        <Route path="/challenge5" element={
          isAuthenticated ? <Challenge5 completeChallenge={completeChallenge} completedChallenges={completedChallenges} /> : <Navigate to="/login" />
        } />
        <Route path="/progress" element={
          isAuthenticated ? <Progress completedChallenges={completedChallenges} /> : <Navigate to="/login" />
        } />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
