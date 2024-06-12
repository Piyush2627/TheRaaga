interface CourseFeaturesCardProps {
  heading: string;
  contain: string;
}

function CourseFeaturesCard({ heading, contain }: CourseFeaturesCardProps) {
  return (
    <>
      <div className="">
        <p className="mt-4 text-xl font-bold text-grandis-300">{heading}</p>
        <p className="text-grandis-300">{contain}</p>
      </div>
    </>
  );
}

export default CourseFeaturesCard;
