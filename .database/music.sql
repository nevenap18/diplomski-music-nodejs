-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               8.0.26 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for music
DROP DATABASE IF EXISTS `music`;
CREATE DATABASE IF NOT EXISTS `music` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `music`;

-- Dumping structure for table music.album
DROP TABLE IF EXISTS `album`;
CREATE TABLE IF NOT EXISTS `album` (
  `album_id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `year` year NOT NULL DEFAULT '2021',
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `artist_id` int unsigned NOT NULL DEFAULT '0',
  `image` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`album_id`),
  KEY `fk_album_artist_id` (`artist_id`),
  CONSTRAINT `fk_album_artist_id` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- Dumping data for table music.album: ~8 rows (approximately)
DELETE FROM `album`;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
INSERT INTO `album` (`album_id`, `title`, `year`, `description`, `artist_id`, `image`) VALUES
	(1, 'Folklore', '2021', ' The eighth studio album by Taylor Swift. It was released on July 24, 2020. Folklore has been viewed as the quintessential quarantine album, and the pandemic "first great" work of art. It is widely regarded as the most influential album of 2020.', 1, 'https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png'),
	(2, 'Riot', '2007', 'The second studio album by American rock band Paramore. It was released in the United States on June 12, 2007', 2, 'https://upload.wikimedia.org/wikipedia/en/2/28/Paramore_-_Riot%21.png'),
	(9, 'Fearless', '2009', 'Fearless is the second studio album by American singer-songwriter Taylor Swift. It was released November 11, 2008, by Big Machine Records in the U.S. and Canada, and an international edition was released on March 9, 2009.', 1, 'https://upload.wikimedia.org/wikipedia/en/8/86/Taylor_Swift_-_Fearless.png'),
	(10, 'After Laughter', '2017', 'After Laughter is the fifth studio album by American rock band Paramore. It was released on May 12, 2017, through Fueled by Ramen, as a follow-up to their self-titled album Paramore. The album was produced by guitarist Taylor York alongside previous collaborator Justin Meldal-Johnsen.', 2, 'https://upload.wikimedia.org/wikipedia/en/9/9b/After_Laughter_Paramore_album_cover.png'),
	(11, 'Chromatica', '2020', 'Chromatica is the sixth studio album by American singer Lady Gaga, released on May 29, 2020, by Interscope Records and subsidiary Streamline.', 3, 'https://upload.wikimedia.org/wikipedia/en/d/d6/Lady_Gaga_-_Chromatica_%28Official_Album_Cover%29.png'),
	(12, 'Artpop', '2013', 'Artpop is the third studio album by American singer Lady Gaga. It was released on November 6, 2013, by Streamline and Interscope Records. Gaga began planning the project in 2011, shortly after the launch of her second effort, Born This Way.', 3, 'https://upload.wikimedia.org/wikipedia/en/3/39/Artpop_cover.png'),
	(13, 'Bangerz', '2013', 'Bangerz is the fourth studio album by American singer Miley Cyrus. It was released on September 30, 2013, by RCA Records. It is her first studio album since 2010\'s Can\'t Be Tamed.', 4, 'https://upload.wikimedia.org/wikipedia/en/5/52/Bangerz.png'),
	(14, 'Plastic Hearts', '2020', 'Plastic Hearts is the seventh studio album by American singer Miley Cyrus. It was released on November 27, 2020, by RCA Records, and was her final album with the label; she signed with Columbia Records in early 2021.', 4, 'https://upload.wikimedia.org/wikipedia/en/6/66/Miley_Cyrus_-_Plastic_Hearts.png'),
	(15, 'Goats Head Soup', '1973', 'Goats Head Soup is the 11th British and 13th American studio album by the English rock band the Rolling Stones. It was released on 31 August 1973 by Rolling Stones Records. Like its predecessor Exile on Main St., the band composed and recorded much of it outside of the United Kingdom due to their status as tax exiles.', 5, 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/The_Rolling_Stones_-_Goats_Head_Soup.jpg/220px-The_Rolling_Stones_-_Goats_Head_Soup.jpg'),
	(16, 'Black and Blue', '1976', 'Black and Blue is the 13th British and 15th American studio album by the English rock band the Rolling Stones, released on 23 April 1976 by Rolling Stones Records. This album was the first recorded after former guitarist Mick Taylor quit in December 1974.', 5, 'https://upload.wikimedia.org/wikipedia/en/5/5a/Blackblue.jpg');
/*!40000 ALTER TABLE `album` ENABLE KEYS */;

-- Dumping structure for table music.artist
DROP TABLE IF EXISTS `artist`;
CREATE TABLE IF NOT EXISTS `artist` (
  `artist_id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `image` text COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`artist_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- Dumping data for table music.artist: ~25 rows (approximately)
DELETE FROM `artist`;
/*!40000 ALTER TABLE `artist` DISABLE KEYS */;
INSERT INTO `artist` (`artist_id`, `name`, `image`, `description`) VALUES
	(1, 'Taylor Swift', 'https://lastfm.freetls.fastly.net/i/u/770x0/55033d6fee9d4f4063b828317623438b.jpg', 'Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. Her discography spans multiple genres and her narrative songwriting—often inspired by her personal life—has received critical praise and widespread media coverage. Born in West Reading, Pennsylvania, Swift moved to Nashville, Tennessee, at age 14 to become a country artist. She signed a songwriting deal with Sony/ATV Music Publishing in 2004 and a recording contract with Big Machine Records in 2005. Her 2006 self-titled debut album made her the first female country singer to write or co-write a US platinum-certified album entirely.'),
	(2, 'Paramore', 'https://www.delfi.rs/_img/artikli/2015/05/paramore_vinyl_vv.jpg', 'Paramore is an American rock band from Franklin, Tennessee, formed in 2004. The band currently consists of lead vocalist Hayley Williams, guitarist Taylor York and drummer Zac Farro. Williams and Farro are founding members of the group, while York, a high school friend of the original lineup, joined in 2007. The band is signed to Fueled by Ramen, a subsidiary of Atlantic Records, both owned by Warner Music Group. Williams was separately signed to Atlantic as she was scouted when she was a teenager, and they were the only label to let her stay in the band instead of going solo, but Atlantic said the rest of the band had to sign to Fueled by Ramen. She is also the only member to appear on all five of Paramore\'s studio albums.'),
	(3, 'Lady Gaga', 'data:image/jpeg;base64,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', 'Stefani Joanne Angelina Germanotta, known professionally as Lady Gaga, is an American singer, songwriter, and actress. She is known for her image reinventions and musical versatility. Gaga began performing as a teenager, singing at open mic nights and acting in school plays.'),
	(4, 'Miley Cyrus', 'https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2019/10/Miley-Cyrus-03_MidnightSky_WhiteLight_2302-800x800.jpg', 'Miley Ray Cyrus (/ˈmaɪli ˈsaɪrəs/ MY-lee SY-rəs; born Destiny Hope Cyrus on November 23, 1992) is an American singer, songwriter, and actress. Known for her distinctive raspy voice, her music incorporates elements of varied styles and genres, including pop, country pop, hip hop, experimental, and rock. She has attained the most US Billboard 200 top-five albums in the 21st century by a female artist, with a total of thirteen entries.'),
	(5, 'The Rolling Stones', 'https://i.scdn.co/image/ab6761610000e5ebd3cb15a8570cce5a63af63d8', 'The Rolling Stones are an English rock band formed in London in 1962. Active for six decades, they are one of the most popular and enduring bands of the rock era. In the early 1960s, the Rolling Stones pioneered the gritty, rhythmically driven sound that came to define hard rock. Their first stable line-up consisted of vocalist Mick Jagger, multi-instrumentalist Brian Jones, guitarist Keith Richards, bassist Bill Wyman, and drummer Charlie Watts. During their formative years, Jones was the primary leader: he assembled the band, named it, and drove their sound and image. '),
	(6, 'Pink Floyd', 'https://images.squarespace-cdn.com/content/v1/560de8b4e4b075a6562b961f/1582499677175-TM7VV4Q5JWXKVPW5128E/Pink+Floyd+-+The+Best+Of.JPG?format=500w', 'Pink Floyd are an English rock band formed in London in 1965. Gaining an early following as one of the first British psychedelic groups, they were distinguished by their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows. They became a leading band of the progressive rock genre, cited by some as the greatest progressive rock band of all time.'),
	(7, 'Red Hot Chilli Peppers', 'https://i1.sndcdn.com/artworks-000039953296-4sm8p6-t500x500.jpg', 'Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1983, comprising vocalist Anthony Kiedis, bassist Flea, drummer Chad Smith, and guitarist John Frusciante. Their music incorporates elements of alternative rock, funk, punk rock, hard rock, hip hop, and psychedelic rock. Their eclectic range has influenced genres such as funk metal, rap metal, rap rock, and nu metal. With over 120 million records sold worldwide, Red Hot Chili Peppers are one of the best-selling bands of all time. They hold the records for most number-one singles (14), most cumulative weeks at number one (85) and most top-ten songs (25) on the Billboard Alternative Songs chart.[6] They have won six Grammy Awards, were inducted into the Rock and Roll Hall of Fame in 2012, and in 2022 received a star on the Hollywood Walk of Fame.'),
	(8, 'The Strokes', 'https://lastfm.freetls.fastly.net/i/u/500x500/e2671ae779174a2dac4f41d62d3bf119.jpg', 'The Strokes are an American rock band from New York City. Formed in 1998, the band is composed of lead singer and songwriter Julian Casablancas, guitarists Nick Valensi and Albert Hammond Jr., bassist Nikolai Fraiture, and drummer Fabrizio Moretti. They were a leading group of the early-2000s indie rock revival.'),
	(9, 'Arctic Monkeys', 'https://assets.radiox.co.uk/2014/06/arctic-monkeys-2014-1392126906-list-tablet-0.png', 'Arctic Monkeys are an English rock band formed in Sheffield in 2002. The group consists of Alex Turner (lead vocals, guitar, keyboards), Jamie Cook (guitar, keyboards), Nick O\'Malley (bass guitar, backing vocals), and Matt Helders (drums, backing vocals). Former band member Andy Nicholson (bass guitar, backing vocals) left the band in 2006 shortly after their debut album was released.'),
	(10, 'Death Cab For Cutie', 'https://cdns-images.dzcdn.net/images/cover/0e6c41d139b102a080871eef3aefa101/500x500.jpg', 'Death Cab for Cutie is an American rock band formed in Bellingham, Washington, in 1997. The band is currently composed of Ben Gibbard (vocals, guitar, piano), Nick Harmer (bass), Dave Depper (guitar, keyboards, backing vocals), Zac Rae (keyboards, guitar), and Jason McGerr (drums). The band was originally a solo project by Gibbard, who expanded the project into a complete group upon getting a record deal. They released their debut album, Something About Airplanes, in 1998. The band\'s fourth album, 2003\'s Transatlanticism, broke into the mainstream both critically and commercially; its songs were featured in various TV series and films.'),
	(11, 'Tim McGraw', 'https://i1.sndcdn.com/avatars-JeMo0KzcnudJPxY0-rXzg0g-t500x500.jpg', 'Samuel Timothy McGraw (born May 1, 1967) is an American country singer, songwriter, record producer, and actor. He has released 16 studio albums (11 for Curb Records, four for Big Machine Records and one for Arista Nashville). 10 of those albums have reached number one on the Top Country Albums charts, with his 1994 breakthrough album Not a Moment Too Soon being the top country album of 1994. In total, McGraw\'s albums have produced 65 singles, 25 of which have reached number one on the Hot Country Songs or Country Airplay charts. Three of these singles – "It\'s Your Love", "Just to See You Smile", and "Live Like You Were Dying" – were respectively the top country songs of 1997, 1998, and 2004 according to Billboard Year-End. He has also won three Grammy Awards, 14 Academy of Country Music awards, 11 Country Music Association (CMA) awards, 10 American Music Awards, and three People\'s Choice Awards.'),
	(12, 'Blake Shelton', 'https://media1.popsugar-assets.com/files/thumbor/9LX8hgMTcA7swrwob4wn41x4Cqk/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2016/04/01/919/n/1922398/b984fb53_edit_img_image_38093686_1439501189_BlakeShelton/i/Blake-Shelton.jpg', 'Blake Tollison Shelton (born June 18, 1976) is an American country music singer and television personality. In 2001, he made his debut with the single "Austin". The lead-off single from his self-titled debut album, "Austin" spent five weeks at number one on the Billboard Hot Country Songs chart. The now Platinum-certified debut album also produced two more top 20 entries ("All Over Me" and "Ol\' Red"). His second and third albums, 2003\'s The Dreamer and 2004\'s Blake Shelton\'s Barn & Grill, are gold and platinum, respectively.'),
	(13, 'Carrie Underwood', 'https://bloximages.chicago2.vip.townnews.com/buffalonews.com/content/tncms/assets/v3/editorial/9/82/9822c582-22fb-5095-bacb-00c75c7a2c18/5ef2cd1c7eb9b.image.jpg?resize=500%2C500', 'Carrie Marie Underwood (born March 10, 1983) is an American country singer. She rose to prominence after winning the fourth season of American Idol in 2005. Her single "Inside Your Heaven" made her the only country artist to debut atop the Billboard Hot 100 chart and the only solo country artist in the 2000s to have a number-one song on the Hot 100. Her debut album, Some Hearts (2005), was bolstered by the successful crossover singles "Jesus, Take the Wheel" and "Before He Cheats", becoming the best-selling solo female debut album in country music history. She won three Grammy Awards for the album, including Best New Artist. The next studio album, Carnival Ride (2007) had one of the biggest opening weeks of all time by a female artist and won two Grammy Awards. Her third studio album, Play On (2009), was preceded by the single "Cowboy Casanova", which had one of the biggest single-week upward movements on the Hot 100.'),
	(14, 'Eminem', 'https://i1.sndcdn.com/artworks-000493675527-323nii-t500x500.jpg', 'Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem (/ˌɛmɪˈnɛm/; stylized as EMINƎM), is an American rapper and record producer. He is credited with popularizing hip hop in middle America and is critically acclaimed as one of the greatest rappers of all time. Eminem\'s global success and acclaimed works are widely regarded as having broken racial barriers for the acceptance of white rappers in popular music. While much of his transgressive work during the late 1990s and early 2000s made him widely controversial, he came to be a representation of popular angst of the American underclass and has been cited as an influence for many artists of various genres.'),
	(15, 'Kanye West', 'https://i1.sndcdn.com/artworks-000111042792-r8pjgi-t500x500.jpg', 'Ye[a] (/jeɪ/ YAY; born Kanye Omari West /ˈkɑːnjeɪ/ KAHN-yay; June 8, 1977) is an American rapper, songwriter, record producer, and fashion designer. He is widely regarded as one of the most influential hip hop artists and producers and as one of the greatest musicians of his generation. In 2022, West was dropped by his record and fashion labels after making a series of antisemitic remarks.  Born in Atlanta and raised in Chicago, West initially gained recognition as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several artists and developing the "chipmunk soul" sampling style. Intent on pursuing a solo career as a rapper, he released his debut studio album, The College Dropout (2004), to critical and commercial success. He founded the record label GOOD Music later that year.'),
	(16, 'Tupac Shakur', 'https://truecolorstheatre.org/wp-content/uploads/2017/04/36f7fb6a856bf4964897a16032d01a1f.jpg', 'Tupac Amaru Shakur (/ˈtuːpɑːk ʃəˈkʊər/ TOO-pahk shə-KOOR; born Lesane Parish Crooks, June 16, 1971 – September 13, 1996), also known as 2Pac and Makaveli, was an American rapper. He is widely considered one of the most influential rappers of all time. Shakur is among the best-selling music artists, having sold more than 75 million records worldwide. Much of Shakur\'s music has been noted for addressing contemporary social issues that plagued inner cities, and he is considered a symbol of activism against inequality.'),
	(17, 'Skrillex', 'https://e-cdns-images.dzcdn.net/images/artist/ce7d706ecbba7161ff10e655a00bcc7a/500x500-000000-80-0-0.jpg', 'Sonny John Moore (born January 15, 1988), known professionally as Skrillex, is an American DJ and music producer. Growing up in Northeast Los Angeles and Northern California, he joined the post-hardcore band From First to Last as the lead singer in 2004, and recorded two studio albums with the band (Dear Diary, My Teen Angst Has a Bodycount [2004] and Heroine [2006]) before leaving to pursue a solo career in 2007. He began his first tour as a solo artist in late 2007. After recruiting a new band lineup, Moore joined the Alternative Press Tour to support bands such as All Time Low and the Rocket Summer, and appeared on the cover of Alternative Press\' annual "100 Bands You Need to Know" issue.'),
	(18, 'Avicii', 'https://i1.sndcdn.com/avatars-000330767037-lhcj27-t500x500.jpg', 'Tim Bergling (Swedish: [ˈtɪmː ˈbæ̂rjlɪŋ]; 8 September 1989 – 20 April 2018), known professionally as Avicii (/əˈviːtʃi/, Swedish: [aˈvɪ̌tːɕɪ]), was a Swedish DJ, remixer and music producer. At the age of 16, Bergling began posting his remixes on electronic music forums, which led to his first record deal. He rose to prominence in 2011 with his single "Levels". His debut studio album, True (2013), blended electronic music with elements of multiple genres and received generally positive reviews. It peaked in the top 10 in more than 15 countries and topped international charts; the lead single, "Wake Me Up", topped most music markets in Europe and reached number four in the United States.'),
	(19, 'Calvin Harris', 'https://i1.sndcdn.com/avatars-XD8MOWu0RXA7LqWX-S8BX0A-t500x500.jpg', 'Adam Richard Wiles (born 17 January 1984), known professionally as Calvin Harris, is a Scottish DJ, record producer, singer, and songwriter. After his vocal performance on his records, Harris rose to international prominence after producing songs for other artists, in 2011 and in 2012. Harris has released six studio albums.'),
	(20, 'Boards of Canada', 'https://i1.sndcdn.com/avatars-000157918971-2sh8ax-t500x500.jpg', 'Boards of Canada are a Scottish electronic music duo consisting of brothers Michael Sandison and Marcus Eoin, formed initially as a group in 1986 before becoming a duo in the 1990s. Signing first to Skam followed by Warp Records in the 1990s, the duo subsequently received recognition following the release of their debut album Music Has the Right to Children on Warp in 1998. They followed with the critically acclaimed albums Geogaddi (2002), The Campfire Headphase (2005) and Tomorrow\'s Harvest (2013), but have remained reclusive and continue to rarely appear live'),
	(21, 'Yellow Magic Orchestra', 'https://cdns-images.dzcdn.net/images/artist/8fb832745fe0de75ecb27b1205feaebe/500x500.jpg', 'Yellow Magic Orchestra (YMO for short) is a Japanese electronic music band formed in Tokyo in 1978 by Haruomi Hosono (bass, keyboards, vocals), Yukihiro Takahashi (drums, lead vocals) and Ryuichi Sakamoto (keyboards, vocals). The group is considered influential and innovative in the field of popular electronic music. They were pioneers in their use of synthesizers, samplers, sequencers, drum machines, computers, and digital recording technology, and effectively anticipated the "electropop boom" of the 1980s. They are credited with playing a key role in the development of several electronic genres, including synthpop, J-pop, electro, and techno, while exploring subversive sociopolitical themes throughout their career.'),
	(22, 'Eluvium', 'https://headphonecommute.com/app/uploads/2013/08/eluvium-nightmare-ending.jpg', 'Eluvium is the moniker of the American ambient recording artist Matthew Cooper, who resides in Portland, Oregon. Cooper, who was born in Tennessee and raised in Louisville, Kentucky, before relocating to the Northwest, is known for blending various genres of experimental music including electronic, minimalism and drone. His albums often feature artwork and photographs by Jeannie Paske.'),
	(23, 'Robert Johnson', 'https://cdns-images.dzcdn.net/images/artist/cfbcad05213f479eee12d62bf29433d9/500x500.jpg', 'Robert Leroy Johnson (May 8, 1911 – August 16, 1938) was an American blues musician and songwriter. His landmark recordings in 1936 and 1937 display a combination of singing, guitar skills, and songwriting talent that has influenced later generations of musicians. Although his recording career spanned only 7 months, he is now recognized as a master of the blues, particularly the Delta blues style, and is also one of the most influential musicians of the 20th century. The Rock and Roll Hall of Fame describes him as being "the first ever rock star".'),
	(24, 'Muddy Waters', 'https://i1.sndcdn.com/artworks-000256735946-d944tu-t500x500.jpg', 'McKinley Morganfield (April 4, 1913 (or 1915) – April 30, 1983), known professionally as Muddy Waters, was an American blues singer and musician who was an important figure in the post-war blues scene, and is often cited as the "father of modern Chicago blues". His style of playing has been described as "raining down Delta beatitude".'),
	(25, 'B.B. King ', 'https://i1.sndcdn.com/artworks-000067118883-1b8uis-t500x500.jpg', 'Riley B. King (September 16, 1925 – May 14, 2015), known professionally as B.B. King, was an American blues singer-songwriter, guitarist, and record producer. He introduced a sophisticated style of soloing based on fluid string bending, shimmering vibrato and staccato picking that influenced many later blues electric guitar players. AllMusic recognized King as "the single most important electric guitarist of the last half of the 20th century".'),
	(26, 'Ella Fitzgerald', 'https://cdns-images.dzcdn.net/images/artist/0250af414d882062b1a77aa9521b7331/500x500.jpg', 'Ella Jane Fitzgerald (April 25, 1917 – June 15, 1996) was an American jazz singer, sometimes referred to as the "First Lady of Song", "Queen of Jazz", and "Lady Ella". She was noted for her purity of tone, impeccable diction, phrasing, timing, intonation, and a "horn-like" improvisational ability, particularly in her scat singing.'),
	(27, 'Louis Armstrong', 'https://i1.sndcdn.com/artworks-000112507560-k4ny2p-t500x500.jpg', 'Louis Daniel Armstrong (August 4, 1901 – July 6, 1971), nicknamed "Satchmo", "Satch", and "Pops", was an American trumpeter and vocalist. He was among the most influential figures in jazz. His career spanned five decades and several eras in the history of jazz.'),
	(28, 'Billie Holiday', 'https://i1.sndcdn.com/artworks-000026008873-08m664-t500x500.jpg', 'Billie Holiday (born Eleanora Fagan; April 7, 1915 – July 17, 1959) was an American jazz and swing music singer. Nicknamed "Lady Day" by her friend and music partner, Lester Young, Holiday had an innovative influence on jazz music and pop singing. Her vocal style, strongly inspired by jazz instrumentalists, pioneered a new way of manipulating phrasing and tempo. She was known for her vocal delivery and improvisational skills.[1]');
/*!40000 ALTER TABLE `artist` ENABLE KEYS */;

-- Dumping structure for table music.favorite_albums
DROP TABLE IF EXISTS `favorite_albums`;
CREATE TABLE IF NOT EXISTS `favorite_albums` (
  `user_id` int unsigned NOT NULL DEFAULT '0',
  `album_id` int unsigned NOT NULL DEFAULT '0',
  `date` date DEFAULT NULL,
  PRIMARY KEY (`user_id`,`album_id`),
  UNIQUE KEY `uq_favorite_albums_user_id_album_id` (`user_id`,`album_id`),
  KEY `fk_favorite_albums_album_id` (`album_id`),
  CONSTRAINT `fk_favorite_albums_album_id` FOREIGN KEY (`album_id`) REFERENCES `album` (`album_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_favorite_albums_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- Dumping data for table music.favorite_albums: ~2 rows (approximately)
DELETE FROM `favorite_albums`;
/*!40000 ALTER TABLE `favorite_albums` DISABLE KEYS */;
INSERT INTO `favorite_albums` (`user_id`, `album_id`, `date`) VALUES
	(1, 1, NULL),
	(3, 10, NULL);
/*!40000 ALTER TABLE `favorite_albums` ENABLE KEYS */;

-- Dumping structure for table music.favorite_songs
DROP TABLE IF EXISTS `favorite_songs`;
CREATE TABLE IF NOT EXISTS `favorite_songs` (
  `user_id` int unsigned NOT NULL DEFAULT '0',
  `song_id` int unsigned NOT NULL DEFAULT '0',
  `date` date DEFAULT NULL,
  PRIMARY KEY (`user_id`,`song_id`),
  UNIQUE KEY `uq_favorite_songs_user_id_song_id` (`user_id`,`song_id`),
  KEY `fk_favorite_songs_song_id` (`song_id`),
  CONSTRAINT `fk_favorite_songs_song_id` FOREIGN KEY (`song_id`) REFERENCES `song` (`song_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_favorite_songs_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- Dumping data for table music.favorite_songs: ~10 rows (approximately)
DELETE FROM `favorite_songs`;
/*!40000 ALTER TABLE `favorite_songs` DISABLE KEYS */;
INSERT INTO `favorite_songs` (`user_id`, `song_id`, `date`) VALUES
	(1, 1, NULL),
	(3, 1, NULL),
	(3, 2, NULL),
	(3, 3, NULL),
	(3, 4, NULL),
	(3, 14, NULL),
	(3, 15, NULL),
	(11, 1, NULL),
	(15, 1, NULL),
	(15, 2, NULL),
	(15, 3, NULL),
	(15, 4, NULL);
/*!40000 ALTER TABLE `favorite_songs` ENABLE KEYS */;

-- Dumping structure for table music.genre
DROP TABLE IF EXISTS `genre`;
CREATE TABLE IF NOT EXISTS `genre` (
  `genre_id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `image_url` text COLLATE utf8_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  PRIMARY KEY (`genre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- Dumping data for table music.genre: ~9 rows (approximately)
DELETE FROM `genre`;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` (`genre_id`, `title`, `image_url`, `description`) VALUES
	(1, 'Pop', 'https://www.staimusic.com/images/genres/pop.jpg', 'Pop music is a genre of popular music that originated in its modern form during the mid-1950s in the United States and the United Kingdom. The terms popular music and pop music are often used interchangeably, although the former describes all music that is popular and includes many disparate styles.'),
	(2, 'Rock', 'https://images.8tracks.com/cover/i/001/128/832/87104.original-9080.jpg?rect=240,0,800,800&q=98&fm=jpg&fit=max&w=640&h=640', 'Rock music is a broad genre of popular music that originated as "rock and roll" in the United States in the late 1940s and early 1950s, developing into a range of different styles in the mid-1960s and later, particularly in the United States and United Kingdom. It has its roots in 1940s and 1950s rock and roll, a style that drew directly from the blues and rhythm and blues genres of African-American music and from country music.'),
	(3, 'Indie', 'https://images.8tracks.com/cover/i/000/137/886/indie-1-1797.jpg?rect=75,0,449,449&q=98&fm=jpg&fit=max&w=960&h=960', 'Both indie and indie pop had originally referred to the same thing during the late 1970s. Inspired more by punk rock\'s DIY ethos than its style, guitar bands were formed on the then-novel premise that one could record and release their own music instead of having to procure a record contract from a major label.'),
	(4, 'Country', 'https://i.pinimg.com/736x/a3/03/02/a30302da6060b6bea4c2c58d36f0dd49.jpg', 'Country (also called country and western) is a genre of popular music that originated with blues, church music such as Southern gospel and spirituals, old-time, and American folk music forms including Appalachian, Cajun, Creole, and the cowboy Western music styles of New Mexico, Red Dirt, Tejano, and Texas country. Its popularized roots originate in the Southern and Southwestern United States of the early 1920s.'),
	(5, 'Rap', 'https://i1.sndcdn.com/artworks-ENo3zBIbo3nWCzLf-6bod5g-t500x500.jpg', 'Rap, musical style in which rhythmic and/or rhyming speech is chanted (“rapped”) to musical accompaniment. This backing music, which can include digital sampling (music and sounds extracted from other recordings), is also called hip-hop, the name used to refer to a broader cultural movement that includes rap, deejaying (turntable manipulation), graffiti painting, and break dancing.'),
	(6, 'Party', 'http://www.freebackgroundtracks.net/wp-content/uploads/2017/10/photodune-3693497-dance-club-s-e1525377026748.jpg', 'You’ve got the drinks. You’ve got the appetizers. You’ve got the lights and decorations. But you don’t have a party until you’ve got the songs. Whether you’re inviting friends over to your apartment or breaking into an abandoned warehouse, the music is the No. 1 most important element of any celebratory gathering, and crafting the perfect playlist is a delicate science.'),
	(7, 'Ambient', 'https://i1.sndcdn.com/artworks-iXBM0m7Ky3UiSEcz-k74ZOQ-t500x500.jpg', 'Ambient music is a genre of music that emphasizes tone and atmosphere over traditional musical structure or rhythm. It may lack net composition, beat, or structured melody. It uses textural layers of sound that can reward both passive and active listening and encourage a sense of calm or contemplation.'),
	(8, 'Blues', 'https://cdns-images.dzcdn.net/images/artist/a8739ba74c88a584cd6cbcd556f40b63/264x264.jpg', 'Blues is a music genre and musical form which originated in the Deep South of the United States around the 1860s.[2] Blues incorporated spirituals, work songs, field hollers, shouts, chants, and rhymed simple narrative ballads from the African-American culture.'),
	(9, 'Jazz', 'https://www.staimusic.com/images/genres/jazz.jpg', 'Jazz is a music genre that originated in the African-American communities of New Orleans, Louisiana in the late 19th and early 20th centuries, with its roots in blues and ragtime. Since the 1920s Jazz Age, it has been recognized as a major form of musical expression in traditional and popular music.');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;

-- Dumping structure for table music.playlist
DROP TABLE IF EXISTS `playlist`;
CREATE TABLE IF NOT EXISTS `playlist` (
  `playlist_id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int unsigned NOT NULL DEFAULT '0',
  `image_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'https://i.ibb.co/3h2H3Wk/image.jpg',
  PRIMARY KEY (`playlist_id`),
  KEY `fk_playlist_user_id` (`user_id`),
  CONSTRAINT `fk_playlist_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- Dumping data for table music.playlist: ~12 rows (approximately)
DELETE FROM `playlist`;
/*!40000 ALTER TABLE `playlist` DISABLE KEYS */;
INSERT INTO `playlist` (`playlist_id`, `title`, `description`, `user_id`, `image_url`) VALUES
	(1, 'Nevena 2222', 'tetsing edit 333322', 3, 'https://i.ibb.co/3h2H3Wk/image.jpg'),
	(7, 'Titleeeee', 'descccc', 3, 'https://i.ibb.co/3h2H3Wk/image.jpg'),
	(8, 'Titleeeee', 'descccc', 3, 'https://i.ibb.co/3h2H3Wk/image.jpg'),
	(9, 'Titleeeee', 'descccc', 3, 'https://i.ibb.co/3h2H3Wk/image.jpg'),
	(10, 'Titleeeee', 'descccc', 1, 'https://i.ibb.co/3h2H3Wk/image.jpg'),
	(11, 'My playlist', 'This is the test playlist for creating playlist', 3, 'https://i.ibb.co/3h2H3Wk/image.jpg'),
	(12, 'test playlist 2', 'aaaaaaaaaaaaaaaa aa   aa a  aaaaaaaaaa', 3, 'https://i.ibb.co/3h2H3Wk/image.jpg'),
	(13, 'NEVENA', 'PAVLOVIC', 3, 'https://i.ibb.co/3h2H3Wk/image.jpg'),
	(14, 'aaaa', 'aaaaaaaaaa', 3, 'https://i.ibb.co/3h2H3Wk/image.jpg'),
	(15, 'dddd', 'dddd', 3, 'https://i.ibb.co/3h2H3Wk/image.jpg'),
	(16, 'eeee', 'eeeeeee', 3, 'https://i.ibb.co/3h2H3Wk/image.jpg'),
	(22, 'aa', 'aaa', 15, 'https://i.ibb.co/3h2H3Wk/image.jpg'),
	(24, 'new pl', 'new', 3, 'https://i.ibb.co/3h2H3Wk/image.jpg');
/*!40000 ALTER TABLE `playlist` ENABLE KEYS */;

-- Dumping structure for table music.song
DROP TABLE IF EXISTS `song`;
CREATE TABLE IF NOT EXISTS `song` (
  `song_id` int unsigned NOT NULL AUTO_INCREMENT,
  `artist_id` int unsigned NOT NULL DEFAULT '0',
  `album_id` int unsigned DEFAULT '0',
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `url` text COLLATE utf8_unicode_ci NOT NULL,
  `image_url` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`song_id`),
  KEY `fk_song_artist_id` (`artist_id`),
  KEY `fk_song_album_id` (`album_id`),
  CONSTRAINT `fk_song_album_id` FOREIGN KEY (`album_id`) REFERENCES `album` (`album_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_song_artist_id` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- Dumping data for table music.song: ~19 rows (approximately)
DELETE FROM `song`;
/*!40000 ALTER TABLE `song` DISABLE KEYS */;
INSERT INTO `song` (`song_id`, `artist_id`, `album_id`, `title`, `url`, `image_url`) VALUES
	(1, 1, 1, 'Hoax', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://i1.sndcdn.com/artworks-4BUOyfee0vEFXVQB-XwguFA-t500x500.jpg'),
	(2, 1, 1, 'The 1', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://data.whicdn.com/images/346979241/original.jpg'),
	(3, 2, 2, 'Misery Business', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://upload.wikimedia.org/wikipedia/en/2/28/Paramore_-_Riot%21.png'),
	(4, 2, 10, 'Hard Times', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://i1.sndcdn.com/artworks-000223815464-glg8c7-t500x500.jpg'),
	(12, 2, 10, 'Forgiveness', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://i1.sndcdn.com/artworks-000223815464-glg8c7-t500x500.jpg'),
	(13, 1, 9, 'Love Story', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://i.scdn.co/image/ab67616d0000b2735a3d178b9b8ba58ac8ccfd0c'),
	(14, 1, 9, 'Fifteen', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://i.scdn.co/image/ab67616d0000b2735a3d178b9b8ba58ac8ccfd0c'),
	(15, 3, 11, 'Rain on Me', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://upload.wikimedia.org/wikipedia/en/d/d6/Lady_Gaga_-_Chromatica_%28Official_Album_Cover%29.png'),
	(16, 3, 11, '911', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://upload.wikimedia.org/wikipedia/en/d/d6/Lady_Gaga_-_Chromatica_%28Official_Album_Cover%29.png'),
	(17, 3, 12, 'Aura', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://upload.wikimedia.org/wikipedia/en/3/39/Artpop_cover.png'),
	(18, 3, 12, 'Adore You', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://upload.wikimedia.org/wikipedia/en/5/52/Bangerz.png'),
	(19, 4, 13, 'We Can\'t Stop', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://upload.wikimedia.org/wikipedia/en/5/52/Bangerz.png'),
	(20, 4, 13, 'Jewels N\' Drugs', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://upload.wikimedia.org/wikipedia/en/3/39/Artpop_cover.png'),
	(21, 4, 14, 'Prisoner', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://upload.wikimedia.org/wikipedia/en/6/66/Miley_Cyrus_-_Plastic_Hearts.png'),
	(22, 4, 14, 'High', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://upload.wikimedia.org/wikipedia/en/6/66/Miley_Cyrus_-_Plastic_Hearts.png'),
	(23, 5, 15, 'Angle', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/The_Rolling_Stones_-_Goats_Head_Soup.jpg/220px-The_Rolling_Stones_-_Goats_Head_Soup.jpg'),
	(24, 5, 15, 'Winter', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/The_Rolling_Stones_-_Goats_Head_Soup.jpg/220px-The_Rolling_Stones_-_Goats_Head_Soup.jpg'),
	(25, 5, 16, 'Hot Stuff', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://upload.wikimedia.org/wikipedia/en/5/5a/Blackblue.jpg'),
	(26, 5, 16, 'Fool to Cry', 'https://a.tumblr.com/tumblr_qurfhmkxHc1z7i3ugo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551', 'https://upload.wikimedia.org/wikipedia/en/5/5a/Blackblue.jpg');
/*!40000 ALTER TABLE `song` ENABLE KEYS */;

-- Dumping structure for table music.song_genre
DROP TABLE IF EXISTS `song_genre`;
CREATE TABLE IF NOT EXISTS `song_genre` (
  `song_genre_id` int unsigned NOT NULL AUTO_INCREMENT,
  `song_id` int unsigned NOT NULL DEFAULT '0',
  `genre_id` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`song_genre_id`),
  UNIQUE KEY `uq_song_genre_song_id_genre_id` (`song_id`,`genre_id`),
  KEY `fk_song_genre_genre_id` (`genre_id`),
  CONSTRAINT `fk_song_genre_genre_id` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`genre_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_song_genre_song_id` FOREIGN KEY (`song_id`) REFERENCES `song` (`song_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- Dumping data for table music.song_genre: ~15 rows (approximately)
DELETE FROM `song_genre`;
/*!40000 ALTER TABLE `song_genre` DISABLE KEYS */;
INSERT INTO `song_genre` (`song_genre_id`, `song_id`, `genre_id`) VALUES
	(1, 1, 1),
	(2, 2, 1),
	(3, 3, 2),
	(4, 4, 2),
	(10, 12, 2),
	(6, 14, 2),
	(11, 15, 1),
	(12, 16, 1),
	(14, 17, 1),
	(5, 18, 1),
	(8, 19, 1),
	(15, 23, 2),
	(16, 24, 2),
	(17, 25, 2),
	(18, 26, 2);
/*!40000 ALTER TABLE `song_genre` ENABLE KEYS */;

-- Dumping structure for table music.song_playlist
DROP TABLE IF EXISTS `song_playlist`;
CREATE TABLE IF NOT EXISTS `song_playlist` (
  `song_playlist_id` int unsigned NOT NULL AUTO_INCREMENT,
  `song_id` int unsigned NOT NULL DEFAULT '0',
  `playlist_id` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`song_playlist_id`),
  UNIQUE KEY `uq_song_playlist_song_id_playlist_id` (`song_id`,`playlist_id`),
  KEY `fk_song_playlist_playlist_id` (`playlist_id`),
  CONSTRAINT `fk_song_playlist_playlist_id` FOREIGN KEY (`playlist_id`) REFERENCES `playlist` (`playlist_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_song_playlist_song_id` FOREIGN KEY (`song_id`) REFERENCES `song` (`song_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- Dumping data for table music.song_playlist: ~10 rows (approximately)
DELETE FROM `song_playlist`;
/*!40000 ALTER TABLE `song_playlist` DISABLE KEYS */;
INSERT INTO `song_playlist` (`song_playlist_id`, `song_id`, `playlist_id`) VALUES
	(31, 1, 1),
	(23, 1, 7),
	(37, 1, 8),
	(32, 1, 9),
	(29, 1, 13),
	(40, 1, 14),
	(41, 1, 15),
	(4, 2, 1),
	(30, 2, 7),
	(38, 3, 11),
	(17, 4, 1),
	(39, 21, 11);
/*!40000 ALTER TABLE `song_playlist` ENABLE KEYS */;

-- Dumping structure for table music.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `username` varchar(32) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `password_hash` varchar(128) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `image_url` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'https://i.ibb.co/RgpsDXy/av-modified.png',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `uq_user_email` (`email`),
  UNIQUE KEY `uq_user_username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- Dumping data for table music.user: ~12 rows (approximately)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`user_id`, `email`, `username`, `password_hash`, `image_url`) VALUES
	(1, 'nena997@gmail.com', 'nena1997', 'F3971ACEDC1DC56DBFB7D8ABB74C3B84CB22F9FECE8C640F5DBCE5B9A8C3B2221292F8170842C17C2B858411CB7C33926A596399BB184A75C4E5D3A29A07A0A7', 'https://st3.depositphotos.com/11574170/34371/v/380/depositphotos_343718752-stock-illustration-customer-care-vector-color-line.jpg?forcejpeg=true'),
	(2, 'nensi@gmail.com', 'nena', 'nena', 'https://st3.depositphotos.com/11574170/34371/v/380/depositphotos_343718752-stock-illustration-customer-care-vector-color-line.jpg?forcejpeg=true'),
	(3, 'admin@admin.com', 'admin', '836BC6397D06DE5F635683CFF01822564683B57C5298C38BD389628685D9CE9D74CBA952FC80AC305A6DD1D122BB041DFA93377880D478F27B99DA3FAFC05BF6', 'https://st3.depositphotos.com/11574170/34371/v/380/depositphotos_343718752-stock-illustration-customer-care-vector-color-line.jpg?forcejpeg=true'),
	(4, 'new@admin.com', 'new', 'AA54DEF9E0BB11C1EBBFC97A9EE63AF9E95C4FDF1D032B1DDCC0F21661F748651D2B2B8FB94E9AE041780554DB29815DAA1C0FE991DDAE54EFF0C4C28CD9D20C', 'https://st3.depositphotos.com/11574170/34371/v/380/depositphotos_343718752-stock-illustration-customer-care-vector-color-line.jpg?forcejpeg=true'),
	(5, 'myemail@gmail.com', 'usernamee', 'DD19984298860EB313CBE56F54C32B9EE46419FBF4411A223701C7B1A1CC2E5061951E04ABAEA25B1FA3FE49FBCBBD15E94BE9EA9DD21B89C1C4FB51834225DE', 'https://st3.depositphotos.com/11574170/34371/v/380/depositphotos_343718752-stock-illustration-customer-care-vector-color-line.jpg?forcejpeg=true'),
	(7, 'nevena.pavlovic@gmail.com', 'nenaP', 'AA3854F4E4A87D5A1B710419CD8881B1CF2C44A418A1919C49B9B35F87FE9F518B9EFF01FA7D083DD42D6223AECE39D518D7D42955F7ACE523D5BBC18286A0EF', 'https://st3.depositphotos.com/11574170/34371/v/380/depositphotos_343718752-stock-illustration-customer-care-vector-color-line.jpg?forcejpeg=true'),
	(10, 'nenaa@gmail.com', 'nenaa', '397A3A3C30D734A4708E3DDB57708F9CB51B07764F26B6D1EF168F6971CA0FF80045A68F41A32B51EC55AB75ADD37F89492FE0ABD1F96297850C5A71D3626F83', 'https://st3.depositphotos.com/11574170/34371/v/380/depositphotos_343718752-stock-illustration-customer-care-vector-color-line.jpg?forcejpeg=true'),
	(11, 'milos.k.pavlovic@gmail.com', 'MiPa', '5EFBFB5E69C38B84C1E564B2BB334047013A6DCC693D97695205CCD86CBC25B2445FFC9C4E037DFEABD399DD45431908B5888BACBEC6E6FDD947B2232266B091', 'https://st3.depositphotos.com/11574170/34371/v/380/depositphotos_343718752-stock-illustration-customer-care-vector-color-line.jpg?forcejpeg=true'),
	(12, 'newUser@gmail.com', 'marija.g', '3FAC147A44BF3D576CEB32A03AF63004ACC6C8BA775875EDEE1B6ED16E45AEA470867C60FBDDEF86C1F8BC3F35FE1519766A0757AC7A3F867223451A72575678', 'https://i.ibb.co/RgpsDXy/av-modified.png'),
	(13, 'nevena@nevena.com', 'nensi.p', '9CB061E801BD6D53E3716AC03B348F0568F05DB2F396C2EAC3E5DA11E8A5349FADE6398952BD82DB05A7F7B868E20C1B477F0B4C01E5482DF180264BB38C75C3', 'https://i.ibb.co/RgpsDXy/av-modified.png'),
	(14, 'a@a.om', 'testtest', 'D9A65E930D8FDD4A2C11E9CD1B9B55837D8ECF8A318157E54E38DF014EF30B63ADAE3AF9C7F9038755E51A1541BBBA90988AE6ABD91841367583C92FC41033F4', 'https://i.ibb.co/RgpsDXy/av-modified.png'),
	(15, 'milos.pav@gmail.com', 'mipa964', 'ECDD92F6313614A2BAF7961F876EE588767E8CABC942B011E01BC1F31EA962B70837DF9F3906472910A887FFA01BDF7CBBE4641F9D35C2C327FA3292F442F98D', 'https://i.ibb.co/RgpsDXy/av-modified.png');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
