USE top_songs_db;

CREATE TABLE albums (
    rank INT NOT NULL,
    artist_name VARCHAR(120),
    album_title VARCHAR(120),
    year_released INT(4),
    raw_popularity DECIMAL(5,3),
    USA DECIMAL(5,3),
    UK DECIMAL(5,3),
    Europe DECIMAL(5,3),
    World DECIMAL(5,3),
    PRIMARY KEY (rank)
);