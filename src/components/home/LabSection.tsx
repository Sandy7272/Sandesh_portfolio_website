import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Icosahedron, Torus, Box } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { FlaskConical, RotateCcw, ZoomIn } from "lucide-react";

function LabScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366F1" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#22C55E" />
      <pointLight position={[0, 5, -10]} intensity={0.4} color="#06B6D4" />

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <Icosahedron args={[1.2, 4]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#6366F1"
            roughness={0.1}
            metalness={0.9}
            distort={0.3}
            speed={2}
            transparent
            opacity={0.8}
          />
        </Icosahedron>
      </Float>

      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.4}>
        <Torus args={[0.6, 0.15, 16, 32]} position={[-2.5, 1, -1]} rotation={[0.5, 0.3, 0]}>
          <meshStandardMaterial color="#22C55E" roughness={0.2} metalness={0.8} transparent opacity={0.7} />
        </Torus>
      </Float>

      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.5}>
        <Box args={[0.6, 0.6, 0.6]} position={[2.5, -0.5, -1]} rotation={[0.4, 0.7, 0]}>
          <meshStandardMaterial color="#06B6D4" roughness={0.15} metalness={0.85} transparent opacity={0.7} />
        </Box>
      </Float>

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxDistance={8}
        minDistance={3}
      />
    </>
  );
}

const labItems = [
  {
    title: "Gaussian Splat Viewer",
    description: "Real-time 3D scene reconstruction from video footage using Gaussian splatting",
    status: "Active",
  },
  {
    title: "3D Product Viewer",
    description: "Interactive product visualization with material controls and AR preview",
    status: "Active",
  },
  {
    title: "Hotel Environment Preview",
    description: "First-person walkthrough viewer for hospitality 3D environments",
    status: "Beta",
  },
];

export function LabSection() {
  return (
    <section id="lab" className="section-container section-padding scroll-mt-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <FlaskConical className="w-4 h-4 text-cyan" />
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-cyan">
            Interactive Lab
          </p>
        </div>
        <h2 className="font-display text-display-lg mb-4">
          Explore 3D Experiments
        </h2>
        <p className="text-muted-foreground max-w-lg">
          Interactive 3D content built with React Three Fiber, Three.js, and WebGL.
          Rotate, zoom, and explore.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="aspect-square rounded-2xl overflow-hidden glass-card-strong relative"
        >
          <Suspense fallback={
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <LabScene />
            </Canvas>
          </Suspense>

          {/* Controls hint */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground glass-card-strong px-3 py-1.5 rounded-full">
              <RotateCcw className="w-3 h-3" /> Drag to rotate
            </span>
            <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground glass-card-strong px-3 py-1.5 rounded-full">
              <ZoomIn className="w-3 h-3" /> Scroll to zoom
            </span>
          </div>
        </motion.div>

        {/* Lab items */}
        <div className="flex flex-col gap-4">
          {labItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl glass-card-hover flex-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display text-display-sm">{item.title}</h3>
                <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  item.status === "Active"
                    ? "bg-accent/15 text-accent"
                    : "bg-primary/15 text-primary"
                }`}>
                  {item.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
