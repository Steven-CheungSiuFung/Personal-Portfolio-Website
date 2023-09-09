-- create project_user table
CREATE TABLE project_user (
    id VARCHAR(50) PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT(NOW()),
    updatedAt TIMESTAMP DEFAULT(NOW())
);

-- insert new user
INSERT INTO project_user (
    id,
    email,
    password
) VALUES (
    ${uuid},
    ${email},
    ${hashedPassword}
);

-- select user
SELECT email, password FROM project_user WHERE email=${userEmail};
