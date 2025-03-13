USE campus_complaints;

CREATE TABLE IF NOT EXISTS post(
    post_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    post_title VARCHAR(50),
    post_body MEDIUMTEXT NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    university_id INT UNSIGNED NOT NULL,
    PRIMARY KEY(post_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (university_id) REFERENCES university(university_id)
);

-- Instead of having a post_likes column, we can query the count of post likes with the matching post_id
