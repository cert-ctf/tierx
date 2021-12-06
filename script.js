WA.room.onEnterLayer('door_open').subscribe(() => {
    WA.chat.sendChatMessage("Hello!", 'Open Door');
	WA.room.hideLayer('gate_close');
});

WA.room.onEnterLayer('door_close').subscribe(() => {
    WA.chat.sendChatMessage("Hello!", 'Close Door');
	WA.room.showLayer('gate_close');
});