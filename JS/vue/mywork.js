Vue.component("mywork", {
    template: `<div>



<div class="row">


<div class="col-lg-4 col-md-6" v-for="item in items">
<div class="card text-dark bg-light mb-3" :class="item.class" style="min-height: 12rem;">
    <div class="card-header d-flex text-white bg-custom">


    <div class="d-flex d-inline  mt-auto mb-auto"  style="flex:auto;">

    {{ item.title }}

        </div>
        <div class="d-flex d-inline mt-auto mb-auto ml-0">
        <a target=_blank :href="item.link">
        <i class="fas fa-link"></i>
        </a>
        </div>
    

    </div>
        <div class="card-body">
            <p class="card-text float-right">
            {{ item.description }}
            </p>
            



            </div>
            <div class="card-footer">
            <small class="card-text float-right text-muted">
            تم الإطلاق في تاريخ
            {{ item.date }}
            </small>
            </div>


        </div>
    </div>

</div>



    </div>
                        
    </div>
    `,
    data() {
        return {

            items: [
                {
                    title: "العلماء",
                    link: "https://al3lma2.netlify.app",
                    description: "مطوية إلكترونية لعلماء الفيزياء والكيمياء",
                    date: "17/11/2020",
                },
                                {
                    title: "كاست ميديا",
                    link: "https://cast-media.netlify.app",
                    description: "موقع فريق كاست ميديا للخدمات الالكترونية ",
                    date: "20/11/2020",
                },
                {
                    title: "موجة الحداثة",
                    link: "https://mwave.sa/",
                    description: "موقع متجر موجة الحداثة",
                    date: "18/01/2021",
                },
                {
                    title: "ستائر الصفوة",
                    link: "https://elite-cs.netlify.app",
                    description: "موقع متجر ستائر الصفوة",
                    date: "12/02/2021",
                },
                {
                    title: "مشاريعي",
                    link: "http://myprojects-cm.herokuapp.com",
                    description: "موقع لإدارة المهام والمشاريع",
                    date: "22/5/2021",
                },
                {
                    title: "عاداتي ومهاراتي",
                    link: "http://habitsandskills.herokuapp.com",
                    description: "موقع يساعدك على اكتساب العادات والمهارات المفيدة والتخلص من العادات السيئة في 40 يوماً",
                    date: "08/6/2021",
                },
            ],
        }
    },


})
