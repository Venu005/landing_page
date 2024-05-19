import FileHandler from "./file-handler";

const FAQRight = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[16px] text-left text-lg text-neutral-01-100 font-poppins">
      <FileHandler
        whatsTheImpactOfAIOnProsp="What is outreach AI?"
        className="disabled"
      />
      <FileHandler whatsTheImpactOfAIOnProsp="What is AI personalization?" />
      <FileHandler whatsTheImpactOfAIOnProsp="What's the impact of AI on prospecting?" />
      <FileHandler whatsTheImpactOfAIOnProsp="Can AI replace human interaction in outreach?" />
      <FileHandler whatsTheImpactOfAIOnProsp="How does AI improve outreach effectiveness?" />
      <FileHandler whatsTheImpactOfAIOnProsp="What are the benefits of using AI in outreach?" />
      <FileHandler whatsTheImpactOfAIOnProsp="Can AI help in optimizing outreach campaigns?" />
      <FileHandler whatsTheImpactOfAIOnProsp="How to generate personalized campaigns with lemlist AI?" />
    </div>
  );
};

export default FAQRight;
