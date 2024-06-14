import PopularPackage from '../components/Popular/PopularPackage'
import Search from '../components/Search/Search'

export default function TourPackage() {
  return (
    <section className="mt-32 space-y-6">
      <Search />
      <PopularPackage />
    </section>
  )
}
