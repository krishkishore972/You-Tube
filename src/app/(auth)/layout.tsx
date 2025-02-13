
interface AuthLayoutProps {
    children: React.ReactNode;
}
const  AuthLayout = ({ children }:AuthLayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:>w-96 sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;