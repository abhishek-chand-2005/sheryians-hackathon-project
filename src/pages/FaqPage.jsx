import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is a convertible bond? How is this offering different than prior offerings?",
    answer: `HouseHack’s original offerings were to purchase shares of non-voting common stock. 
The current offerings are to purchase convertible bonds. Convertible bonds are a form of hybrid debt 
that provide the bondholder with interest payments along with the potential that their bond principle 
may later convert to stock. HouseHack’s convertible bonds provide a 5% annual interest yield, paid monthly, 
along with automatic conversion terms that have the potential to convert the bond principle to shares 
of non-voting common stock at the conversion price of $1.40/share. Please make sure to review the Private 
Placement Memorandum/Offering Circular, Convertible Bond Agreement, and Subscription Agreement for full details.`,
  },
  {
    question: "Do I have to be accredited to invest?",
    answer: `No, you don’t! HouseHack currently has two offerings at the moment, one limited to 
accredited investors and one that is open to investors, regardless of accreditation.`,
  },
  {
    question: "What makes someone an “accredited investor”? Why does it matter? What is needed to show accreditation status?",
    answer: `Being accredited means that an investor meets the legal definition in Rule 501 (17 CFR § 230.501). 
Typically, this is someone who has a net worth of $1,000,000 (not including primary residence) or annual income 
of $200,000 or more if single or $300,000 or more if married. The SEC permits companies to hold different private 
placement offerings depending on if someone is accredited or not. HouseHack’s Regulation D offering requires 
investors be accredited while its Regulation A offering is open to non-accredited investors. HouseHack requires 
accredited investors to provide a third-party accreditation verification letter. This letter is signed by a 
third-party, stating that they have verified an investor’s status as being accredited. This letter can be obtained 
from multiple places including InvestReady.com or an investor’s licensed attorney, CPA, investment adviser, or broker-dealer.`,
  },
  {
    question: "Can I invest with my IRA or 401(k)?",
    answer: `Yes, however, you will need to work with a company that can perform this investment for you through 
either a Self-Directed IRA or Self-Directed 401(k). Certain requirements must be met to allow an IRA or 401(k) 
account to invest in HouseHack’s private placement offerings. You are welcome to use any company of your choosing, 
so long as they meet the necessary requirements. Our investors often work with directedira.com for this purpose.`,
  },
  {
    question: "Can I invest if I’m not based in the United States?",
    answer: `Yes, international investors can invest. Once you fill out your investment application, 
our team can run the necessary checks to make sure you qualify for the offering.`,
  },
  {
    question: "What forms of payment do you accept? Are there any limits?",
    answer: `For our Regulation D accredited investor offering, we only accept wire transfers. 
For our Regulation A offering, we accept ACH ($50,000 limit), credit card ($25,000 limit), and wire transfers (no limit).`,
  },
  {
    question: "What is Kore? Do you still use Pulley? Where did my shares go?",
    answer: `Kore is our new transfer agent and cap table manager. We are in the process of transferring 
data from Pulley to Kore. Until the transfer is complete, you can still log into Pulley to see your shares. 
Your holdings will be merged onto Kore once the transfer is complete.`,
  },
  {
    question: "What is Texture Capital?",
    answer: `Texture Capital is the broker-dealer firm that HouseHack is working with for its Regulation A 
convertible bond offering. Texture will perform verification checks for Reg. A investors after they apply 
to invest and work with them through any issues.`,
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-[#0f0f1a] py-20 transition-colors duration-300 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
            If you have additional questions, please email us at{" "}
            <a
              href="mailto:ir@househack.com"
              className="text-blue-600 dark:text-purple-400 underline hover:text-blue-800"
            >
              ir@househack.com
            </a>
          </p>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h3 className="text-lg md:text-xl font-medium text-gray-800 dark:text-white">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                )}
              </button>
              <div
                className={`transition-all duration-300 mt-4 text-gray-600 dark:text-gray-300 text-base ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="whitespace-pre-line">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
