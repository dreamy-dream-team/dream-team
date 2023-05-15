DROP TABLE IF EXISTS post_category;
DROP TABLE IF EXISTS vote;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS profile;

CREATE TABLE IF NOT EXISTS profile (
    profile_id UUID NOT NULL PRIMARY KEY,
    profile_activation_token CHAR(32),
    profile_create_date TIMESTAMPTZ,
    profile_email VARCHAR(128) NOT NULL UNIQUE,
    profile_handle VARCHAR(54) NOT NULL UNIQUE,
    profile_handle_is_visible BOOLEAN NOT NULL,
    profile_hash CHAR(97) NOT NULL
);


CREATE TABLE IF NOT EXISTS post (
    post_id UUID NOT NULL PRIMARY KEY,
    post_profile_id UUID NOT NULL,
    post_content VARCHAR(1024) NOT NULL,
    post_date_time TIMESTAMPTZ,
    post_is_published BOOLEAN,
    post_title VARCHAR(512) NOT NULL,
    FOREIGN KEY (post_profile_id) REFERENCES profile(profile_id)
);
CREATE INDEX ON post(post_profile_id);

CREATE TABLE IF NOT EXISTS vote (
    vote_post_id UUID NOT NULL,
    vote_profile_id UUID NOT NULL,
    vote_date_time TIMESTAMPTZ,
    vote_value BOOLEAN,
    FOREIGN KEY (vote_profile_id) REFERENCES profile(profile_id),
    FOREIGN KEY (vote_post_id) REFERENCES post(post_id),
    PRIMARY KEY (vote_post_id, vote_profile_id)
);
CREATE INDEX ON vote(vote_profile_id);
CREATE INDEX ON vote(vote_post_id);


CREATE TABLE IF NOT EXISTS category (
    category_id UUID PRIMARY KEY,
    category_name VARCHAR(32) NOT NULL
);


CREATE TABLE IF NOT EXISTS post_category (
    post_category_category_id UUID NOT NULL,
    post_category_post_id UUID NOT NULL,
    FOREIGN KEY (post_category_category_id) REFERENCES category(category_id),
    FOREIGN KEY (post_category_post_id) REFERENCES post(post_id),
    PRIMARY KEY (post_category_post_id, post_category_category_id)
);

CREATE INDEX ON post_category(post_category_category_id);
CREATE INDEX ON post_category(post_category_post_id);

