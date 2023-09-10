-- create project_mian table
CREATE TABLE project_main (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    image VARCHAR(50),
    tech VARCHAR(255),
    frontend VARCHAR(500),
    backend VARCHAR(500),
    url VARCHAR(255),
    selected BOOLEAN,
    created_at TIMESTAMP DEFAULT(NOW()),
    updated_at TIMESTAMP DEFAULT(NOW())
);

-- create project_detail table
CREATE TABLE project_detail (
    id VARCHAR(50) PRIMARY KEY,
    project_id VARCHAR(50) REFERENCES project_main(id),
    page VARCHAR(255) NOT NULL,
    image VARCHAR(50),
    content VARCHAR(500),
    created_at TIMESTAMP DEFAULT(NOW()),
    updated_at TIMESTAMP DEFAULT(NOW())
)
