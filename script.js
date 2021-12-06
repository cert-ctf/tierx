WA.room.onEnterLayer('door_open').subscribe(() => {
    WA.chat.sendChatMessage("Gates are open!", 'Info');
	WA.room.hideLayer('gate_closed');
});

WA.room.onEnterLayer('door_close').subscribe(() => {
    WA.chat.sendChatMessage("Gates are closed!", 'Info');
	WA.room.showLayer('gate_closed');
});