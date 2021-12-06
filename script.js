//Init
WA.onInit().then(() => {
    WA.room.hideLayer('gate_open');
});

//Open Door
WA.room.onEnterLayer('door_open').subscribe(() => {
	WA.room.hideLayer('gate_open');
	WA.room.showLayer('gate_closed');
});

//Close Door
WA.room.onEnterLayer('door_close').subscribe(() => {
	WA.room.hideLayer('gate_open');
	WA.room.showLayer('gate_closed');
});