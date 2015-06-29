<?php
//AutoLoader do Composer
$loader = require __DIR__.'/vendor/autoload.php';
//vamos adicionar nossas classes ao AutoLoader
$loader->add('Doctrine', __DIR__.'/src');

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\Driver\AnnotationDriver;
use Doctrine\Common\Annotations\AnnotationReader;
use Doctrine\Common\Annotations\AnnotationRegistry;

//se for falso usa o APC como cache, se for true usa cache em arrays
$isDevMode = false;
//caminho das entidades
$paths = array(__DIR__ . '/src/Doctrine/Model');
// configurações do banco de dados
$dbParams = array(
	'driver'=> 'pdo_mysql',
	'user'=> 'root',
	'password' => 'vaypp',
	'dbname'=> 'noblug_site');

$config = Setup::createConfiguration($isDevMode);
//leitor das annotations das entidades
$driver = new AnnotationDriver(new AnnotationReader(), $paths);
$config->setMetadataDriverImpl($driver);
//registra as annotations do Doctrine
AnnotationRegistry::registerFile(__DIR__ . '/vendor/doctrine/orm/lib/Doctrine/ORM/Mapping/Driver/DoctrineAnno/tations.php');
//cria o entityManager
$entityManager = EntityManager::create($dbParams, $config);