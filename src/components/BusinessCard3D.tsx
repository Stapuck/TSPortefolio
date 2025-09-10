// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone } from "lucide-react";

// const BusinessCard3D: React.FC = () => {
//   const [rotate, setRotate] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width;
//     const y = (e.clientY - rect.top) / rect.height;
//     setRotate({ x: (y - 0.5) * 20, y: (x - 0.5) * 20 });
//   };

//   const handleMouseLeave = () => {
//     setRotate({ x: 0, y: 0 });
//   };

//   return (
//     <motion.div
//       className="w-80 h-48 rounded-2xl shadow-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col justify-center items-center"
//       style={{
//         transformStyle: "preserve-3d",
//       }}
//       animate={{ rotateX: rotate.x, rotateY: rotate.y }}
//       transition={{ type: "spring", stiffness: 100, damping: 10 }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//     >
//       <h2 className="text-xl font-bold">John Doe</h2>
//       <p className="text-sm opacity-80">Développeur Web</p>
//       <div className="mt-4 space-y-1 text-sm">
//         <p className="flex items-center gap-2">
//           <Mail size={16} /> john@example.com
//         </p>
//         <p className="flex items-center gap-2">
//           <Phone size={16} /> +33 6 12 34 56 78
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// export default BusinessCard3D;


// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { Mail, Phone } from "lucide-react";

// const BusinessCard3D: React.FC = () => {
//   // Motion values pour rotation
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // On transforme le drag X/Y en rotation
//   const rotateX = useTransform(y, [-100, 100], [15, -15]);
//   const rotateY = useTransform(x, [-100, 100], [-15, 15]);

//   return (
//     <motion.div
//       className="w-80 h-48 rounded-2xl shadow-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col justify-center items-center cursor-grab active:cursor-grabbing"
//       style={{
//         rotateX,
//         rotateY,
//         transformStyle: "preserve-3d",
//       }}
//       drag
//       dragElastic={0.18}
//       dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
//     >
//       <h2 className="text-xl font-bold">John Doe</h2>
//       <p className="text-sm opacity-80">Développeur Web</p>
//       <div className="mt-4 space-y-1 text-sm">
//         <p className="flex items-center gap-2">
//           <Mail size={16} /> john@example.com
//         </p>
//         <p className="flex items-center gap-2">
//           <Phone size={16} /> +33 6 12 34 56 78
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// export default BusinessCard3D;


// import { useState } from "react";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { Mail, Phone, QrCode } from "lucide-react";

// const BusinessCard3D: React.FC = () => {
//   const [flipped, setFlipped] = useState(false);

//   // Motion values pour drag/rotation
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Rotation dynamique selon le drag
//   const rotateX = useTransform(y, [-100, 100], [15, -15]);
//   const rotateYDrag = useTransform(x, [-100, 100], [-15, 15]);

//   // Si flipped → ajoute 180° à la rotation Y
//   const rotateY = useTransform(rotateYDrag, (val) =>
//     flipped ? val + 180 : val
//   );

//   return (
//     <motion.div
//       className="w-80 h-48 perspective cursor-grab active:cursor-grabbing"
//       onClick={() => setFlipped(!flipped)}
//     >
//       <motion.div
//         className="w-full h-full rounded-2xl shadow-xl relative preserve-3d"
//         style={{
//           rotateX,
//           rotateY,
//           transformStyle: "preserve-3d",
//         }}
//         drag
//         dragElastic={0.18}
//         dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
//         transition={{ type: "spring", stiffness: 120, damping: 12 }}
//       >
//         {/* Recto */}
//         <div className="absolute w-full h-full rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col justify-center items-center backface-hidden">
//           <h2 className="text-xl font-bold">John Doe</h2>
//           <p className="text-sm opacity-80">Développeur Web</p>
//           <div className="mt-4 space-y-1 text-sm">
//             <p className="flex items-center gap-2">
//               <Mail size={16} /> john@example.com
//             </p>
//             <p className="flex items-center gap-2">
//               <Phone size={16} /> +33 6 12 34 56 78
//             </p>
//           </div>
//         </div>

//         {/* Verso */}
//         <div className="absolute w-full h-full rounded-2xl bg-indigo-600 text-white flex flex-col justify-center items-center backface-hidden transform rotate-y-180">
//           <QrCode size={64} />
//           <p className="mt-2 text-sm">Scannez pour me contacter</p>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default BusinessCard3D;



import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const BusinessCard3D: React.FC = () => {
  return (
    <motion.div
      className="w-80 h-48 rounded-2xl shadow-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col justify-center items-center"
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateY: [0, 5, -5, 0], // oscillation horizontale
        rotateX: [0, -3, 3, 0], // oscillation verticale
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <h2 className="text-xl font-bold">John Doe</h2>
      <p className="text-sm opacity-80">Développeur Web</p>
      <div className="mt-4 space-y-1 text-sm">
        <p className="flex items-center gap-2">
          <Mail size={16} /> john@example.com
        </p>
        <p className="flex items-center gap-2">
          <Phone size={16} /> +33 6 12 34 56 78
        </p>
      </div>
    </motion.div>
  );
};

export default BusinessCard3D;
