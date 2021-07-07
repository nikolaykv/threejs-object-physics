/**
 * Библиотека three.js и её составляющие
 */
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three';

/**
 * Настройки из модулей
 */
import {screenResize, donutGltfLoader, animateScene} from "./parts/functions";
import {AXES_HELPER, CAMERA_HELPER, x, y, z} from "./parts/helpers";
import {lightOne, lightTwo} from "./parts/light_settings";
import {sizes, CANVAS} from "./parts/other_settings";
import {camera} from "./parts/camera_settings";
import params from "./params.json";

/**
 * Пользовательские файлы и параметры
 */
import './style.css';

// Создать сцену
let scene = new THREE.Scene();

// Добавить все вспомогательные оси
scene.add(AXES_HELPER);
scene.add(CAMERA_HELPER);

// Добавить метки осей в сцену и задать им расположение
x.position.x = params.axesHelper.x.position;
y.position.y = params.axesHelper.y.position;
z.position.z = params.axesHelper.z.position;
scene.add(x);
scene.add(y);
scene.add(z);

// Добавить в сцену свет
scene.add(lightOne);
scene.add(lightTwo);

/**
 * Логика изменения холста
 * при изменении экрана
 * просмотра браузера
 */
screenResize();

/**
 * Использование возможностей OrbitControls
 */
let controls = new OrbitControls(camera, CANVAS)
controls.enableDamping = true;

/**
 *  Загрузка 3D объекта и установка его позиции
 */
donutGltfLoader();

/**
 * Renderer
 */
let render = new THREE.WebGLRenderer({
    canvas: CANVAS
});

render.setSize(sizes.width, sizes.height)
render.setPixelRatio(Math.min(window.devicePixelRatio, 2));


/**
 * Анимация сцены
 */
animateScene();

export {scene, render, controls};