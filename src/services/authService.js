const dummyUsers = [
  { username: 'samuelA', password: 'pwd', name: 'Samuel ALVES PEREIRA' },
  { username: 'daniaH', password: 'pwd', name: 'Dania HAWAT' },
  { username: 'davidC', password: 'pwd', name: 'David CAVIEDES SANTOS' },
  { username: 'guillermoJ', password: 'pwd', name: 'Guillermo JARA GAETE' },
  { username: 'shakirullahM', password: 'pwd', name: 'Shakirullah MOHAMMED' },
  { username: 'asadM', password: 'pwd', name: 'Asad Uddin MOHAMMED KHAJA' },
  { username: 'lauraO', password: 'pwd', name: 'Laura OSORIO CARO' },
  { username: 'abuS', password: 'pwd', name: 'Abu Bakar SYED' },
  { username: 'mariaT', password: 'pwd', name: 'Maria TERSOLI' },
  { username: 'shaikhT', password: 'pwd', name: 'Shaikh Tauseef Shaikh Asaf' },
  { username: 'luzL', password: 'pwd', name: 'Luz Felippe LUTTI JANEO' },
  { username: 'didemM', password: 'pwd', name: 'Didem MUTLU' },
  { username: 'asrithaR', password: 'pwd', name: 'Asritha Goud RACHAMALLA' },
  { username: 'marcoR', password: 'pwd', name: 'Marco Antonio RODRIGUES' },
  { username: 'pieroD', password: 'pwd', name: 'Piero DALL ACQUA' },
  { username: 'daniloS', password: 'pwd', name: 'Danilo SANTOS SILVA' },
  { username: 'davidC', password: 'pwd', name: 'David CASTRO FIGUERA' },
  { username: 'edsonC', password: 'pwd', name: 'Edson COELHO DA SILVA JUNIOR' },
  { username: 'lucianoG', password: 'pwd', name: 'Luciano DA ROSA GOMES' },
  { username: 'jeffreyD', password: 'pwd', name: 'Jeffrey MATEO DE LEON' },
  { username: 'guilhermeO', password: 'pwd', name: 'Guilherme OLIVEIRA ARANTE' },
  { username: 'daviA', password: 'pwd', name: 'Davi SOUZA ARAUJO' },
  { username: 'pompeuC', password: 'pwd', name: 'Pompeu FERREIRA CAVALCANTE' },
  { username: 'guilhermeS', password: 'pwd', name: 'Guilherme SANTOS' },
  { username: 'matheusC', password: 'pwd', name: 'Matheus CATALA COUTINHO' },
  { username: 'ozgeO', password: 'pwd', name: 'Ozge OSMANKAHYAOGLU' },
];

const AUTH_KEY = 'auth_user';

export const login = (username, password) => {
  const user = dummyUsers.find(
    (u) => u.username === username && u.password === password
  );
  
  if (user) {
    localStorage.setItem(AUTH_KEY, JSON.stringify({ username: user.username, name: user.name }));
    return { success: true, name: user.name };
  }
  return { success: false };
};

export const logout = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const checkAuth = () => {
  const user = localStorage.getItem(AUTH_KEY);
  if (user) {
    const parsedUser = JSON.parse(user);
    return { isAuthenticated: true, user: parsedUser.name };
  }
  return { isAuthenticated: false, user: null };
};

export const getUser = () => {
  const user = localStorage.getItem(AUTH_KEY);
  return user ? JSON.parse(user).name : null;
};
