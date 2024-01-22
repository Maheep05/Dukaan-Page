import { AmountPending } from "./AmountPending";
import { AmountProcessed } from "./AmountProcessed";
import { OrderDetails } from "./OrderDetails";

import { RevenueCard } from "./RevenueCard";

export function HeroSection() {
    return (
        <div className="mx-4 w-full pl-48">
            <div className="flex justify-between p-6 ">
                <p className="text-black font-semibold text-xl">Overview</p>
                <button className="flex justify-between border-2 p-1 rounded-md">
                    <p className="px-2 text-gray-500">This Month</p>
                    <svg xmlns="http://www.'w3.org/20'00/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>


            <div>
                <div className="flex flex-row gap-6 justify-items-start m-4">
                    <RevenueCard amount={"2,312.23"} title={'Next Payout'} orderCount={'23'} paymentDue={true} time={'4:00'}></RevenueCard>
                    <AmountPending amount={'92,312.20'} title={'Amount Pending'} orderCount={'13'} ></AmountPending>
                    <AmountProcessed amount={'23,92,312.19'} title={'Amount Processed'}  ></AmountProcessed>
                </div>
            </div>


            <div className="">
                <div className="flex justify-between p-6 ">
                    <h1 className="text-black font-semibold text-xl">Transactions | This Month</h1>
                </div>
            </div>


            <div>
                <div className="flex px-6 gap-4">
                    <button className="flex text-gray-600 bg-gray-300 px-4 py-2 rounded-3xl items-center justify-center">
                        <h1>Payouts (22)</h1>
                        </button>
                    <button className="flex text-white bg-[#146eb4]  px-4 py-2 rounded-3xl items-center justify-center">
                        <h1>Refunds (6)</h1>
                      
                    </button>
                </div>
            </div>

            <div>
                <OrderDetails></OrderDetails>
            </div>
        </div>

    )
}