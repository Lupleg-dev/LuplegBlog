import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "50+ Projects Completed",
    "5+ Years of Developing softwares",
    "99% Client Satisfaction",
    "20K+ OpenSource Contributor",
    "Authored In-Depth Course on Lupleg Academy",
    "Contributed as a Technical Course Reviewer 📝",
    "Recipient of the Hackerlab Award 🏆",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
