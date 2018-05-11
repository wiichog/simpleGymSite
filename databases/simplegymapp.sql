-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-05-2018 a las 22:55:54
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `simplegymapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clinica`
--

CREATE TABLE `clinica` (
  `idcita` int(11) NOT NULL,
  `idusuario` int(11) NOT NULL,
  `fecha` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejercicios`
--

CREATE TABLE `ejercicios` (
  `id` int(11) NOT NULL,
  `Musculo` text NOT NULL,
  `Ejercicio` text NOT NULL,
  `Equipo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ejercicios`
--

INSERT INTO `ejercicios` (`id`, `Musculo`, `Ejercicio`, `Equipo`) VALUES
(1, 'Pecho', 'Press de banca', 'Mancuernos'),
(2, 'Pecho', 'Press en banca inclinada', 'Barra Inclinada'),
(3, 'Pecho', 'Press de banca declinada', 'Selectorizado'),
(4, 'Pecho', 'Aperturas planas', 'Mancuernas'),
(5, 'Pecho', 'Push ups', 'Mancuernas'),
(6, 'Pecho', 'Pullover', 'Mancuernas'),
(7, 'Pecho', 'Press', 'Selectorizado'),
(8, 'Pecho', 'Press de banca plano ', 'Barra'),
(9, 'Pecho', 'Bench Press', 'Barra Libre'),
(10, 'Tricepts', 'Push Down', 'Lazo'),
(11, 'Tricepts', 'Arm Extension', 'Selectorizado'),
(12, 'Tricepts', 'Copa', 'Mancuernas'),
(13, 'Tricepts', 'Copa', 'Lazo'),
(14, 'Tricepts', 'Press Frances', 'Barra Z'),
(15, 'Pierna', 'Leg Press', 'Selectorizado'),
(16, 'Pierna', 'Leg Extension', 'Selectorizado'),
(17, 'Pierna', 'Leg Curl', 'Selectorizado'),
(18, 'Pierna', 'Peso Muerto', 'Barra Libre'),
(19, 'Pierna', 'Gluteo', 'Selectorizado'),
(20, 'Pierna', 'Hip Abduction', 'Selectorizado'),
(21, 'Pierna', 'Hip Abduction', 'Selectorizado'),
(22, 'Hombro', 'Press Militar', 'Mancuernas'),
(23, 'Hombro', 'Vuelos Laterales', 'Mancuernas'),
(24, 'Hombro', 'Press', 'Barra'),
(25, 'Hombro', 'Vuelos Posteriores', 'Selectorizado'),
(26, 'Espalda', 'PullDown Abierto', 'Selectorizado'),
(27, 'Espalda', 'PullDown Cerrado', 'Selectorizado'),
(28, 'Espalda', 'Row', 'Selectorizado'),
(29, 'Espalda', 'Pull Over', 'Polea'),
(30, 'Biceps', 'Arm Curl', 'Selectorizado'),
(31, 'Biceps', 'Curl', 'Barra Z'),
(32, 'Biceps', 'Curl', 'Barra Libre'),
(33, 'Biceps', 'Arm Curl', 'Mancuernas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutinausuario`
--

CREATE TABLE `rutinausuario` (
  `idUsuario` int(11) NOT NULL,
  `rutina` text NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFinal` date NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `rutinausuario`
--

INSERT INTO `rutinausuario` (`idUsuario`, `rutina`, `fechaInicio`, `fechaFinal`, `status`) VALUES
(1, '[4,8,8,7,20,10,10,18,24,16,26,18,22,34,46,30]', '2018-04-05', '2018-04-12', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL,
  `nombre` int(11) NOT NULL,
  `edad` int(11) NOT NULL,
  `peso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
