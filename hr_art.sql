-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 09, 2024 at 04:41 PM
-- Server version: 8.3.0
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hr_art`
--

-- --------------------------------------------------------

--
-- Table structure for table `painting_art`
--

DROP TABLE IF EXISTS `painting_art`;
CREATE TABLE IF NOT EXISTS `painting_art` (
  `PaintingID` int NOT NULL AUTO_INCREMENT,
  `ImageURL` varchar(255) NOT NULL,
  `Title` varchar(100) NOT NULL,
  `Artist` varchar(255) DEFAULT 'HR_ART',
  `Width` decimal(5,2) DEFAULT NULL,
  `Height` decimal(5,2) DEFAULT NULL,
  `Orientation` varchar(10) GENERATED ALWAYS AS ((case when (`Width` > `Height`) then 'Landscape' else 'PORTRAIT' end)) STORED,
  `SizeCategory` varchar(10) GENERATED ALWAYS AS ((case when ((`Width` < 50) and (`Height` < 50)) then 'Small' when ((`Width` between 50 and 100) or (`Height` between 50 and 100)) then 'Medium' else 'Large' end)) STORED,
  `YearCreated` int NOT NULL,
  `Description` text,
  PRIMARY KEY (`PaintingID`)
) ENGINE=MyISAM AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `painting_art`
--

INSERT INTO `painting_art` (`PaintingID`, `ImageURL`, `Title`, `Artist`, `Width`, `Height`, `YearCreated`, `Description`) VALUES
(120, 'https://via.placeholder.com/1080x1080.png?text=Image+20', 'Example Painting 20', 'HR_ART', 150.00, 150.00, 2023, 'Description for painting 20.'),
(119, 'https://via.placeholder.com/1080x1080.png?text=Image+19', 'Example Painting 19', 'HR_ART', 120.00, 60.00, 2022, 'Description for painting 19.'),
(115, 'https://via.placeholder.com/1080x1080.png?text=Image+15', 'Example Painting 15', 'HR_ART', 108.00, 72.00, 2018, 'Description for painting 15.'),
(118, 'https://via.placeholder.com/1080x1080.png?text=Image+18', 'Example Painting 18', 'HR_ART', 64.00, 96.00, 2021, 'Description for painting 18.'),
(117, 'https://via.placeholder.com/1080x1080.png?text=Image+17', 'Example Painting 17', 'HR_ART', 128.00, 96.00, 2020, 'Description for painting 17.'),
(116, 'https://via.placeholder.com/1080x1080.png?text=Image+16', 'Example Painting 16', 'HR_ART', 192.00, 120.00, 2019, 'Description for painting 16.'),
(114, 'https://via.placeholder.com/1080x1080.png?text=Image+14', 'Example Painting 14', 'HR_ART', 90.00, 120.00, 2017, 'Description for painting 14.'),
(113, 'https://via.placeholder.com/1080x1080.png?text=Image+13', 'Example Painting 13', 'HR_ART', 70.00, 70.00, 2016, 'Description for painting 13.'),
(112, 'https://via.placeholder.com/1080x1080.png?text=Image+12', 'Example Painting 12', 'HR_ART', 80.00, 60.00, 2015, 'Description for painting 12.'),
(111, 'https://via.placeholder.com/1080x1080.png?text=Image+11', 'Example Painting 11', 'HR_ART', 85.00, 85.00, 2014, 'Description for painting 11.'),
(110, 'https://via.placeholder.com/1080x1080.png?text=Image+10', 'Example Painting 10', 'HR_ART', 50.00, 30.00, 2013, 'Description for painting 10.'),
(108, 'https://via.placeholder.com/1080x1080.png?text=Image+8', 'Example Painting 8', 'HR_ART', 30.00, 50.00, 2011, 'Description for painting 8.'),
(109, 'https://via.placeholder.com/1080x1080.png?text=Image+9', 'Example Painting 9', 'HR_ART', 35.00, 50.00, 2012, 'Description for painting 9.'),
(103, 'https://via.placeholder.com/1080x1080.png?text=Image+3', 'Example Painting 3', 'HR_ART', 30.00, 30.00, 2006, 'Description for painting 3.'),
(107, 'https://via.placeholder.com/1080x1080.png?text=Image+7', 'Example Painting 7', 'HR_ART', 60.00, 60.00, 2010, 'Description for painting 7.'),
(106, 'https://via.placeholder.com/1080x1080.png?text=Image+6', 'Example Painting 6', 'HR_ART', 48.00, 36.00, 2009, 'Description for painting 6.'),
(105, 'https://via.placeholder.com/1080x1080.png?text=Image+5', 'Example Painting 5', 'HR_ART', 40.00, 60.00, 2008, 'Description for painting 5.'),
(104, 'https://via.placeholder.com/1080x1080.png?text=Image+4', 'Example Painting 4', 'HR_ART', 50.00, 50.00, 2007, 'Description for painting 4.'),
(102, 'https://via.placeholder.com/1080x1080.png?text=Image+2', 'Example Painting 2', 'HR_ART', 60.00, 40.00, 2005, 'Description for painting 2.'),
(101, 'https://via.placeholder.com/1080x1080.png?text=Image+1', 'Example Painting 1', 'HR_ART', 40.00, 30.00, 2004, 'Description for painting 1.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
