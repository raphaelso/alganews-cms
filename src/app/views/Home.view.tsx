import usePageTitle from "../../core/hooks/usePageTitle"
import PostList from "../features/PostList.features"
import UserEarnings from "../features/UserEarnings.features"
import UserPerformance from "../features/UserPerformance.features"
import UserTopTags from "../features/UserTopTags.features"
import DefaultLayout from "../layouts/Default"

export default function Home () {
  usePageTitle('Home')

  return <DefaultLayout>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 32 }}>
      <UserTopTags />
      <UserEarnings />
    </div>
    <UserPerformance />
    <PostList />
  </DefaultLayout>
}