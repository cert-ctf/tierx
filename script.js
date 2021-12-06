WA.room.onEnterLayer('door_open').subscribe(() => {
	WA.room.hideLayer('gate');
});

WA.room.onEnterLayer('door_close').subscribe(() => {
	WA.room.showLayer('gate');
});