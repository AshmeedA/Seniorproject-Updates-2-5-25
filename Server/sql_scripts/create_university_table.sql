USE campus_complaints;

CREATE TABLE IF NOT EXISTS university(
    university_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    university_name VARCHAR(255) NOT NULL,
    PRIMARY KEY(university_id)
);
