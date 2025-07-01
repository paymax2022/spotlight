import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import EnrolPageSection from "@/component/contact/EnrolPageSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
  title: 'Timeless Entertainment || Contact Us',
  description: 'Talent Hunt Contest',
}
export default function Contact() {
    return (
        <Layout>
            <BreadcrumbSection header='Contact Us' title="Contact us"/>
            <EnrolPageSection/>
        </Layout>
    )
}