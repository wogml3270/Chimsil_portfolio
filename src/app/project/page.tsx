import dynamic from "next/dynamic";

const ProjectComponent = dynamic(() => import('@/components/Project'), { ssr: false })

const Project = () => {
  return (
    <ProjectComponent />
  );
};

export default Project;
