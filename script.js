//Init
WA.onInit().then(() => {
    WA.room.hideLayer('gate_open');
});

//Open Door
WA.room.onEnterLayer('door_open').subscribe(() => {
	if (WA.player.tags.includes('admin'))
	{
		WA.room.showLayer('gate_open');
		WA.room.hideLayer('gate_closed');
	}
});

//Close Door
WA.room.onEnterLayer('door_close').subscribe(() => {
	if (WA.player.tags.includes('admin'))
	{
		WA.room.hideLayer('gate_open');
		WA.room.showLayer('gate_closed');
	}
});
