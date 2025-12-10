export default function ActivityChart() {
    const data = [
        { month: "YAN", value: 100 },
        { month: "FEV", value: 150 },
        { month: "MAR", value: 120 },
        { month: "APR", value: 180 },
        { month: "MAY", value: 250 },
        { month: "IYUN", value: 200 },
        { month: "IYUL", value: 230 },
        { month: "AUG", value: 110 },
        { month: "SEN", value: 260 },
        { month: "OKT", value: 330 },
        { month: "NOY", value: 360 },
        { month: "DEK", value: 420 },
    ];

    const maxValue = 420;

    return (
        <div className="w-full bg-white rounded-2xl shadow-sm p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-700">Faoliyat</h2>
                <button className="flex items-center gap-1 text-gray-600 hover:text-black">
                    Oy <span>▼</span>
                </button>
            </div>

            {/* Chart */}
            <div className="flex items-end justify-between h-64 px-4">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">

                        {/* Bar */}
                        <div
                            style={{ height: `${(item.value / maxValue) * 100}%` }}
                            className="
                w-5 rounded-full
                bg-gradient-to-t from-blue-600 to-blue-300
                transition-all duration-500
              "
                        ></div>

                        {/* Month */}
                        <p className="mt-3 text-xs font-medium text-gray-500">
                            {item.month}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
}