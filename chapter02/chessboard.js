// Student Workspace
Chess.start = function (size) {

	var chess  = "";

	if(!size && size != 0) {
		size = 8;
	}

    for(var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if((i+j) %2 == 0) {
                chess += " ";
            }
            else {
                chess += "#";
            }
        }
        chess += "\n";
    }
	 
	return chess;

};