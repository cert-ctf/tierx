WA.room.onEnterLayer('door_open').subscribe(() => {
	WA.room.hideLayer('gateopen');
	WA.room.showLayer('gateclosed');
});

WA.room.onEnterLayer('door_close').subscribe(() => {
	WA.room.hideLayer('gateopen');
	WA.room.showLayer('gateclosed');
});