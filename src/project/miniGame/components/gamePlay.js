export const gamePlay = {
    key: 'gamePlay',
    preload: function(){
        this.load.image('bg', 'dist/miniGame/image/bg.svg');

    },
    create: function(){
        // this.stage.backgroundColor = "linear-gradient(180deg, #00020E 0%, #001D25 62%, #00223A 100%)";
        this.bg = this.add.tileSprite(600, 389, 1200, 768, 'bg');
       

    },
    update: function(){
        this.bg.tilePositionX += 2*this.speed;
    }
}