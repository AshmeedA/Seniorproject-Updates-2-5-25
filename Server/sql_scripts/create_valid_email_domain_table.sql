USE campus_complaints;

CREATE TABLE IF NOT EXISTS valid_email_domain(
    domain_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    university_id INT UNSIGNED NOT NULL,
    email_domain VARCHAR(255) NOT NULL,
    PRIMARY KEY(domain_id),
    FOREIGN KEY (university_id) REFERENCES university(university_id) ON DELETE CASCADE
);
