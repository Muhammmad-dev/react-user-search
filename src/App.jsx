import { useEffect, useState } from "react"



function App() {
const[user,setUser]=useState([])
const[loading,setLoading]=useState(true)
const[searchm,setSearch]=useState('')


  useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>{
  setUser(data)
  setLoading(false)
})
  },[])


  const filtered=user.filter(f=>f.name.toLowerCase().includes(searchm.toLowerCase()))

  return<>
  <div className="min-h-screen bg-gray-50 p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Foydalanuvchilar</h1>
        <div>
    <input type="text" placeholder="Search..." value={searchm} onChange={(e)=> setSearch(e.target.value) } className="w-full px-4 py-3 mb-8 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2  focus:ring-blue-400" />
  </div>
  <div >
   {loading ? (
  <p>...yuklanyapti</p>
) : filtered.length === 0 ? (
  <p className="text-center text-gray-500 text-lg">Hech narsa topilmadi</p>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {filtered.map(itm => (
      <div key={itm.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{itm.name}</h3>
        <p className="text-gray-600">{itm.email}</p>
      </div>
    ))}
  </div>
)}
  </div>
    </div>
  </div>
  </>

}
export default App