import { useState } from "react";
import Image from "next/image";
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
} from "./add-project-form.styles";

const defaultFormFields = {
  name: "",
  description: "",
  tech: [],
  selected: false,
  detials: {
    frontend: [],
    backend: [],
  },
};

// The init state for frontend and backend content array
const defaultFrontendContent = [
  {
    id: "frontend-0",
    value: "",
  },
];

const defaultBackendContent = [
  {
    id: "backend-0",
    value: "",
  },
];

const AddProjectForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [techString, setTechString] = useState("");
  const [frontendArray, setFrontendArray] = useState(defaultFrontendContent);
  const [backendArray, setBackendArray] = useState(defaultBackendContent);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(
    "/images/personal-portfolio-website.png"
  );
  const { name, description, tech } = formFields;

  // Set {name, description} input into formFields state
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // Hold {tech} input state as a string
  const onTechChangeHandler = (event) => {
    const value = event.target.value;
    setTechString(value);
  };

  // Hold {frontend content}
  const onFrontendContentChange = (event) => {
    const { id, value } = event.target;
    const newArray = frontendArray.slice();
    const index = Number(id.split("-")[1]);
    newArray[index].value = value;
    setFrontendArray(newArray);
  };

  // add a new input field for frontend content
  const addFrontendContentInput = (event) => {
    const newNode = {
      id: `frontend-${frontendArray.length}`,
      value: "",
    };
    const newArray = frontendArray.slice();
    newArray.push(newNode);
    setFrontendArray(newArray);
  };

  // remove the last input field for frontend content
  const removeFrontendContentInput = (event) => {
    if (frontendArray.length <= 1) return;
    const newArray = frontendArray.slice();
    newArray.pop();
    setFrontendArray(newArray);
  };

  // Hold {backend content}
  const onBackendContentChange = (event) => {
    const { id, value } = event.target;
    const newArray = backendArray.slice();
    const index = Number(id.split("-")[1]);
    newArray[index].value = value;
    setBackendArray(newArray);
  };

  // add a new input field for backend content
  const addBackendContentInput = (event) => {
    const newNode = {
      id: `backend-${backendArray.length}`,
      value: "",
    };
    const newArray = backendArray.slice();
    newArray.push(newNode);
    setBackendArray(newArray);
  };

  // remove the last input field for backend content
  const removeBackendContentInput = (event) => {
    if (backendArray.length <= 1) return;
    const newArray = backendArray.slice();
    newArray.pop();
    setBackendArray(newArray);
  };

  // upload image, set into image preview and formfields
  const uploadImageHandler = (event) => {
    setImagePreview(URL.createObjectURL(event.target.files[0]));
    setFormFields({ ...formFields, image: event.target.files[0] });
  };

  // 1) convert tech string to array;
  // 2) marge tech array, frontend array, backend array into formFields;
  // 3) submit formFields to backend;
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const techArray = techString.split(" ");
    const detials = {
      frontend: frontendArray,
      backend: backendArray,
      features: [],
    };
    const formData = { ...formFields, tech: techArray, detials: detials };

    const body = new FormData();
    Object.keys(formData).map((key) => {
      body.append(key, formData[key]);
    });
    console.log(body);
    const response = await fetch("/api/project/create-project", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <AddProjectFormContainer>
      <FormTitleContainer>
        <MyText size={"2rem"} weight={"500"} color={colors.main} opacity={0.9}>
          New Project - Main
        </MyText>
      </FormTitleContainer>

      <Spacer position={"top"} size={"3rem"}></Spacer>

      <ProjectTitleImageContainer>
        {/* Project Title and Upload Image Button */}
        <ProjectTitleWrapper>
          <FormInput
            label="Title"
            type="text"
            name="name"
            value={name}
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
            layout="fill"
            objectFit="cover"
          />
        </ProjectImageWrapeer>
      </ProjectTitleImageContainer>

      {/* Project Description */}
      <FormInput
        label="Description"
        type="text"
        name="description"
        value={description}
        onChange={onChangeHandler}
      />

      {/* Project Tech */}
      {/* For input multiple tech, type a " " between each tech name */}
      <FormInput
        label="Tech"
        type="text"
        name="tech"
        value={techString}
        onChange={onTechChangeHandler}
      />

      {/* Frontend Content */}
      <MyText size={"1rem"} weight={"500"} color={colors.tech}>
        Frontend
      </MyText>
      <TechStackContainer>
        <TechStackContentButtonWrapper>
          <TechStackContentButton onClick={removeFrontendContentInput}>
            <MyText size={"3rem"} weight={"500"} color={colors.tech}>
              -
            </MyText>
          </TechStackContentButton>
          <TechStackContentButton onClick={addFrontendContentInput}>
            <MyText size={"2rem"} weight={"500"} color={colors.tech}>
              +
            </MyText>
          </TechStackContentButton>
        </TechStackContentButtonWrapper>
        <TechStackContentWrapper>
          {frontendArray.map((item, index) => (
            <FormInput
              key={index}
              id={item.id}
              label={`Frontend Content ${index + 1}`}
              name={`frontend-content-${index}`}
              type="text"
              value={item.value}
              onChange={onFrontendContentChange}
            />
          ))}
        </TechStackContentWrapper>
      </TechStackContainer>
      <Spacer position={"top"} size={"2rem"}></Spacer>

      {/* Backend Content */}
      <MyText size={"1rem"} weight={"500"} color={colors.tech}>
        Backend
      </MyText>
      <TechStackContainer>
        <TechStackContentButtonWrapper>
          <TechStackContentButton onClick={removeBackendContentInput}>
            <MyText size={"3rem"} weight={"500"} color={colors.tech}>
              -
            </MyText>
          </TechStackContentButton>
          <TechStackContentButton onClick={addBackendContentInput}>
            <MyText size={"2rem"} weight={"500"} color={colors.tech}>
              +
            </MyText>
          </TechStackContentButton>
        </TechStackContentButtonWrapper>
        <TechStackContentWrapper>
          {backendArray.map((item, index) => (
            <FormInput
              key={index}
              id={item.id}
              label={`Backend Content ${index + 1}`}
              name={`backend-content-${index}`}
              type="text"
              value={item.value}
              onChange={onBackendContentChange}
            />
          ))}
        </TechStackContentWrapper>
      </TechStackContainer>
      <Spacer position={"top"} size={"2rem"}></Spacer>
      <MyButton buttonTypes={"base"} onClick={onSubmitHandler}>
        Submit
      </MyButton>
    </AddProjectFormContainer>
  );
};

export default AddProjectForm;
