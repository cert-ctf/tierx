(async () => {
    await WA.onInit();
    console.log('Current player name: ', WA.player.name);
	WA.room.hideLayer('gate_open');
})();
