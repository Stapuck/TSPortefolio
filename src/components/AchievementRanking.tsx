import { useState } from "react";

const AchievementRanking = () => {

  const [flipped, setFlipped] = useState(false);

  return (
    <div className="grid md:grid-cols-2 gap-8">
            {/* Achievements */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Médailles & Courses</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  2025 Continental Championship KX1 time trial - Gold Medal
                </li>
                <li>2025 Continental Championship KX1 H2H - Gold Medal</li>
                <li>2025 Continental Championship C1 slalom - Bronze Medal</li>
                <li>2018 Youth Olympics game C1 slalom - Gold Medal</li>
                <li>2018 Youth Africa Games C1 slalom - Gold Medal</li>
                <li>2018 Youth Africa Games C1 sprint - bronze Medal</li>
              </ul>
            </div>

            {/* Classement */}
            {/* todo : faire un composant  */}
            <div
              className="w-full cursor-pointer perspective transform transition-transform duration-300 hover:scale-105 "
              onClick={() => setFlipped(!flipped)}
            >
              {/* Indicateurs */}
              <div className="flex space-x-2 m-3 justify-center">
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    flipped ? "bg-gray-400" : "bg-black"
                  }`}
                ></span>
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    flipped ? "bg-black" : "bg-gray-400"
                  }`}
                ></span>
              </div>
              <div
                className={`relative w-full h-auto transition-transform duration-500 transform-style-preserve-3d ${
                  flipped ? "rotate-y-180" : ""
                }`}
              >
                {/* Face avant */}
                <div className="absolute w-full rounded-lg p-6 shadow-md space-y-4 bg-blue-50 backface-hidden">
                  <h3 className="font-semibold text-xl">
                    Classements Mondiaux C1 slalom
                  </h3>
                  <div className="flex justify-between">
                    <span>Senior:</span>
                    <span>#85</span>
                  </div>
                  <div className="flex justify-between">
                    <span>U23:</span>
                    <span>#27</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Continental:</span>
                    <span>#3</span>
                  </div>
                </div>

                {/* Face arrière todo: revoir couleur bg  */}
                <div className="absolute w-full rounded-lg p-6 shadow-md space-y-4 bg-green-50 backface-hidden rotate-y-180">
                  <h3 className="font-semibold text-xl">
                    Classements Mondiaux Kayak Cross
                  </h3>
                  <div className="flex justify-between">
                    <span>Senior:</span>
                    <span>#12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>U23:</span>
                    <span>#5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Continental:</span>
                    <span>#1</span>
                  </div>
                </div>
              </div>

              <style>
                {`
                .perspective {
                  perspective: 1000px;
                }
                .backface-hidden {
                  backface-visibility: hidden;
                }
                .rotate-y-180 {
                  transform: rotateY(180deg);
                }
                .transform-style-preserve-3d {
                  transform-style: preserve-3d;
                }
              `}
              </style>
            </div>
          </div>
  )
}

export default AchievementRanking