-- get projects preview if setlected (getProjectsPreview)
SELECT id, name, description, image, tech FROM project_main WHERE selected=true;

-- get all projects preview (getAllProjectsPreview)
SELECT id, name, description, image, tech FROM project_main;

-- get project main by project id (getProjectDetials)
SELECT id, name, description, image, tech, url, frontend, backend FROM project_main WHERE id=${projectId};

-- get project pages by project id (getProjectDetials)
SELECT id, project_id, page, image, content FROM project_detail WHERE project_id=${projectId};
