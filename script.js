WA.room.onEnterLayer('door_open').subscribe(() => {
	if (WA.player.tags.includes('admin'))
	{
		WA.room.showLayer('gate_open');
		WA.room.hideLayer('gate_closed');
	}
});

WA.room.onEnterLayer('door_closed').subscribe(() => {
	if (WA.player.tags.includes('admin'))
	{
		WA.room.hideLayer('gate_open');
		WA.room.showLayer('gate_closed');
	}
});
