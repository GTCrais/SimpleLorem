<?php

return [

    'connections' => [

        'mysql' => [
            'driver' => 'mysql',
            'host' => 'localhost',
            'port' => '3306',
            'database' => 'simple_lorem',
            'username' => 'root',
            'password' => '',
			'charset' => 'utf8mb4',
			'collation' => 'utf8mb4_unicode_ci',
            'prefix' => 'sl_',
            'strict' => true,
            'engine' => 'innodb',
        ],

    ],

];
