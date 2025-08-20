/**
 * Represents the playable character.
 * Inherits from {@link MovableObject}.
 */
class Character extends MovableObject {
    // #region attributes

    /** Character height in pixels */
    height = 250;

    /** Y position of the character */
    y = 80;

    /** Movement speed */
    speed = 10;

    /** Images for walking animation */
    imagesWalking = ImagesHub.character.walking;

    /** Images for jumping animation */
    imagesJumping = ImagesHub.character.jumping;

    /** Images for dead animation */
    imagesDead = ImagesHub.character.dead;

    /** Images for hurt animation */
    imagesHurt = ImagesHub.character.hurt;

    /** Images for standing animation */
    imagesStanding = ImagesHub.character.standing;

    /** Images for idle animation */
    imagesIdle = ImagesHub.character.idle;

    /** Reference to the game world */
    world;

    /** Offsets for collision detection */
    offSett = {
        top: 110,
        right: 25,
        bottom: 10,
        left: 20
    }

    /** Time the character has been idle (ms) */
    idleTime = 0;

    // #endregion

    /**
     * Creates a new character, loads all animations, and starts gravity and animation.
     */
    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesStanding);
        this.loadImages(this.imagesIdle);
        this.applyGravity();
        this.animate();
    }

    // #region methods

    /** Starts all movement and animation intervals */
    animate() {
        this.startMovementInterval();
        this.startAnimationInterval();
    }

    /** Monitors keyboard input and moves the character */
    startMovementInterval() {
        IntervalHub.startInterval(() => {
            let isMoving = false;
            if (this.handleMoveRight()) isMoving = true;
            if (this.handleMoveLeft()) isMoving = true;
            if (this.handleJump()) isMoving = true;
            this.world.camera_x = -this.x + 100;
            if (isMoving) {
                this.idleTime = 0;
            } else {
                this.idleTime += 1000 / 60;
            }
            if (!isMoving && !Soundhub.characterWalking.paused) {
                Soundhub.stopSound(Soundhub.characterWalking);
            }
        }, 1000 / 60);
    }

    /** Moves the character to the right */
    handleMoveRight() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.otherDirection = false;
            if (Soundhub.characterWalking.paused) {
                Soundhub.playSound(Soundhub.characterWalking);
            }
            return true;
        }
        return false;
    }

    /** Moves the character to the left */
    handleMoveLeft() {
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
            if (Soundhub.characterWalking.paused) {
                Soundhub.playSound(Soundhub.characterWalking);
            }
            return true;
        }
        return false;
    }

    /** Makes the character jump */
    handleJump() {
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
            if (Soundhub.characterJump.paused) {
                Soundhub.playSound(Soundhub.characterJump);
            }
            return true;
        }
        return false;
    }

    /** Starts animation intervals */
    startAnimationInterval() {
        IntervalHub.startInterval(() => {
            if (this.isDead()) {
                this.handleDeadAnimation();
            } else if (this.isHurt()) {
                this.handleHurtAnimation();
            } else if (this.isAboveGround()) {
                this.handleJumpAnimation();
            } else {
                this.handleWalkOrIdleAnimation();
            }
        }, 50);
    }

    /** Plays the death animation */
    handleDeadAnimation() {
        this.playAnimation(this.imagesDead);
        if (!this.isDeadSoundPlayed) {
            Soundhub.playSound(Soundhub.characterDead);
            this.isDeadSoundPlayed = true;
            setTimeout(() => {
                Soundhub.stopAllSounds();
            }, 1000);
        }
    }

    /** Plays the hurt animation */
    handleHurtAnimation() {
        this.playAnimation(this.imagesHurt);
        if (!this.isHurtSoundPlayed) {
            Soundhub.playSound(Soundhub.characterDamage);
            this.isHurtSoundPlayed = true;
        }
    }

    /** Plays the jumping animation */
    handleJumpAnimation() {
        this.playAnimation(this.imagesJumping);
    }

    /** Plays walking or idle animations, or standing if idle for a long time */
    handleWalkOrIdleAnimation() {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.imagesWalking);
        } else if (this.idleTime >= 5000) {
            this.playAnimation(this.imagesStanding);
            if (!this.isSnoringSoundPlayed) {
                Soundhub.playSound(Soundhub.characterSnoring);
                this.isSnoringSoundPlayed = true;
            }
        } else {
            this.playAnimation(this.imagesIdle);
            this.isSnoringSoundPlayed = false;
        }
        this.isDeadSoundPlayed = false;
        this.isHurtSoundPlayed = false;
    }

    /**
     * Draws the collision frame of the character.
     * @param {CanvasRenderingContext2D} ctx - The canvas drawing context
     */
    drawRealFrame(ctx) {
        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'rgba(255, 0, 0, 0)';
            ctx.rect(
                this.x + this.offSett.left,
                this.y + this.offSett.top,
                this.width - this.offSett.left - this.offSett.right,
                this.height - this.offSett.top - this.offSett.bottom
            );
            ctx.stroke();
        }
    }

    // #endregion
}

