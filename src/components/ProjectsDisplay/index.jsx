// imports
import { useState } from "react";
import { Cross1Icon, GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";

// importing projects
import projects from "../../utils/projects";
import { Modal, Box } from "@mui/material";

function ProjectCardModal({
  id,
  label,
  img,
  description,
  social,
  tech,
  handleClose,
}) {
  return (
    <Box>
      <div className="absolute flex items-center justify-center w-full mt-10">
        <div className="projectCardModal bg-neutral-0 p-5 text-center rounded-2xl w-4/5 md:w-3/5  lg:w-2/5">
          <div className="projectCardModal__header flex items-center justify-end mb-2">
            <button
              className="text-red-500"
              type="button"
              role="button"
              onClick={handleClose}
              aria-label="close modal button"
            >
              <Cross1Icon className="h-5 w-5" />
            </button>
          </div>

          <div className="projectCardModal__thumbnail mb-10 flex items-center justify-center">
            <img
              height={150}
              width={150}
              className="rounded-full shadow-lg"
              src={img}
              alt={label}
            />
          </div>

          <div className="projectCardModal__label text-2xl md:text-4xl font-bold mb-5">
            {label}
          </div>

          <div className="projectCardModal__social mb-10">
            <button
              className="mx-3"
              type="button"
              role="button"
              aria-label="github"
            >
              <a
                href={social.github}
                rel="noreferrer"
                target="_blank"
                aria-label="github"
              >
                <GitHubLogoIcon className="h-6 w-6" />
              </a>
            </button>

            <button
              className="mx-3"
              type="button"
              role="button"
              aria-label="hosted"
            >
              <a
                href={social.live}
                rel="noreferrer"
                target="_blank"
                aria-label="hosted"
              >
                <GlobeIcon className="h-6 w-6" />
              </a>
            </button>
          </div>

          <div className="projectCardModal__projectdescription__title font-bold mb-5">
            Project Description
          </div>

          <div className="projectCardModal__projectdescription__content text-md mb-10">
            {description}
          </div>

          <div className="projectCardModal__tech__title font-bold mb-5">
            Tech Used
          </div>

          <div className="projectCardModal__tech__content text-md mb-5">
            {tech}
          </div>
        </div>
      </div>
    </Box>
  );
}

// project card component
function ProjectCard(_props) {
  // states
  const [open, setOpen] = useState(false);

  // open modal
  const handleOpen = () => {
    setOpen(true);
  };

  // close modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="projectCard p-5 flex items-center justify-center">
      <Modal open={open} onClose={handleClose} aria-labelledby={_props.label}>
        <ProjectCardModal {..._props} handleClose={handleClose} />
      </Modal>

      <button
        onClick={handleOpen}
        className="projectCard__modal__button hover:shadow-lg"
        aria-labelledby={`${_props.label} modal button`}
      >
        <img
          className="rounded-lg"
          height={200}
          width={200}
          src={_props.img}
          alt={_props.label}
        />
      </button>
    </div>
  );
}

// projects display component
export default function ProjectsDisplay() {
  return (
    <div className="projectsDisplay grid md:grid-cols-3 lg:grid-cols-4">
      {projects.map((project) => {
        return <ProjectCard key={project.id} {...project} />;
      })}
    </div>
  );
}
