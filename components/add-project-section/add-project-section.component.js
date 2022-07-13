import AddProjectForm from "../add-project-form/add-project-form.component";

import MyText from "../utils/my-text/my-text.component";
import { AddProjectSectionContainer } from "./add-project-section.styles";

const AddProjectSection = () => {
  return (
    <AddProjectSectionContainer>
      <AddProjectForm />
    </AddProjectSectionContainer>
  );
};

export default AddProjectSection;
