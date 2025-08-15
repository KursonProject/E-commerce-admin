import { useEffect, useState } from "react"

export interface User {
  name: string
  email: string
  role: "admin" | "user"
}

const API_URI = import.meta.env.VITE_API_URI

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState({
    login: "",
    logout: "",
  })
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true)
  
  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetch(`${API_URI}/default/user`, {
          credentials: "include",
          method: "GET",
          headers: {
            "Accept": "*/*",
            "Content-Type": "application/json"
          },
        });
        if (!data.ok) {
          const errorData = await data.json();
          throw new Error(errorData.message);
        }
        const userData = await data.json();
        if (userData.role === "admin") {
          setUser(
            {
              name: userData.username,
              email: userData.user_email,
              role: userData.role
            }
          );
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    }
    getUser();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_URI}/auth/login`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_email: email,
          user_password: password
        }),
      })
      if (!response.ok) {
        const errorData = await response.json()
        setError({ ...error, login: errorData.message })
        throw new Error(errorData.message)
      }
      const data = await response.json()
      setUser({
        name: data.data.username,
        email: data.data.user_email,
        role: data.data.role
      })
      setIsAuthenticated(true)
      return true
    } catch (error) {
      console.error("Login failed", error)
      return false
    }
  }
  const google = () => {
    window.location.href = `${API_URI}/auth/google?redirect=${window.location.href}/google`
  }
  const logout = async () => {
    try {
      const response = await fetch(`${API_URI}/auth/logout`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json"
        },
      })
      if (!response.ok) {
        const errorData = await response.json()
        setError({ ...error, logout: errorData.message })
        throw new Error(errorData.message)
      }
      setUser(null)
      setIsAuthenticated(false)
      setLoading(false)
      return true
    } catch (error) {
      console.error("Logout failed", error)
      return false
    }
  }
  return {
    user,
    error,
    loading,
    login,
    google,
    logout,
    isAuthenticated
  }
}