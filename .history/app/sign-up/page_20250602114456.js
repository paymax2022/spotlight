import RegisterSection from "@/component/authentication/RegisterSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
  title: 'Eduor Sign-Up Page',
  description: 'Talent Hunt Contest',
}
export default function SignUp() {
    return (
        <Layout>
            <BreadcrumbSection header='Sign Up' title='Sign Up'/>
            <RegisterSection/>
        </Layout>
    )
}