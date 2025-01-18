import { useState, useEffect } from "react";
import { Play, Pause, RefreshCw } from "lucide-react";
import HyperthonText from "./components/header";

const INITIAL_TIME = 3*60*60;

const COMMENTS = [
  "Welcome to Hyperthon—where everyone's hyper, except your code, which is asleep. 💤",
  "Why write tests? Your entire code is already a bug. 🐛",
  "Looking at your code feels like reading hieroglyphs. 📜",
  "Wow, that error message has been there for hours. Doing great! 👏",
  "Your code looks like it was written at 3 AM... oh wait, it was. 🕒",
  "Are you coding or just making the keyboard feel important? ⌨️",
  "Your variable names are so descriptive... 'x', 'y', and 'z', right? 🤔",
  "Don't worry, it's not a bug—it's an unintentional feature. 🧪",
  "At Hyperthon, the only thing moving faster than the timer is your panic. ⏳💨",
  "who needs a personal life when you have code that doesn’t compile? 💔",
  "Fun fact: Sleeping during a hackathon is illegal. Did you not read the rules? 🛏️❌",
  "That moment when you realize you spent 3 hours solving the wrong problem. Classic. 🎭",
  "You’re either debugging or writing an apology letter to your team. 📝",
  "Your teammate just committed 'final_final_final_version2'. Good luck. 😬",
  "The way you’re writing code, even ChatGPT would ask for a raise. 🤖",
  "You just spent 20 minutes fixing an issue caused by a missing semicolon. 😭",
  "If procrastination were a sport, you'd already have a gold medal. 🥇",
  "Keep refreshing the GitHub page, maybe your code will magically improve. 🔄",
  "That’s not spaghetti code—it’s a whole Italian restaurant. 🍝",
  "Your code doesn’t need AI, it needs CPR. 🚑",
  "Remember, the judges can’t unsee your code, so good luck with that. 👀",
  "Your teammate just Googled 'What is an API?'—you’re doomed. 💀",
  "Sure, just add another `if` statement—what could go wrong? 🤷‍♂️",
  "You’ll finish your code just in time to start debugging it forever. ⌛",
  "Don’t worry, you’re not slow. The bugs are just faster. 🐌",
  "Your team should win an award for 'Most Tabs Open in Chrome'. 🏆",
  "Blink twice if you’ve given up. Oh wait, you stopped blinking an hour ago. 👁️",
  "Nice! You’re now the official sponsor of the 'Console.log' debugging method. 📊",
  "That moment when ‘npm install’ takes longer than writing the code. 🕰️",
  "You deployed it? Brave. Let’s see how fast it crashes. 🌍🔥",
  "If code reviews were exams, you'd have failed with negative marks. ❌",
  "Is your internet slow, or are you just buffering IRL? 🌐",
  "Keep telling yourself, 'It works on my machine,' while the demo crashes. 🖥️💣",
  "Looks like you’re trying to reinvent the wheel... but it’s still square. 🔲",
  "You’ve officially broken more keyboards than records today. 🪓",
  "Oh, you’re refactoring now? Bold move, 5 minutes before the deadline. ⏳",
  "Keep looking at the timer, it's not gonna code for you. ⏳",
  "Still staring at the timer? Code faster! 🚀",
  "Debugging isn't magic. Start fixing bugs, not staring at them! 🐛",
  "You just Googled the same thing for the fifth time, didn't you? 🧐",
  "Your code looks like it needs a vacation... or maybe just a fix. 🏖️",
  "Coffee won't save you from your spaghetti code, but go ahead. ☕",
  "Congrats! You're officially the CEO of StackOverflow refreshers. 🎓",
  "Writing comments? Bold move for someone with broken logic. ✍️",
  "Your code works! Just kidding, it crashed again. 💥",
  "Git commit, or did you just write a feature nobody asked for? 🤔",
  "Don't worry, deadlines are just suggestions... said no one ever. ⏰",
  "Copy-pasting code is fun until it doesn't run. ⚠️",
  "Keep refreshing StackOverflow like it's social media. 📲",
  "Your teammate just whispered, 'Do we have a plan?' 👀",
  "Remember, 'Ctrl+Z' is not a project management tool. ⏮️",
  "You're 99% done! (with 99% bugs left to fix). 🐞",
  "Documentation is for the weak, right? Until you need it. 📚",
  "If coding was easy, everyone would do it. Oh wait, everyone is. 🤷‍♂️",
  "Just a gentle reminder: the prize won't debug your code for you. 🏆",
  "Is it a hackathon or a 'stare-at-the-screen-athon'? 🖥️",
];

function App() {
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [currentComment, setCurrentComment] = useState(COMMENTS[0]);
  const [isFinished, setIsFinished] = useState(false);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            setIsRunning(false);
            setIsFinished(true);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    const commentInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * COMMENTS.length);
      setCurrentComment(COMMENTS[randomIndex]);
    }, 8000);

    return () => clearInterval(commentInterval);
  }, []);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTimeLeft(INITIAL_TIME);
    setIsRunning(false);
    setIsFinished(false);
  };

  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="swirl" />
          <div className="swirl" />
          <div className="swirl" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        </div>

        <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-8">
          <img
            src="src/public/images/kiit logo.png"
            alt="Sponsor 1"
            className="w-20"
          />
          <img
            src="src/public/images/gfg new logo 4.png"
            alt="Sponsor 2"
            className="w-32"
          />
        </div>

        {/* Header */}
        <div className="relative z-10">
          <HyperthonText />
        </div>

        {/* Timer */}
        <div className="relative z-10 flex flex-col items-center mt-10 mb-40">
          {isFinished ? (
            <div className="text-center animate-fade-in">
              <h1 className="text-6xl font-bold mb-4 cyber-gradient font-['Orbitron']">
                Time's Up! 🎉
              </h1>
              <p className="text-2xl text-gray-300">
                Great job on participating in the Hyperthon!
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-['Orbitron'] font-semibold mb-1 neon-text">
                Ends in :
              </h2>
              <div className="text-8xl font-bold font-['Orbitron'] tracking-wider mb-4 cyber-gradient">
                {formatTime(timeLeft)}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={toggleTimer}
                  className="bg-transparent border-2 border-[#ff0080] text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#ff0080]/25 hover:bg-[#ff0080]/10"
                >
                  {isRunning ? (
                    <>
                      <Pause size={24} /> Pause
                    </>
                  ) : (
                    <>
                      <Play size={24} /> Start
                    </>
                  )}
                </button>

                <button
                  onClick={resetTimer}
                  className="bg-transparent border-2 border-[#8000ff] text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#8000ff]/25 hover:bg-[#8000ff]/10"
                >
                  <RefreshCw size={24} /> Reset
                </button>
              </div>
            </>
          )}
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center px-8 py-4 mb-10">
          <img
            src="src/public/images/grouped.png"
            alt="Sponsor 1"
            className="w-64 h-auto"
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-[#ff0080]/30">
        <div className="container mx-auto py-3 px-6">
          <p className="text-gray-300 text-lg text-center transition-all duration-500 animate-pulse">
            {currentComment}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
