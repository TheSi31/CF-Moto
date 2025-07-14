import About from "@/components/About/About";
import Advantage from "@/components/Advantage/Advantage";
import Routes from "@/components/Routes/Routes";
import Test from "@/components/Test/Test";
import Photo from "@/components/Photo/Photo";
import Video from "@/components/Video/Video";
import Team from "@/components/Team/Team";
import Conditions from "@/components/Conditions/Conditions";
import Special from "@/components/Special/Special";
import Present from "@/components/Present/Present";
import Question_answer from "@/components/Question-answer/Question_answer";
import Services from "@/components/Services/Services";
import Contacts from "@/components/Contacts/Contacts";

export default function Home() {
  return (
    <main>
      <About />
      <Advantage />
      <Routes />
      <Test />
      <Photo />
      <Video />
      <Team />
      <Conditions />
      <Special />
      <Present />
      <Question_answer />
      <Services />
      <Contacts />
    </main>
  );
}
