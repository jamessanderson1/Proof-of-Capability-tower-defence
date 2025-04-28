class Enemy {
    constructor(Xposition, Yposition,Pos) {     // Size of the shape (square or circle)
        this.Xpos = Xposition;  // X position
        this.Ypos = Yposition; // Y position
        this.Pos = Pos;
        this.MoveCounter = 1;
        //this.Direction = Direction;
    }
    display(){ 
        fill(232, 19, 19);
        circle(this.Xpos, this.Ypos, 20);
    }
    move(){ 
        if (this.Pos === 1){
            this.Xpos = this.Xpos + 1;
            this.MoveCounter = this.MoveCounter + 1
            if (this.MoveCounter === 50){
                this.Pos = this.Pos + 1;
                this.MoveCounter = 0
            }
        } else if (this.Pos === 2){
            this.Ypos = this.Ypos + 1;
            this.MoveCounter = this.MoveCounter + 1
            if (this.MoveCounter === 150){
                this.Pos = this.Pos + 1;
                this.MoveCounter = 0;
            }
        } else if (this.Pos === 3){
            this.Xpos = this.Xpos + 1;
            this.MoveCounter = this.MoveCounter + 1
            if (this.MoveCounter === 100){
                this.Pos = this.Pos + 1;
                this.MoveCounter = 0;
            }
        } else if (this.Pos === 4){
            this.Ypos = this.Ypos + 1;
            this.MoveCounter = this.MoveCounter + 1
            if (this.MoveCounter === 200){
                this.Pos = this.Pos + 1;
                this.MoveCounter = 0;
            }
        } 
        else if (this.Pos === 5){
            this.Xpos = this.Xpos + 1;
            this.MoveCounter = this.MoveCounter + 1
            if (this.MoveCounter === 150){
                this.Pos = this.Pos + 1;
                this.MoveCounter = 0;
            }
        } else if (this.Pos === 6){
            this.Ypos = this.Ypos - 1;
            this.MoveCounter = this.MoveCounter + 1
            if (this.MoveCounter === 100){
                this.Pos = this.Pos + 1;
                this.MoveCounter = 0;
            }
        } else if (this.Pos === 7){
            this.Xpos = this.Xpos + 1;
            this.MoveCounter = this.MoveCounter + 1
            if (this.MoveCounter === 100){
                this.Pos = this.Pos + 1;
                this.MoveCounter = 0;
            }
        } else if (this.Pos === 8){
            this.Ypos = this.Ypos - 1;
            this.MoveCounter = this.MoveCounter + 1
            if (this.MoveCounter === 200){
                this.Pos = this.Pos + 1;
                this.MoveCounter = 0;
            }
        } else if (this.Pos === 9){
            this.Xpos = this.Xpos + 1;
            this.MoveCounter = this.MoveCounter + 1
            if (this.MoveCounter === 100){
                this.Pos = this.Pos + 1;
                this.MoveCounter = 0;
            }
        } 
    }
    getXpos(){
        return this.Xpos
    }
    getYpos(){
        return this.Xpos
    }
}