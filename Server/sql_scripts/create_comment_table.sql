USE campus_complaints;

CREATE TABLE IF NOT EXISTS comment(
    comment_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    comment_body TEXT NOT NULL,
    post_id INT UNSIGNED NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    PRIMARY KEY(comment_id),
    FOREIGN KEY (post_id) REFERENCES post(post_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);
