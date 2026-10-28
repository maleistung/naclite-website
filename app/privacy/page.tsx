import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
export const metadata: Metadata = { title: "Privacy Policy" };
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 2026" sections={[
      { h: "Who we are", p: ["Naclite LLC (\"Naclite\", \"we\", \"us\") is a limited liability company registered in Sheridan, Wyoming, United States. This policy explains how we handle information when you visit naclite.com or contact us."] },
      { h: "Information we collect", p: ["When you contact us, we receive the information you choose to provide, such as your name, email address, company, and message.", "Our website may collect standard technical information such as browser type, pages visited, and approximate location, through server logs or privacy-respecting analytics."] },
      { h: "How we use it", p: ["We use your information to respond to inquiries, operate and improve the website, and meet legal obligations. We do not sell personal information."] },
      { h: "Sharing", p: ["We share information only with service providers who help us operate (such as hosting and email), and where required by law."] },
      { h: "Retention and security", p: ["We keep information only as long as needed for the purposes above and take reasonable measures to protect it."] },
      { h: "Your rights", p: ["Depending on where you live, you may have rights to access, correct, or delete your personal information. To exercise them, email contact@naclite.com."] },
      { h: "Contact", p: ["Questions about this policy can be sent to contact@naclite.com or to Naclite LLC, 1309 Coffeen Avenue, STE 1200, Sheridan, Wyoming 82801, United States."] },
    ]} />
  );
}
