import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      // Simulate API call
      setTimeout(() => {
        // Mock validation
        if (email && password.length >= 6) {
          const userData = {
            id: Math.random().toString(36).substr(2, 9),
            email,
            name: email.split('@')[0],
            role: 'coach', // or 'scout', 'player'
            createdAt: new Date().toISOString(),
          };
          
          setUser(userData);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };

  // Sign up function
  const signup = (email, password, name, role) => {
    return new Promise((resolve, reject) => {
      // Simulate API call
      setTimeout(() => {
        if (email && password.length >= 6 && name && role) {
          const userData = {
            id: Math.random().toString(36).substr(2, 9),
            email,
            name,
            role,
            createdAt: new Date().toISOString(),
          };
          
          setUser(userData);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('All fields are required'));
        }
      }, 1000);
    });
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  // Update profile
  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    return updatedUser;
  };

  // Reset password
  const resetPassword = (email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate sending reset email
        if (email) {
          resolve({ message: 'Password reset email sent' });
        } else {
          reject(new Error('Email not found'));
        }
      }, 1000);
    });
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    signup,
    logout,
    updateProfile,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export default AuthContext;
