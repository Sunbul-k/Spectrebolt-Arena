/*
 * SniArena - 1v1 Sniper Game
 * Copyright (C) 2025  Saif Kayyali
 * * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */

socket.on('playerShoot', (bulletData) => {
    // Server tellin other player that a bullet was shot
    socket.broadcast.emit('enemyShoot', bulletData);
});