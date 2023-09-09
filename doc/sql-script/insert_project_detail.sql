-- insert new project detail page (addProjectPage)
INSERT INTO project_detail (
    id,
    projectId,
    page,
    image,
    content
) VALUES (
    ${uuid},
    ${projectId},
    ${page},
    ${image},
    ${contentArrayString}
)
