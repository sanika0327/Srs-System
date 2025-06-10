import CustomerForm from "@/components/customer-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <CustomerForm />
      </div>
    </main>
  )
}
