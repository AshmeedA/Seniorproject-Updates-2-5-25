USE campus_complaints;

CREATE TABLE IF NOT EXISTS comment_likes(
    comment_like_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    comment_id INT UNSIGNED NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    PRIMARY KEY(comment_like_id),
    FOREIGN KEY (comment_id) REFERENCES comment(comment_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE,
    UNIQUE (comment_id, user_id)
);