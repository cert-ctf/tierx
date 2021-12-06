WA.room.onEnterLayer('door_open').subscribe(() => {
	WA.room.hideLayer('gate_open');
	WA.room.showLayer('gate_closed');
});

WA.room.onEnterLayer('door_close').subscribe(() => {
	WA.room.hideLayer('gate_open');
	WA.room.showLayer('gate_closed');
});