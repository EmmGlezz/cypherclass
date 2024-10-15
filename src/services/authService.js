const dummyUsers = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' },
];

const AUTH_KEY = 'auth_user';

export const login = (username, password) => {
  const user = dummyUsers.find(
    (u) => u.username === username && u.password === password
  );
  
  if (user) {
    localStorage.setItem(AUTH_KEY, JSON.stringify({ username: user.username }));
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const checkAuth = () => {
  const user = localStorage.getItem(AUTH_KEY);
  if (user) {
    return { isAuthenticated: true, user: JSON.parse(user).username };
  }
  return { isAuthenticated: false, user: null };
};

export const getUser = () => {
  const user = localStorage.getItem(AUTH_KEY);
  return user ? JSON.parse(user).username : null;
};

