USE campus_complaints;

CREATE TABLE IF NOT EXISTS user(
    user_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    username VARCHAR(40) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id)
);

-- May add a column later (is_verified BOOLEAN/TINYINT)
-- This boolean may not need to exist though if we can just check if the user appears in the member table
