import AddProjectForm from "../add-project-form/add-project-form.component";
import AddProjectPageForm from "../add-project-page-form/add-project-page-form.component";

import { AddProjectSectionContainer } from "./add-project-section.styles";

const AddProjectSection = ({ projectId }) => {
  return (
    <AddProjectSectionContainer>
      {projectId ? (
        <AddProjectPageForm projectId={projectId} />
      ) : (
        <AddProjectForm />
      )}
    </AddProjectSectionContainer>
  );
};

export default AddProjectSection;
