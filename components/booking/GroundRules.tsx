import { ShieldCheck, Clock, Users } from "lucide-react";

export default function GroundRules() {
  return (
    <div className="p-6 border rounded-xl shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-4">Ground Rules</h2>

      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-black mt-1" />
          <span>No parties, loud music, or events allowed.</span>
        </li>

        <li className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-black mt-1" />
          <span>Check-in is from 3:00 PM; check-out is at 11:00 AM.</span>
        </li>

        <li className="flex items-start gap-3">
          <Users className="w-5 h-5 text-black mt-1" />
          <span>Only registered guests are allowed on the property.</span>
        </li>

        <li className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-black mt-1" />
          <span>No smoking inside the property.</span>
        </li>

        <li className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-black mt-1" />
          <span>Respect the neighbors and keep noise to a minimum.</span>
        </li>
      </ul>
    </div>
  );
}
