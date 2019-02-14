-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2018 at 05:48 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rent`
--

-- --------------------------------------------------------

--
-- Table structure for table `reg`
--

CREATE TABLE `reg` (
  `id` int(11) NOT NULL,
  `username` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `usertype` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `mobile` varchar(100) COLLATE utf16_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Dumping data for table `reg`
--

INSERT INTO `reg` (`id`, `username`, `password`, `usertype`, `mobile`) VALUES
(1, 'admin', 'admin', 'admin', '01336238767'),
(2, 'shoaibaaatonmoy01@gmail.com', '', 'renter', '099ur'),
(4, 'dfoui', 'mmmm', 'renter', '099ur'),
(5, 'trailer', 'trailer', 'owner', '099ur'),
(7, 'test', 'test', 'renter', '099ur'),
(8, 'dfoui', 'sdad', 'renter', '099ur'),
(9, 'user', 'renter', 'renter', '01536238767'),
(10, 'iamkih', '123456', 'owner', '01820570771');

-- --------------------------------------------------------

--
-- Table structure for table `uploadpost`
--

CREATE TABLE `uploadpost` (
  `id` int(100) NOT NULL,
  `title` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `bedroom` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `bathroom` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `size` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `rent` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `photos` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `address` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `shortdes` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `phone` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `location` varchar(100) COLLATE utf16_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Dumping data for table `uploadpost`
--

INSERT INTO `uploadpost` (`id`, `title`, `bedroom`, `bathroom`, `size`, `rent`, `photos`, `address`, `shortdes`, `name`, `phone`, `email`, `location`) VALUES
(8, 'Basha vara', '3', '3', '1400', '20000', 'photos-1541543070907.jpg', 'nikunja', 'well decorated', 'zaman', '01536238767', 'shoaibaaatonmoy@gmail.com', 'nikunja'),
(9, 'flat rent', '4', '3', '1500', '25000', 'photos-1541543168151.jpg', 'banani', 'garage available', 'aktar', '01536238767', 'shoaibaaatonmoy@gmail.com', 'banani'),
(10, 'mess rent', '1', '1', '400', '6000', 'photos-1541543323493.jpg', 'khilkhet', 'one room available', 'monir', '01536238767', 'shoaibaaatonmoy@gmail.com', 'khilkhet'),
(11, 'hostel', '1', '1', '500', '4500', 'photos-1541543446504.jpg', 'motijheel', 'all facilities available', 'arafat', '01536238767', 'shoaibaaatonmoy01@gmail.com', 'motijheel'),
(12, 'room vara', '2', '1', '1000', '16000', 'photos-1541567127195.jpg', 'khilkhet', 'well decorated', 'kholil', '01536238767', 'shoaibaaatonmoy@gmail.com', 'khilkhet');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reg`
--
ALTER TABLE `reg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `uploadpost`
--
ALTER TABLE `uploadpost`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reg`
--
ALTER TABLE `reg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `uploadpost`
--
ALTER TABLE `uploadpost`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
