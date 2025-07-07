import { useNavigate } from "react-router-dom";

export default function TherapistList() {
  const navigate = useNavigate();

  const therapists = [
    { id: 1, name: "Dr. Aditi Sharma", expertise: "Anxiety, Stress", rating: 4.8 },
    { id: 2, name: "Dr. Rahul Verma", expertise: "Depression, Self-esteem", rating: 4.7 },
  ];

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-[#181c2f] via-[#232946] to-[#0f111a] text-white">
      <h1 className="text-4xl font-extrabold text-[#eebbc3] mb-8">Available Therapists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {therapists.map((therapist) => (
          <div key={therapist.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10">
            <div className="text-xl font-bold text-[#eebbc3] mb-2">{therapist.name}</div>
            <div className="text-gray-300 mb-1">Expertise: {therapist.expertise}</div>
            <div className="text-gray-400 mb-4">Rating: {therapist.rating} ⭐</div>
            <button onClick={() => navigate(`/book-therapist/${therapist.id}`)}
              className="bg-[#eebbc3] text-[#232946] px-4 py-2 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition">
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
