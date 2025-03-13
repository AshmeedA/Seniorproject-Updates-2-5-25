USE campus_complaints;

CREATE TABLE IF NOT EXISTS university_member(
    member_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    university_id INT UNSIGNED NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    PRIMARY KEY(member_id),
    FOREIGN KEY (university_id) REFERENCES university(university_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE,
    UNIQUE (university_id, user_id)
);
