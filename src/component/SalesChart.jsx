import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { sales } from "../data/sales";

export default function SalesChart() {
  return (
    <div className="shadow-md rounded p-4 h-[500px] flex flex-col">
      <h1 className="text-xl font-semibold mb-3">Sales Chart</h1>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sales}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#16a34a"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
