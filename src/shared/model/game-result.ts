export class GameResult {
    constructor(
        public gameId: string,
        public categoryId: string,
        public date: Date,
        public points: number
    ) {}
}