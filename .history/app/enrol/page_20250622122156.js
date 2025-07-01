import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import EnrolPageSection from "@/component/course/EnrolPageSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
  title: 'Enrol Contestant',
  description: 'Talent Hunt Contest',
}
export default function Courses() {
    return (
        <Layout>
            <BreadcrumbSection header='All Contests' title='All Contests'/>
            <EnrolPageSection/>
        </Layout>
    )
}