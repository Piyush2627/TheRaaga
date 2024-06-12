import CourseFeaturesCard from "./CourseFeaturesCard";
import "../../assets/images/GroupSinging.jpg";
function CourseFeatures() {
  return (
    <div>
      <div className="rounded-lg">
        <div className="bg-cover bg-center">
          <div className="relative z-30 h-60 rounded-t-lg bg-[url(./assets/images/GroupSinging.jpg)] bg-cover bg-center">
            <div className="absolute -z-20 h-full w-full bg-gradient-to-t from-revolver-950 to-transparent"></div>
            <div className="pt-48 text-center font-playfair">
              <p className="text-5xl font-bold text-grandis-300">
                Course Features
              </p>
              <p className="text-grandis-300">
                Join The Raaga's Indian Classical Singing classes and immerse
                yourself in a transformative musical journey. Learn from the
                best, with courses designed to refine your skills and deepen
                your understanding of this exquisite art form.
              </p>
              <hr className="mt-10" />
            </div>
          </div>
          <div className="mt-24 flex flex-col gap-12 pb-10">
            <div className="flex justify-between gap-12">
              <CourseFeaturesCard
                heading="Origin"
                contain="Courses designed by world-renowned Indian classical musicians and educators."
              />
              <CourseFeaturesCard
                heading="Material"
                contain="Access to high-quality, professionally recorded video lessons and comprehensive study materials."
              />
              <CourseFeaturesCard
                heading="Dimensions"
                contain="Course Duration: 3 months, Class Duration: 1 hour per session, Flexible timings available."
              />
            </div>
            <div className="flex justify-around gap-12">
              <CourseFeaturesCard
                heading="Finish"
                contain="Each lesson is meticulously structured to provide in-depth knowledge and practical training."
              />
              <CourseFeaturesCard
                heading="Includes"
                contain="Enrollment includes weekly live practice sessions, downloadable resources, and personalized feedback from instructors."
              />
              <CourseFeaturesCard
                heading="Considerations"
                contain="Courses are suitable for all skill levels. Personalized attention ensures you progress at your own pace."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseFeatures;
