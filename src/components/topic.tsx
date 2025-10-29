import { useState } from "react";
import {
  FaComments,
  FaUsers,
  FaCoffee,
  FaVolumeUp,
  FaHandPaper,
  FaEye,
  FaClock,
  FaMicrophone,
  FaHeadphones,
} from "react-icons/fa";
import CommsProcess from "../assets/The-Communication-Process-min.png"
import leaveMail from "../assets/leave-mail.png"

interface Topic {
  title: string;
  description: string;
  icon: any;
  category: string;
  color: string;
  extra?: string;
  image?: any;
}

const TopicsSection = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const topics: Topic[] = [
    {
      title: "Process of Communication",
      description:
        "Understanding the fundamental flow of information between sender and receiver through various channels.",
      icon: FaComments,
      category: "Foundation",
      color: "blue",
      extra:
        "The process of communication involves a sender, message, channel, receiver, and feedback. Effective communication ensures clarity, understanding, and response.",
      image: `${CommsProcess}`, // replace with your diagram path
    },
    {
      title: "Formal Communication",
      description:
        "Professional communication in structured settings, including business meetings and presentations.",
      icon: FaUsers,
      category: "Professional",
      color: "purple",
      extra:
        "Formal communication follows established channels like reports, presentations, or official meetings. It ensures professionalism and clarity in workplaces.",
    },
    {
      title: "Informal Communication",
      description:
        "Casual interactions and conversational skills for everyday social and workplace environments.",
      icon: FaCoffee,
      category: "Social",
      color: "green",
      extra:
        "Informal communication happens naturally between people, often outside structured settings. It builds relationships and strengthens collaboration.",
    },
    {
      title: "Verbal Communication",
      description:
        "Both spoken and written forms of language-based communication and their effectiveness.",
      icon: FaVolumeUp,
      category: "Verbal",
      color: "yellow",
      extra:
        "Verbal communication is the use of spoken or written words to exchange ideas. Tone, clarity, and structure determine its effectiveness.",
    },
    {
      title: "LSRW Skills",
      description:
        "Comprehensive development of Listening, Speaking, Reading, and Writing abilities.",
      icon: FaHeadphones,
      category: "Core Skills",
      color: "red",
      extra:
        "LSRW (Listening, Speaking, Reading, Writing) are the four core skills of language learning. Balanced development ensures strong communication abilities.",
    },
    {
      title: "Proxemics",
      description:
        "Understanding personal space, territorial behavior, and spatial communication dynamics.",
      icon: FaUsers,
      category: "Non-Verbal",
      color: "indigo",
      extra:
        "Proxemics refers to the study of personal space and how distance affects communication. Comfort zones differ culturally and personally.",
    },
    {
      title: "Kinesics",
      description:
        "Body language interpretation including gestures, posture, and movement patterns.",
      icon: FaHandPaper,
      category: "Non-Verbal",
      color: "indigo",
      extra:
        "Kinesics is communication through body movements like gestures, posture, and facial expressions. It often conveys more than spoken words.",
    },
    {
      title: "Haptics",
      description:
        "The role of touch in communication and its cultural and professional implications.",
      icon: FaHandPaper,
      category: "Non-Verbal",
      color: "indigo",
      extra:
        "Haptics is the use of touch in communication. It conveys emotions like support or empathy but varies across cultures and contexts.",
    },
    {
      title: "Oculesics",
      description:
        "Eye contact patterns, gaze behavior, and visual communication strategies.",
      icon: FaEye,
      category: "Non-Verbal",
      color: "indigo",
      extra:
        "Oculesics is communication through eye behavior, such as eye contact, gaze, or blinking. It signals attention, confidence, or discomfort.",
    },
    {
      title: "Chronemics",
      description:
        "Time-based communication including punctuality, pacing, and temporal expectations.",
      icon: FaClock,
      category: "Non-Verbal",
      color: "indigo",
      extra:
        "Chronemics is the study of time in communication. Being punctual or late sends non-verbal cues about respect and priorities.",
    },
    {
      title: "Vocalics",
      description:
        "Voice qualities including tone, pitch, volume, and their impact on message delivery.",
      icon: FaMicrophone,
      category: "Vocal",
      color: "pink",
      extra:
        "Vocalics refers to how tone, pitch, and volume affect meaning. A single phrase can convey different emotions depending on vocal delivery.",
    },
    {
      title: "Phonemics",
      description:
        "Sound patterns in language and their role in effective pronunciation and articulation.",
      icon: FaVolumeUp,
      category: "Vocal",
      color: "pink",
      extra:
        "Phonemics studies sound patterns in language. Clear pronunciation and articulation improve understanding in spoken communication.",
    },
    {
      title: "Technical Writing",
      description:
        "Understanding of Technical writing and how it should be written.",
      icon: FaVolumeUp,
      category: "Vocal",
      color: "pink",
      extra:
        "Technical writing is a concise and precise form of communication that focuses on clarity and accuracy, ensuring complex information is easy to understand. It aims to be on point, delivering essential details without unnecessary content. Technical writing emphasizes proper formatting, justification, and uniformity to maintain professional standards. It avoids clichés and focuses on factual writ that respects chronomics, ensuring timely and context-appropriate communication. In summary, it delivers clear, structured, and effective information.",
	image: `${leaveMail}`
    },

  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-200 bg-blue-50 text-blue-500",
      purple: "border-purple-200 bg-purple-50 text-purple-500",
      green: "border-green-200 bg-green-50 text-green-500",
      yellow: "border-yellow-200 bg-green-50 text-yellow-500",
      red: "border-red-200 bg-red-50 text-red-500",
      indigo: "border-indigo-200 bg-indigo-50 text-indigo-500",
      pink: "border-pink-200 bg-pink-50 text-pink-500",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Communication Topics Covered
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Explore the comprehensive range of verbal and non-verbal communication concepts studied throughout the course.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            const colorClasses = getColorClasses(topic.color);
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 ${colorClasses} group cursor-pointer`}
                onClick={() => setSelectedTopic(topic)}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon
                    className={`w-6 h-6 sm:w-8 sm:h-8 ${
                      topic.color === "blue"
                        ? "text-blue-500"
                        : topic.color === "purple"
                        ? "text-purple-500"
                        : topic.color === "green"
                        ? "text-green-500"
                        : topic.color === "yellow"
                        ? "text-yellow-500"
                        : topic.color === "red"
                        ? "text-red-500"
                        : topic.color === "indigo"
                        ? "text-indigo-500"
                        : "text-pink-500"
                    } group-hover:scale-110 transition-transform duration-300`}
                  />
                  <span className="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
                    {topic.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {topic.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {topic.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedTopic && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedTopic(null)}
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {selectedTopic.title}
            </h2>
            <p className="text-gray-600 mb-4">{selectedTopic.extra}</p>
            {selectedTopic.image && (
              <img
                src={selectedTopic.image}
                alt={selectedTopic.title}
                className="rounded-lg w-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default TopicsSection;
