// import React from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
// import { CHART_DATA, COLORS } from '../constants';

// const ProjectChart: React.FC = () => {
//   return (
//     <div className="h-[400px] w-full bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
//       <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">Project Distribution by Domain</h3>
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart>
//           <Pie
//             data={CHART_DATA}
//             cx="50%"
//             cy="50%"
//             innerRadius={60}
//             outerRadius={100}
//             paddingAngle={5}
//             dataKey="value"
//           >
//             {CHART_DATA.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip 
//             contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
//             itemStyle={{ color: '#1e293b' }}
//           />
//           <Legend verticalAlign="bottom" height={36}/>
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default ProjectChart;