/*
 * SniArena - 1v1 Sniper Game
 * Copyright (C) 2025  Saif Kayyali
 * * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */


const canvas = document.getElementById('gameCanvas');
const contx = canvas.getContext('2d');

let player = { x: 50, y: 50, angle: 0 };
let bullets = [];

function gameLoop() {
    contx.clearRect(0, 0, canvas.width, canvas.height);

    // Run Bullet math
    updateBullets(); 

    // Draw Player
    drawPlayer();

    requestAnimationFrame(gameLoop);
}

function shoot() {
    bullets.push({
        x: player.x,
        y: player.y,
        angle: player.angle, // Direction the player was facing
        speed: 15,           // Velocity
        timer: 100           // Bullet dies after 100 frames so it doesn't fly forever
    });
}

// The Update Loop
function updateBullets() {
    for (let i = bullets.length - 1; i >= 0; i--) {
        let b = bullets[i];
        
        // Move bullet using Resultant Force math from Physics class 
        b.x += Math.cos(b.angle) * b.speed;
        b.y += Math.sin(b.angle) * b.speed;
        
        b.timer--;

        // Draw the bullet
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(b.x, b.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Memory Management (Clean up dead bullets)
        if (b.timer <= 0) {
            bullets.splice(i, 1);
        }
    }
}