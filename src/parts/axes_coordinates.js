import params from '../params.json';
import * as THREE from "three";
import {HELVETIKER_REGULAR_FONT} from "./other_settings";

let
    // 0
    zeroCoordinates = new THREE.Mesh(
        new THREE.TextGeometry("0", {
            size: params.axesCoordinates.size,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // Ось x

    // 0.1
    pointOneX = new THREE.Mesh(
        new THREE.TextGeometry("0.1", {
            size: params.axesCoordinates.size,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.2
    pointTwoX = new THREE.Mesh(
        new THREE.TextGeometry("0.2", {
            size: params.axesCoordinates.size,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.3
    pointThreeX = new THREE.Mesh(
        new THREE.TextGeometry("0.3", {
            size: params.axesCoordinates.size,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.4
    pointFourX = new THREE.Mesh(
        new THREE.TextGeometry("0.4", {
            size: params.axesCoordinates.size,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.5
    pointFiveX = new THREE.Mesh(
        new THREE.TextGeometry("0.5", {
            size: params.axesCoordinates.size,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // Ось y

    // 0.1
    pointOneY = new THREE.Mesh(
        new THREE.TextGeometry("0.1", {
            size: params.axesCoordinates.size,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.2
    pointTwoY = new THREE.Mesh(
        new THREE.TextGeometry("0.2", {
            size: params.axesCoordinates.size,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.3
    pointThreeY = new THREE.Mesh(
        new THREE.TextGeometry("0.3", {
            size: params.axesCoordinates.size,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.4
    pointFourY = new THREE.Mesh(
        new THREE.TextGeometry("0.4", {
            size: params.axesCoordinates.size,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.5
    pointFiveY = new THREE.Mesh(
        new THREE.TextGeometry("0.5", {
            size: params.axesCoordinates.size,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // Ось Z

    // 0.1
    pointOneZ = new THREE.Mesh(
        new THREE.TextGeometry("0.1", {
            size: params.axesCoordinates.size,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.2
    pointTwoZ = new THREE.Mesh(
        new THREE.TextGeometry("0.2", {
            size: params.axesCoordinates.size,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.3
    pointThreeZ = new THREE.Mesh(
        new THREE.TextGeometry("0.3", {
            size: params.axesCoordinates.size,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.4
    pointFourZ = new THREE.Mesh(
        new THREE.TextGeometry("0.4", {
            size: params.axesCoordinates.size,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    ),

    // 0.5
    pointFiveZ = new THREE.Mesh(
        new THREE.TextGeometry("0.5", {
            size: params.axesCoordinates.size,
            height: params.axesHelper.textHeight,
            curveSegments: params.axesHelper.curveSegments,
            font: HELVETIKER_REGULAR_FONT,
            style: "normal"
        }),
        new THREE.MeshBasicMaterial(
            {color: params.axesCoordinates.color}
        )
    );


export {
    zeroCoordinates,
    pointOneX,
    pointTwoX,
    pointThreeX,
    pointFourX,
    pointFiveX,

    pointOneY,
    pointTwoY,
    pointThreeY,
    pointFourY,
    pointFiveY,

    pointOneZ,
    pointTwoZ,
    pointThreeZ,
    pointFourZ,
    pointFiveZ
};