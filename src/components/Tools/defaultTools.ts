import { Tool } from "../../types/tool";
import Calendar from "./icons/calendar.png";
import Certification from "./icons/certification.png";
import Community from "./icons/community.png";
import Courses from "./icons/courses.png";
import Design from "./icons/design.png";
import Map from "./icons/map.png";

export const defaultTools: Array<Tool> = [
  {
    header: "Responsible AI Design Assistant ",
    description:
      "Responsible AI Design Assistant assesses work in development, to anticipate problems and future-proof AI systems.",
    link: "https://designassistant.responsible.ai/",
    icon: Design,
  },
  {
    header: "RAI Industry Heat Map",
    description:
      "Responsible AI Industry Heat Map provides realtime examples to where AI is currently in use.",
    link: "https://map.responsible.ai/",
    icon: Map,
  },
  {
    header: "Responsible AI E-Learning Courses ",
    description:
      "Responsible AI E-Learning Courses developed in partnership with TIQ Software.",
    link: "https://www.tiqsoftware.com/responsible-ai/",
    icon: Courses,
  },
  {
    header: "Responsible AI Community Portal ",
    description:
      "Responsible AI Community Portal provides access to a curated library of trusted resources.",
    link: "https://portal.responsible.ai/",
    icon: Community,
  },
  {
    header: "RAI Events Calendar connects  ",
    description:
      "RAI Events Calendar connects members to the latest events in responsible AI.",
    link: "https://www.responsible.ai/calendar",
    icon: Calendar,
  },
  {
    header: "RAI Certification Beta ",
    description:
      "RAI Certification Beta is the world’s first independent, accredited certification program of its kind.",
    link: "https://www.responsible.ai/certification",
    icon: Certification,
  },
];
