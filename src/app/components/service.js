import {
  ShieldCheckIcon,
  EyeIcon,
  BoltIcon,
  ServerIcon,
  CloudIcon,
  DeviceTabletIcon,
  LockClosedIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "SOC Setup",
    description: "Build and optimize your Security Operations Center from the ground up.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Threat Detection",
    description: "Real-time monitoring and identification of cyber threats.",
    icon: EyeIcon,
  },
  {
    title: "Incident Response",
    description: "Fast and effective mitigation of security incidents.",
    icon: BoltIcon,
  },
  {
    title: "Infrastructure Security",
    description: "Protect your servers and network infrastructure.",
    icon: ServerIcon,
  },
  {
    title: "Cloud Security",
    description: "Secure your cloud environments and applications.",
    icon: CloudIcon,
  },
  {
    title: "Endpoint Protection",
    description: "Safeguard devices with advanced endpoint security.",
    icon: DeviceTabletIcon,
  },
  {
    title: "Access Management",
    description: "Manage and control secure user access.",
    icon: LockClosedIcon,
  },
  {
    title: "Security Automation",
    description: "Automate routine security tasks and workflows.",
    icon: CogIcon,
  },
];

export default function ServicesPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-semibold text-center text-blue-700 mb-4 tracking-tight">
        Our Top Services
      </h2>
      <div className="mx-auto w-20 h-1 bg-blue-200 rounded-full mb-14" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="group rounded-2xl p-6 bg-white/70 border border-gray-200 backdrop-blur-md shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-14 h-14 mb-5 rounded-full bg-blue-50 group-hover:bg-blue-100 transition">
              <Icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
