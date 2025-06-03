import LoginSection from "@/component/authentication/LoginSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
  title: 'Eduor Sign-In Page',
  description: 'Talent Hunt Contest',
}
export default function SignIn() {
    return (
        <Layout>
            <BreadcrumbSection title='Sign In' header='Sign In'/>
            <LoginSection/>
        </Layout>
    )
}