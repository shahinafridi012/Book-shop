import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


const LineChartt = () => {
    const data = [{name: 'The Silent Patient', uv: 100, pv: 2400, amt: 2500},
    {name: 'Educated', uv: 600, pv: 2400, amt: 2700},
    {name: 'Becoming', uv: 800, pv: 2400, amt: 2900},
    



    ]
    
    return (
        <div className='container mx-auto space-y-4'>
            <h1 className='text-4xl font-bold text-center uppercase'>most selling in book on my website </h1>
            <LineChart width={400} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
        </div>
    );
};

export default LineChartt;