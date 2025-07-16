import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'
import AdminDashboard from '../admin/components/admin-dashboard'
import NavBar from '../components/navbar'

export default async function AdminPage() {
  const session = await getServerSession(authOptions)

  // Redirect to login if not authenticated
  if (!session) {
    redirect('/login')
  }

  // Check for admin role (ensure session.user.role exists)
  if (session.user?.role !== 'admin') {
    redirect('/login')
  }

  return (
    <>

      <AdminDashboard />
    </>
  )
}
