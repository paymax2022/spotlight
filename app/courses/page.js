import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import AllCourseSection from "@/component/course/AllCourseSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
  title: 'Eduor Courses Page',
  description: 'Talent Hunt Contest',
}
export default function Courses() {
    return (
        <Layout>
            <BreadcrumbSection header='All Contests' title='All Contests'/>
            <AllCourseSection/>
        </Layout>
    )
}