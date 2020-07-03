class IMCHistory {
    constructor() {
        this._history = [];
        const historyJson = localStorage.getItem("imc-history");
        if (historyJson === null) return;
        this._history = JSON.parse(historyJson);
    }
    add(imc) {
        this._history.push(imc);
        const historyJson = JSON.stringify(this._history);
        38
        localStorage.setItem("imc-history", historyJson);
    }
    get history() {
        return this._history;
    }
}
export default IMCHistory