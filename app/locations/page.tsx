export default function Locations() {
  const locations = [
    {
      name: "Reykjavík",
      address: "Laugavegur 45",
      city: "101 Reykjavík",
      phone: "555 1234",
      hours: "10:00-18:00",
      icon: "🏢",
    },
    {
      name: "Kópavogur Branch",
      address: "Smáralind",
      city: "201 Kópavogur",
      phone: "555 5678",
      hours: "10:00-20:00",
      icon: "🏬",
    },
    {
      name: "Akureyri Store",
      address: "Hafnarstræti 12",
      city: "600 Akureyri",
      phone: "555 9012",
      hours: "11:00-17:00",
      icon: "🏪",
    },
  ];

  return (
    <>
      <h1 className="text-4xl font-bold my-2">Our Locations</h1>
      <p className="text-gray-600 text-lg mb-8">
        Visit us at any of our stores
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {locations.map((location) => (
          <div
            key={location.name}
            className="border border-gray-200 rounded-lg p-6 bg-linear-to-br from-blue-50 to-sky-50"
          >
            <div className="text-5xl mb-4">{location.icon}</div>
            <h2 className="text-xl font-bold mb-3 text-gray-800">
              {location.name}
            </h2>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>
                  {location.address}
                  <br />
                  {location.city}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span>{location.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>🕐</span>
                <span className="text-sm">{location.hours}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
