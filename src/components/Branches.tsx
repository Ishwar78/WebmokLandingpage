import { MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

const branches = [
  {
    city: "Rohtak",
    address:
      "1st Floor, 129 L, near CR Polytechnic Back Gate, Power House, Model Town, Rohtak, Haryana 124001",
    phone: "+91 8950329919",
  },
  {
    city: "Hissar",
    address:
      "DSB-198, Red Square Market, near by Eminent Mall, Mehta Nagar, Hisar",
    phone: "+91 7800020055",
  },
  {
    city: "Delhi",
    address:
      "Office No: 44, Dwarka Mor Phase 1, Mohan Garden, Uttam Nagar, Delhi",
    phone: "+91 8684031003",
  },
  {
    city: "Gurgaon",
    address: "Sector 29, Gurgaon",
    phone: "+91 9876543213",
  },
  {
    city: "Noida",
    address: "Sector 18, Noida",
    phone: "+91 9876543214",
  },
  {
    city: "Dehradun",
    address:
      "Office No 46, Balliwala Chowk, Vijay Park Extension, Dehradun",
    phone: "+91 7206720663",
  },
  {
    city: "Sirsa",
    address: "Office, Sirsa, Haryana 124507",
    phone: "+91 9680061002",
  },
  {
    city: "Jhajjar",
    address:
      "Charkhi Dadri - Jhajjar Rd, near Bhagat Singh Chowk, Jhajjar, Haryana 124103",
    phone: "+91 7206720234",
  },
];

export function Branches() {
  return (
    <section id="branches" className="branches-section">
      {/* Background glow */}
      <div className="branches-bg-glow" />

      <div className="branches-container">
        {/* Heading */}
        <Reveal>
          <div className="branches-heading">
            <span className="branches-badge">✦ Our Presence</span>
            <h2 className="branches-title">
              We are{" "}
              <span className="text-gradient-brand">Everywhere</span>
            </h2>
            <p className="branches-subtitle">
              Visit your nearest Web Mok branch and start your journey today.
            </p>
          </div>
        </Reveal>

        {/* Cards Grid */}
        <div className="branches-grid">
          {branches.map((branch, index) => (
            <Reveal key={index}>
              <div
                className="branch-card"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {/* City header */}
                <div className="branch-card-header">
                  <div className="branch-city-icon">
                    <MapPin size={16} />
                  </div>
                  <h3 className="branch-city">{branch.city}</h3>
                </div>

                {/* Divider */}
                <div className="branch-divider" />

                {/* Address */}
                <div className="branch-row">
                  <MapPin className="branch-icon" size={15} />
                  <p className="branch-address">{branch.address}</p>
                </div>

                {/* Phone */}
                <div className="branch-row">
                  <Phone className="branch-icon" size={15} />
                  <a
                    href={`tel:${branch.phone}`}
                    className="branch-phone"
                  >
                    {branch.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}