Vue.component("skills", {
    template: `<div>



<div class="row">



    <div class="col-lg-4 col-md-6 col-sm-12" v-for="item in items">
    <div class="card text-dark bg-light mb-3" :class="item.class" style="max-width: 30rem;">
        <div class="card-body">
            <p class="card-text text-center">
                <i :class="item.icon"></i>
            </p>

            <!-- <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100">100%</div>
            </div> -->

        </div>
        <div class="card-footer text-white text-center bg-custom">{{ item.title }}</div>
    </div>
    </div>
    </div>
    



                    
    </div>
    `,
    data() {
        return {

            items: [
                {
                    icon: "fab fa-html5 fa-5x",
                    title: "HTML",
                    class: "effect-right-skills1",
                },
                {
                    icon: "fab fa-css3-alt fa-5x",
                    title: "CSS",
                    class: "effect-bottom-skills3",
                },
                {
                    icon: "fab fa-js fa-5x",
                    title: "JS",
                    class: "effect-left-skills5",
                },
                {
                    icon: "fab fa-bootstrap fa-5x",
                    title: "Bootstrap",
                    class: "effect-right-skills2",
                },
                {
                    icon: "fab fa-php fa-5x",
                    title: "PHP",
                    class: "effect-bottom-skills4",
                },
                {
                    icon: "fab fa-laravel fa-5x",
                    title: "Laravel",
                    class: "effect-left-skills6",
                },

            ],
        }
    },


})
