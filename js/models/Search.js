
export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const data = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            const res = await data.json();
            this.result = res.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
            alert('SEARCH.JS')
        }
    }
}
