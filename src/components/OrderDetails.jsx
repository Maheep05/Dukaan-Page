export function OrderDetails() {

    const orderList = [

        { id: '#281209', status: 'Successful', transactionId: 'TRX123456', refundDate: 'Today, 8:45 PM', amount: '₹1125.00' },
        { id: '#281210', status: 'Processing', transactionId: 'TRX789012', refundDate: 'Tomorrow, 10:00 AM', amount: '₹950.50' },
        { id: '#281211', status: 'Successful', transactionId: 'TRX345678', refundDate: 'Yesterday, 3:30 PM', amount: '₹750.00' },
        { id: '#281212', status: 'Successful', transactionId: 'TRX901234', refundDate: 'Today, 11:20 AM', amount: '₹2000.00' },
        { id: '#281213', status: 'Processing', transactionId: 'TRX567890', refundDate: 'Tomorrow, 9:00 AM', amount: '₹1800.00' },
        { id: '#281214', status: 'Processing', transactionId: 'TRX098765', refundDate: 'Yesterday, 2:00 PM', amount: '₹500.00' },
        { id: '#281215', status: 'Successful', transactionId: 'TRX456789', refundDate: 'Today, 10:30 AM', amount: '₹3000.00' },
        { id: '#281216', status: 'Processing', transactionId: 'TRX987654', refundDate: 'Tomorrow, 11:30 AM', amount: '₹1200.00' },
        { id: '#281217', status: 'Processing', transactionId: 'TRX654321', refundDate: 'Yesterday, 4:00 PM', amount: '₹900.00' },
        { id: '#281218', status: 'Successful', transactionId: 'TRX234567', refundDate: 'Today, 9:45 AM', amount: '₹1500.00' },
        { id: '#281209', status: 'Successful', transactionId: 'TRX123456', refundDate: 'Today, 8:45 PM', amount: '₹1125.00' }

    ]
    return (
        <div>
            <div className="flex justify-between items-center p-6">
                <div className='flex items-center bg-white border-2 text-gray-500  rounded-md p-2 max-w-[300px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" className='w-4 h-4 rounded-full ' stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>


                    <input type="text" placeholder="Order Id or Transactions" className='px-2 rounded-full focus:outline-none ' />
                </div>
                <div className="flex gap-4">
                    <button className="flex flex-row justify-between items-center gap-2 border-2 p-2 rounded-lg">
                        <h1>Sort</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                        </svg>

                    </button>
                    <button className="border-2 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>

                    </button>
                </div>
            </div>

            <div>
                <table className="w-full">
                    <colgroup>
                        <col className="w-1/5" />
                        <col className="w-1/5" />
                        <col className="w-1/5" />
                        <col className="w-1/5" />
                        <col className="w-1/5" />
                    </colgroup>
                    <thead className="text-[#4D4D4D] bg-[#F2F2F2]">
                        <tr>
                            <th className="px-3 py-[10px] text-left whitespace-nowrap text-sm font-medium rounded-l" colSpan="1">Order ID</th>
                            <th className="px-3 py-[10px] whitespace-nowrap text-left text-sm font-medium" colSpan="1">Status</th>
                            <th className="px-3 py-[10px] whitespace-nowrap text-left text-sm font-medium" colSpan="1">Transaction ID</th>
                            <th className="px-3 py-[10px] whitespace-nowrap text-left text-sm font-medium" colSpan="1">Refund Date</th>
                            <th className="px-3 py-[10px] whitespace-nowrap text-right text-sm font-medium rounded-r" colSpan="1">Order Amount</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-[#E6E6E6]">
                        {orderList.map((order) => (
                            <tr key={order.id} className="text-sm relative border-b-2 border-gray-200">
                                <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">{order.id}</td>
                                <td className=" py-[10px] whitespace-nowrap flex  items-center text-[#1A181E]">
                                    <span className={`bg-${order.status === 'Successful' ? 'green-500' : 'gray-400'} w-[10px] h-[10px] rounded-full mx-2`}></span>

                                    {order.status}
                                </td>
                                <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">{order.transactionId}</td>
                                <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">{order.refundDate}</td>
                                <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right ">{order.amount}</td>
                                <span className=" border-b-2 border-gray-700"></span>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}