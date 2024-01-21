export function AmountPending({
    title,
    amount,
    orderCount
}) {
    return (
        <div className="">
            <div className=" flex flex-grow flex-col justify-center shadow-sm border-2 border-gray-100 rounded-lg min-w-[400px]  p-4">
                <div className="flex flex-row justify-start items-center text-gray-500">
                    <p className="text-lg font-normal">{title}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mx-2 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>

                <div className="flex flex-row justify-between items-center py-2">
                    <p className="font-semibold text-3xl mr-4">₹ {amount}</p>

                    {orderCount ? (
                        <div className="flex flex-row justify-center items-center font-medium underline text-[#146eb4] ml-4">
                            <p>{orderCount} orders</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )

}