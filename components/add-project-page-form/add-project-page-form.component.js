import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { uploadImageToCloud } from "../../lib/cloudinary/cloudinary";

import FormInput from "../form-input/form-input.component";
import MyText from "../utils/my-text/my-text.component";
import MyButton from "../my-button/my-button.component";
import Spacer from "../utils/spacer/spacer.component";
import { colors } from "../utils/colors/colors.styles";
import {
  AddProjectFormContainer,
  FormTitleContainer,
  ProjectTitleImageContainer,
  ProjectTitleWrapper,
  UploadImageButtton,
  ProjectImageWrapeer,
  TechStackContainer,
  TechStackContentButtonWrapper,
  TechStackContentButton,
  TechStackContentWrapper,
} from "./add-project-page-form.styles";

const defaultFormFields = {
  page: "",
  content: "",
  projectId: "",
};

// The init state for content and backend content array
const defaultContent = [
  {
    id: "content-0",
    value: "",
  },
];

const AddProjectPageForm = ({ projectId }) => {
  const router = useRouter();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [contentArray, setContentArray] = useState(defaultContent);
  const [imagePreview, setImagePreview] = useState(
    "/images/personal-portfolio-website.png"
  );
  const [image, setImage] = useState(null);

  const { page } = formFields;

  useEffect(() => {
    setFormFields({ ...formFields, projectId: projectId });
  }, []);

  // Set {page} input into formFields state
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // Hold {content content}
  const onContentChange = (event) => {
    const { id, value } = event.target;
    const newArray = contentArray.slice();
    const index = Number(id.split("-")[1]);
    newArray[index].value = value;
    setContentArray(newArray);
  };

  // add a new input field for content content
  const addContentInput = (event) => {
    const newNode = {
      id: `content-${contentArray.length}`,
      value: "",
    };
    const newArray = contentArray.slice();
    newArray.push(newNode);
    setContentArray(newArray);
  };

  // remove the last input field for content content
  const removeContentInput = (event) => {
    if (contentArray.length <= 1) return;
    const newArray = contentArray.slice();
    newArray.pop();
    setContentArray(newArray);
  };

  // upload image, set into image preview and formfields
  const uploadImageHandler = (event) => {
    setImagePreview(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0]);
  };

  // submit form
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const imageData = await uploadImageToCloud(image);

    const formData = {
      ...formFields,
      imageData: imageData,
      content: contentArray,
    };

    const response = await fetch("/api/project/add-details-page", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.ok) {
      router.push("/");
    }
  };

  return (
    <AddProjectFormContainer>
      <FormTitleContainer>
        <MyText size={"2rem"} weight={"500"} color={colors.main} opacity={0.9}>
          Add Project - Page Detials
        </MyText>
      </FormTitleContainer>

      <Spacer position={"top"} size={"3rem"}></Spacer>

      <ProjectTitleImageContainer>
        {/* Project Title and Upload Image Button */}
        <ProjectTitleWrapper>
          <FormInput
            label="Title"
            type="text"
            name="page"
            value={page}
            onChange={onChangeHandler}
          />
          <UploadImageButtton>
            Upload Image
            <input
              type="file"
              accept="image/*"
              name="input-image"
              onChange={uploadImageHandler}
              hidden
            />
          </UploadImageButtton>
        </ProjectTitleWrapper>

        {/* Project Image Preview */}
        <ProjectImageWrapeer>
          <Image
            src={imagePreview}
            alt={`project-img`}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }} />
        </ProjectImageWrapeer>
      </ProjectTitleImageContainer>

      <MyText size={"1rem"} weight={"500"} color={colors.tech}>
        Content
      </MyText>
      <TechStackContainer>
        <TechStackContentButtonWrapper>
          <TechStackContentButton onClick={removeContentInput}>
            <MyText size={"3rem"} weight={"500"} color={colors.tech}>
              -
            </MyText>
          </TechStackContentButton>
          <TechStackContentButton onClick={addContentInput}>
            <MyText size={"2rem"} weight={"500"} color={colors.tech}>
              +
            </MyText>
          </TechStackContentButton>
        </TechStackContentButtonWrapper>
        <TechStackContentWrapper>
          {contentArray.map((item, index) => (
            <FormInput
              key={index}
              id={item.id}
              label={`Content ${index + 1}`}
              name={`content-${index}`}
              type="text"
              value={item.value}
              onChange={onContentChange}
            />
          ))}
        </TechStackContentWrapper>
      </TechStackContainer>
      <Spacer position={"top"} size={"2rem"}></Spacer>

      <Spacer position={"top"} size={"2rem"}></Spacer>
      <MyButton buttonTypes={"base"} onClick={onSubmitHandler}>
        Submit
      </MyButton>
    </AddProjectFormContainer>
  );
};

export default AddProjectPageForm;
