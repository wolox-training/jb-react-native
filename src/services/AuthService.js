export function checkAuth() {
  return !!localStorage.getItem('isAuthenticated');
}

export function logout() {
  localStorage.removeItem('isAuthenticated');
}
