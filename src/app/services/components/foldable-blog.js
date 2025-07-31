import { Shield, Cpu, FileCheck, Settings } from "lucide-react";
import CybersecurityAccordion from "./foldable-blog-client";

// Static data - in a real app, this could be imported from a separate data file
const cybersecurityData = [
  {
    icon: "Shield",
    title: "SOC Operations",
    subtitle: "24/7/365 proactive monitoring and threat response",
    content: {
      intro: "Our Security Operations Center (SOC) provides continuous monitoring, detection, and response to emerging threats—serving as your first line of defense in an ever-evolving cyber threat landscape.",
      features: [
        {
          title: "Continuous Monitoring",
          description: "Log monitoring and event correlation across your network, cloud, and endpoints"
        },
        {
          title: "Intelligent Detection",
          description: "AI-powered behavior analytics, anomaly detection, and threat intelligence feeds"
        },
        {
          title: "Rapid Response",
          description: "Real-time alert triage and incident response playbooks to minimize MTTD and MTTR"
        },
        {
          title: "Hybrid Support",
          description: "Compatible with legacy systems, cloud environments, and custom SIEM configurations"
        }
      ],
      conclusion: "Our SOC is staffed by certified analysts and incident responders who act as an extension of your security team, ensuring rapid containment and minimal business disruption."
    }
  },
  {
    icon: "Cpu",
    title: "Advanced Technology",
    subtitle: "Next-generation cybersecurity powered by AI and automation",
    content: {
      intro: "We leverage cutting-edge cybersecurity technologies designed to outpace modern threat actors. From automation to machine learning, our platform transforms detection into a dynamic, intelligent defense system.",
      features: [
        {
          title: "SOAR Platform",
          description: "Security Orchestration, Automation, and Response for streamlined workflows and policy-driven responses"
        },
        {
          title: "AI-Powered Detection",
          description: "Machine learning models trained on global and environment-specific data to identify unknown threats"
        },
        {
          title: "Extended Detection & Response",
          description: "Unified visibility and analytics across endpoints, networks, servers, and cloud assets"
        },
        {
          title: "Deception Technology",
          description: "Advanced decoys and traps to detect lateral movement and insider threats early"
        }
      ],
      conclusion: "API integrations and custom connectors sync with your existing SIEM, ticketing, and identity platforms for comprehensive operational visibility."
    }
  },
  {
    icon: "FileCheck",
    title: "Compliance & Risk Management",
    subtitle: "Navigate regulatory requirements with confidence",
    content: {
      intro: "Navigating the complex world of regulatory compliance and risk management is critical for today's digital businesses. We provide tailored approaches that align your cybersecurity practices with legal and regulatory obligations.",
      features: [
        {
          title: "Regulatory Frameworks",
          description: "ISO 27001, NIST 800-53, NIST CSF, HIPAA, GDPR, PCI-DSS, SOC 2, and more"
        },
        {
          title: "Risk Assessments",
          description: "Comprehensive evaluations of assets, threats, vulnerabilities, and controls"
        },
        {
          title: "Audit Readiness",
          description: "Pre-audit evaluations, gap assessments, policy development, and evidence collection"
        },
        {
          title: "Third-Party Risk Management",
          description: "Vendor assessments, contract reviews, and continuous supply chain monitoring"
        }
      ],
      conclusion: "Our risk and compliance experts guide your organization in building a mature governance framework that supports both innovation and assurance."
    }
  },
  {
    icon: "Settings",
    title: "Custom Solutions",
    subtitle: "Tailored security solutions for your unique environment",
    content: {
      intro: "We recognize that no two businesses have the same infrastructure, culture, or security priorities. That's why we design customized security solutions tailored to your unique operating environment and growth roadmap.",
      features: [
        {
          title: "Strategic Security Planning",
          description: "Roadmaps for building or maturing your cybersecurity program with business-aligned KPIs"
        },
        {
          title: "vCISO Services",
          description: "Access to seasoned security leaders for governance, compliance, and board communication"
        },
        {
          title: "Custom Dashboards",
          description: "Executive-level visualizations and operational insights tailored to your business metrics"
        },
        {
          title: "Security Architecture",
          description: "Secure configuration of cloud services, network zones, and DevSecOps pipelines"
        }
      ],
      conclusion: "Whether you're undergoing digital transformation, cloud migration, or M&A, we offer scalable solutions that evolve with your business."
    }
  },
];

// Icon mapping for the client component
const iconMap = {
  Shield,
  Cpu,
  FileCheck,
  Settings,
};

export default function CybersecurityServices() {
  // Map icon strings to actual icon components
  const sections = cybersecurityData.map(section => ({
    ...section,
    icon: iconMap[section.icon], // Pure JS version, no TS cast
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Static Header Section - Rendered on Server */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-center text-blue-700 mb-4 tracking-tight leading-tight">
            Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive security solutions designed to protect, detect, and respond to modern cyber threats with enterprise-grade technology and expertise.
          </p>
        </div>

        {/* Interactive Accordion - Client Component */}
        <CybersecurityAccordion sections={sections} />
      </div>
    </div>
  );
}