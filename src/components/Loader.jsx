import { Html, useProgress } from "@react-three/drei"
function Loader() {
    const { progress } = useProgress();
  return (
    <Html
    center
    className="font-black text-xl text-center text-normal">{progress} % loaded</Html>
  )
}

export default Loader