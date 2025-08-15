import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { SidebarProvider } from "./components/ui/sidebar"
import { AppSidebar } from "./components/layouts/AppSidebar"
import DashboadHome from "./pages/DashboadHome"
import OrdersPage from "./pages/product/OrdersPage"
import AddProductPage from "./pages/product/AddProductPage"
import ProductsPage from "./pages/product/ProductsPage"
import { Toaster } from "./components/ui/sonner"
import NotificationsPage from "./pages/NotificationsPage"
import SettingsPage from "./pages/SettingsPage"
import EditProduct from "./pages/product/EditProductPage"
import ProductDetail from "./pages/product/ProductDetails"
import AppHeaders from "./components/layouts/AppHeaders"
import LoginPage from "./pages/auth/LoginPage"
import LoginGoogleCallback from "./pages/auth/LoginGoogleCalback"
import { useAuth } from "./hooks/useAuth"
import Loading from "./components/templates/Loading"

const MainLayout = () => {
  const {user, isAuthenticated, loading} = useAuth();
  if (loading) return <Loading />
  if (!user) return <Navigate to="/login" />
  else if (user.role !== "admin") return <Navigate to="/login" />
  if (!isAuthenticated) return <Navigate to="/login" />

  return (
    <SidebarProvider className="bg-gradient-to-br from-blue-600/5 to-purple-600/5 dark:from-blue-600/10 dark:to-purple-600/10">
      <AppSidebar />
      <main className="w-full relative p-2 md:pl-0 space-y-2 pt-0">
        <Toaster richColors position="top-right" />
        <AppHeaders />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<DashboadHome />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:id" element={<OrdersPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/details/:id" element={<ProductDetail />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
        <Route path="/products/add" element={<AddProductPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/notifications/:id" element={<NotificationsPage />} />
        <Route path="/settings" element={<SettingsPage />} />

        <Route path="*" element={<h1>404</h1>} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/google" element={<LoginGoogleCallback />} />
    </Routes>
  )
}

export default App