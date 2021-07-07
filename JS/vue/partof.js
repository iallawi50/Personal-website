Vue.component("partof", {
    template: `<div>



<div class="row">


<div class="col-lg-6 col-md-6 col-sm-12" v-for="item in items">
<a :href="item.link" target="_blank">
    <div class="card text-dark bg-light mb-3" :class="item.class" style="max-width: 30rem;">
        <div class="card-body">
            <p class="card-text text-center">
                <img :src="item.img" :width="item.size" alt="">
            </p>


            <center>

                <small class="text-muted">{{ item.role }}</small>
            </center>

        </div>
        <div class="card-footer text-white text-center bg-custom">{{ item.title }}</div>
    </div>
</a>
</div>



    </div>
                        
    </div>
    `,
    data() {
        return {

            items: [
                {
                    img: "./partof/castmedia.png",
                    title: "CastMedia",
                    link: "https://cast-media.netlify.app/",
                    class: "effect-right-brand",
                    role: "مؤسس",
                    size: "200px"
                },
                {
                    img: "./partof/bitcode.png",
                    title: "BitCode",
                    link: "https://BitCode.sa",
                    class: "effect-left-brand",
                    role: "متدرب",
                    size: "112px"
                },
            ],
        }
    },


})
