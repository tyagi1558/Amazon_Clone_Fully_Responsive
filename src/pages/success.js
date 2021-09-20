import { CheckCircleIcon } from "@heroicons/react/outline"
import Header from "../components/Header"

function success() {
    return (
        <div className="bg-gray-100 h-screen">
            <Header />

            <main className="max-w-screen-lg mx-auto">
                <div className="flex flex-col p-10 bg-white">
                    <div className="flex items-center space-x-2 mb-5">
                        <CheckCircleIcon className="text-green h-10" />
                        <h1 className="text-3xl">Thank you, your order has been confirmed!</h1>
                    </div>
                </div>
            </main>


        </div>
    )
}

export default success
