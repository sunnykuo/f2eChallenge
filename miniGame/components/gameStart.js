export const gameStart = {
    key: 'gameStart',
    preload: function(){
        this.load.image('bg', 'dist/image/bg.svg');
        this.speed = 1
    },
    create: function(){
        // this.stage.backgroundColor = "linear-gradient(180deg, #00020E 0%, #001D25 62%, #00223A 100%)";
        this.bg = this.add.tileSprite(600, 389, 1200, 768, 'bg');       

    },
    update: function(){
        this.bg.tilePositionX += 2*this.speed;   
    }
}