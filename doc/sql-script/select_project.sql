-- getProjectsPreview
SELECT id, name, description, image, tech FROM project_main WHERE selected=true;

-- getAllProjectsPreview
SELECT id, name, description, image, tech FROM project_main;
