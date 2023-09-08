INSERT INTO project_main (
    id,
    name,
    description,
    image,
    tech, 
    frontend,
    backend,
    url,
    selected
) VALUES (
    ${uuid},
    ${name},
    ${description},
    ${image},
    ${techArrayString},
    ${frontendArrayString},
    ${backendArrayString},
    ${url},
    ${selected}
);

-- example:
INSERT INTO project_main (
    id,
    name,
    description,
    image,
    tech, 
    frontend,
    backend,
    url,
    selected
) VALUES (
    '4381decf-ec21-458b-bb4a-c08017c9cff9',
    'Personal Portfolio Website',
    'A portfolio website that includes the collection of my projects and information about myself. Also allow me to upload new project.',
    'qavryh57ra4j1s4bi4r6',
    '["Next.js","React.js","Vercel Postgres"]',
    '["React.js as front-end library","Styled-components for style","GSAP for animation","React-tsparticles for the background animation"]',
    '["Next.js api routes handling request from front-end","Cloudinary for hosting images","Vercel Postgres as the database","Next-auth for authentication","Server-side Rendering or Static Generation"]',
    '',
    true
);