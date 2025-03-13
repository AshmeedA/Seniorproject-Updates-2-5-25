USE campus_complaints;

CREATE TABLE IF NOT EXISTS post_likes(
    post_like_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    post_id INT UNSIGNED NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    PRIMARY KEY(post_like_id),
    FOREIGN KEY (post_id) REFERENCES post(post_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE,
    UNIQUE (post_id, user_id)
);

/* 
  UNIQUE constraint prevents a user from liking the same post multiple times
  ON DELETE CASCADE deletes the user's likes if the user is deleted
  ON UPDATE CASCADE was left out because in the scope of this project, no user_id will be updated
*/

-- Could potentially combine with comment_likes table and use a trigger or check to make sure at least one of the foreign key id values is not null

/*
  One method to count the number of likes using a query:
    select count(*)
    from post_likes
    where post_id = 1234;
*/
