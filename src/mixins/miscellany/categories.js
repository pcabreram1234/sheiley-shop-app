export default {
    methods: {
        requestCategories() {
            this.axios
                .get(
                    `${this.apiDomain}/Miscellany/categories/${this.user.id_user}`
                )
                .then(response => {
                    //Mutation
                    this.setCategories(response.data);
                })
                .catch(function (error) {
                    console.log("TCL: deleteMeasurementUnit -> error", error);
                });
        }
    }
};