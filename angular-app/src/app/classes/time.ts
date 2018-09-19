export class Time {

    public milliseconds: number = 0;

    constructor(milliseconds: number) {
        this.milliseconds = milliseconds;
    }

    public get h() { return (Math.floor(this.milliseconds / 1000 / 60 / 60) % 24); }
    public get m() { return (Math.floor(this.milliseconds / 1000 / 60) % 60); }
    get timeString() {
        return (
            `${this.h}:` +
            `${this.m < 10 ? '0' + this.m : this.m}`
        );
    }
    static getTimeString(milliseconds: number) {
        let h = Math.floor(milliseconds / 1000 / 60 / 60) % 24;
        let m = Math.floor(milliseconds / 1000 / 60) % 60
        return (
            `${h}:` +
            `${m < 10 ? '0' + m : m}`
        );
    }
}
