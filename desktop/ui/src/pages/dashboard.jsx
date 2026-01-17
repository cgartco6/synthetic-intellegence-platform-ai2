import StatCard from "../components/StatCard"

export default function Dashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">SYNTHEDU Command Center</h1>

      <div className="grid grid-cols-4 gap-4">
        <StatCard title="AI Agents" value="12 Active" />
        <StatCard title="Courses Generated" value="124" />
        <StatCard title="Learners" value="1,842" />
        <StatCard title="Certificates" value="611" />
      </div>
    </>
  )
}
