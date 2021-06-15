const Footer = {
  data() {
    return {
      counter: 0,
    };
  },
  template: `
    <div class="footer backgrounddark  border border-1 border-white overflow-hidden">
    <div class="p-2 largetext">Company</div>
    <div class="row justify-content-between ">
        <div class="col-6 col-sm-7">
            <nav class="navbar navbar-expand-lg">
                <div class="">
                <ul class="navbar-nav   ">
                    <li class="navbar-item ">
                        <a href="#" class="footer-link ">Blog</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="footer-link ">Wholesale</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="footer-link">Roostery</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="footer-link">Our Story</a>
                    </li>
                </ul>
                </div>
                </nav>
        </div>
       
        <div class="col-6 col-sm-5 justify-content-end">
            <nav class="navbar navbar-expand-lg ">
                <div class="  ">
                <ul class="navbar-nav ">
                    <li class="navbar-item ">
                        <a href="#" class="footer-link ">Shipping</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="footer-link">Career</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="footer-link">Privacy Policy</a>
                    </li>
                </ul>
                </div>
                </nav>
        </div>
       
    </div>
  
</div>
    `,
};

const Newsletter = {
  data() {
    return {
      counter: 0,
    };
  },
  template: `
    <div class=" footer  backgrounddark text-center  border border-1 border-white px-3" >
    <div class="p-2 p-sm-3 largetext"><strong>Newsletter</strong></div>
    <div class="container-fluid py-2">
       
        <div class=" row g-2 ">
            
                <div class="col-6 col-sm-3">
                    <input type="text" class="form-control " id="firstName" placeholder="First Name">
                  </div>
                  <div class=" col-6 col-sm-3 ">
                    <input type="text" class="form-control " id="surName" placeholder="Surname">
                  </div>
                <div class="col-6 col-sm-3 ">      
                  <input type="email" class="form-control "  id="email" aria-describedby="emailHelp" placeholder="Email address">     
                </div> 
                <div class="col-6 col-sm-3  ">
                    <button type="submit" class="btn btn-md btn-secondary  px-3 px-lg-5 py-1  text-nowrap ">SIGN UP</button>
                </div>   
        </div>
       
    </div>
  </div>
    `,
};

const Header = {
  data() {
    return {
      state: null,
      purchased_class:null,
      purchased_class_title: null,
      isClass: null,
      quatity:null,
      duration:null,
    };
  },
  created() {
    this.purchased_class_title = localStorage.purchased_class_title
    this.isClass = localStorage.isClass
    this.quantity = localStorage.quantity ? localStorage.quantity : 1;
    this.duration = localStorage.duration
    if (localStorage.isClass == 'yes') {
      axios
      .get("../classes.json")
      .then((response) => {
        const item = response.data.filter((x) => x.title == this.purchased_class_title)[0];
        this.purchased_class = item;
        console.log(item,'class')
      })
      .catch((e) => {
        console.error(e);
      });
    }
   else  {
      console.log('nnnn')
      axios
      .get("../subscriptions.json")
      .then((response) => {
        const item = response.data.filter((x) => x.title == this.purchased_class_title)[0];
        this.purchased_class = item;
        console.log(item,'subscription')
      })
      .catch((e) => {
        console.error(e);
      });
    }

  },
  mounted() {
  

  },
  template: `
      <div class=" text-white backgrounddark text-white overflow-hidden ">
      <div class="">
          <div class="row  py-3 fw-bold ">
                  <div class=" col-6 text-center  ">
                     32 Grand canal ST lower</br>  Dublin 2
                  </div>
                  <div class="col-6 text-center ">
                      7 Sussex Mews, Sussex</br> Terrace, Dublin 4
                  </div>
          </div>
        <div class="navbar-header text-center container-fluid ">
        <a href="index.html" class="text-white">  <h3 class="fw-bolder fst-italic mainheader">3FE COFFEE</h3> </a>
        </div>  
        <div class="d-flex justify-content-center ">
          <a href="#" class="text-white"><h2><i class="fa fa-instagram mx-3 social-link"></i></h2></a>
          <a href="#" class="text-white"><h2><i class="fa fa-twitter-square mx-3 social-link"></i></h2></a>
          <a href="#" class="text-white"><h2><i class="fa fa-facebook-square mx-3 social-link"></i></i></h2></a>
          
        </div>  
      </div>  
     <div class="row ">
        <nav class="navbar navbar-expand-lg  navbar-light col-10 col-lg-11">
          <div class="container-fluid ">
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon  "></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav py-2">
                <li class="nav-item">
                  <a class="mainnavbar-link active  " aria-current="page" href="account.html">ACCOUNT</a>
                </li>
                <li class="nav-item">
                  <a class="mainnavbar-link active " aria-current="page" href="#">Coffee</a>
                </li>
                <li class="nav-item">
                  <a class="mainnavbar-link  active" aria-current="page" href="subscriptions.html">Subscriptions</a>
                </li>
                <li class="nav-item">
                  <a class="mainnavbar-link active " aria-current="page" href="#">Equipment</a>
                </li>
                <li class="nav-item">
                  <a class="mainnavbar-link active " aria-current="page" href="#">Merchandise</a>
                </li>
                <li class="nav-item">
                  <a class="mainnavbar-link active " aria-current="page" href="#">Brew guides</a>
                </li>
                <li class="nav-item">
                  <a class="mainnavbar-link active " aria-current="page" href="classes.html">Classes</a>
                </li>
                <li class="nav-item">
                  <a class="mainnavbar-link active " aria-current="page" href="#">Events</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <button type="button" class="btn col-1 col-lg-1 text-white" data-bs-toggle="modal" data-bs-target="#basketModal"><h1><i class="fa fa-shopping-basket social-link "></i></h1></button>
        <!-- Modal -->
        <div class="modal fade " id="basketModal" tabindex="-1" aria-labelledby="basketModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-md basket">
            <div class="modal-content">
              <div class="modal-body p-0 ">
                  <button type="button" class="btn-close pull-right p-3" data-bs-dismiss="modal" aria-label="Close"></button>
                  <div class="backgroundorange dark-text text-center p-3 ">
                      <h5 class="  py-3"><strong>BASKET</strong></h5>
                      <div class="row g-1 p-3 ">
                      <div class="col-6">
                        <img v-if="purchased_class" class="img-fluid" :src="purchased_class?.image" alt="product"> 
                      </div>
                      
                      <ul v-if="purchased_class" class=" col-6  list-unstyled  d-flex flex-column justify-content-around align-items-center">
                          <li class=" "  >{{purchased_class?.title}}</li>
                          <li class=" "  >£{{purchased_class?.price}}</li>
                          <li v-if='!isClass' class="">Time : {{purchased_class?.time}}HRS</li>
                          <li v-if='isClass' class="">Duration : {{duration}}</li>
                          <li v-if='isClass' class="">Grind: <span>Whole Bean</span></li>
                       </ul>
                  </div>
                      <h5 class="  py-5" v-if="!purchased_class">Your basket is empty</h5>
                      <a v-if="purchased_class" href="email.html">                      <button class="btn  backgrounddark  text-white px-2 px-md-5 py-1 py-md-3">CHECKOUT</button>
                      </a>
                  </div>
              
              </div>
             
            </div>
          </div>
        </div>
  
	
     </div>
    
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js"></script>

      `,
};

Vue.createApp({
  data() {
    return {
      items: null,
    };
  },
  created() {
    axios
      .get("../classes.json")
      .then((response) => {
        const items = response.data;
        this.items = items;
      })
      .catch((e) => {
        console.error(e);
      });
  },
}).mount("#coffe-classes");

const classesModal = Vue.createApp({});


Vue.createApp({
  data() {
    return {
      id: null,
      item: null,
    };
  },
  methods: {
    bookClass() {
      localStorage.purchased_class_title = this.item.title
      localStorage.isClass = 'yes'
    }
  },
  created() {
    let uri = window.location.href.split("?");
    if (uri.length == 2) {
      let vars = uri[1].split("&");
      let getVars = {};
      let tmp = "";
      vars.forEach(function (v) {
        tmp = v.split("=");
        if (tmp.length == 2) getVars[tmp[0]] = tmp[1];
      });
      this.id = getVars.id;
      // do
    }

    axios
      .get("../classes.json")
      .then((response) => {
        const item = response.data.filter((x) => x.id == this.id)[0];
        console.log("🚀 ~ file: Vue.js ~ line 275 ~ created ~ item", item);
        this.item = item;
      })
      .catch((e) => {
        console.error(e);
      });
  },
  template: `
  <div class="col-1 col-lg-2"></div>
  <div class="col-10 col-lg-8 p-2 p-lg-5">
    <h4 class="text-center dark-text p-4">
      HOME &gt; CLASSES &gt; {{this.item?.title}}
    </h4>
    <div class="backgroundgrey text-white p-5">
      <h5 class="text-center">{{this.item?.title}}</h5>
      <h5 class="text-center">&#128;{{this.item?.price}}&nbsp;&nbsp;&nbsp;&nbsp; {{this.item?.time}}HRS</h5>
      <div class="largetext p-2 p-lg-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
        temporibus modi iusto mollitia vero pariatur tempora dolores eum
        consequatur repudiandae ab nobis minus, voluptas optio sint
        tempore voluptate nisi odio?
      </div>
      <div class="largetext p-2 p-lg-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
        temporibus modi iusto mollitia vero pariatur tempora dolores eum
        consequatur repudiandae ab nobis minus, voluptas optio sint
        tempore voluptate nisi odio?
      </div>

      <div class="text-center p-2 p-lg-5">
        <a href="#"
          ><button
            type="button"
            class="
              btn btn-lg
              backgrounddark
              text-white
              px-2 px-md-5
              py-1 py-md-3
            "
            data-bs-toggle="modal"
            data-bs-target="#classModal"
          >
            BOOK YOUR PLACE
          </button></a
        >

 
      </div>
    </div>
  </div>
  <div class="col-1 col-lg-2"></div>
  <div class="modal fade" id="classModal" tabindex="-1" aria-labelledby="classModalLabel" aria-hidden="true">
  <div class="modal-dialog class-modal">
  <div class="modal-content dark-text">
      <div class="  backgroundgrey text-center ">
          <button type="button" class="btn-close pull-right p-3" data-bs-dismiss="modal" aria-label="Close"></button>
          <h5 class=" p-3 text-white" id="classModalLabel">{{ item?.title }}</h5>
      </div>
      <div class="modal-body ">
          <h5 >DATES AVAILABLE</h5>
          <div class="mb-3 mt-3">
              <div class="row justify-content-start px-4">Live Workshop</div>
              <div class="row align-items-center">
                  <div class="col-7 col-md-8"><h4>SATURDAY 16 OF MARCH</h4></div>
                  <div class="col-5 col-md-4"><button class="btn p-2 btn-large btn-secondary text-white">NOT AVAILABLE</button></div>
              </div>
          </div>
          <div class="mb-3 mt-3">
              <div class="row justify-content-start px-4">Online</div>
              <div class="row align-items-center">
                  <div class="col-7 col-md-8"><h4>SATURDAY 16 OF MARCH</h4></div>
                  <div class="col-5 col-md-4"><a href="email.html"> <button @click='bookClass' class="btn p-2 btn-large btn-secondary text-white">3 TICKETS LEFT</button></a></div>
              </div>
          </div>
      </div>
    
  </div>
  </div>
</div>
  `,
}).mount("#single-class");

Vue.createApp({
  data() {
    return {
      items: null,
    };
  },
  created() {
    axios
      .get("../subscriptions.json")
      .then((response) => {
        const items = response.data;
        this.items = items;
        console.log(this.items)
      })
      .catch((e) => {
        console.error(e);
      });
  },
}).mount("#subscriptions");

Vue.createApp({
  data() {
    return {
      id: null,
      item: null,
      duration: null,
      quantity:null,
    };
  },
  methods: {
    bookClass() {
      localStorage.purchased_class_title = this.item.title
      localStorage.duration = this.duration
      localStorage.quantity = this.quantity
      localStorage.isClass = false
    }
  },
  created() {
    let uri = window.location.href.split("?");
    if (uri.length == 2) {
      let vars = uri[1].split("&");
      let getVars = {};
      let tmp = "";
      vars.forEach(function (v) {
        tmp = v.split("=");
        if (tmp.length == 2) getVars[tmp[0]] = tmp[1];
      });
      this.id = getVars.id;
      // do
    }

    axios
      .get("../subscriptions.json")
      .then((response) => {
        const item = response.data.filter((x) => x.id == this.id)[0];
        console.log("🚀 ~ subscription", item);
        this.item = item;
      })
      .catch((e) => {
        console.error(e);
      });
  },
  template: `
  <h4 class=" text-center dark-text p-4">HOME &gt; SUBSCRIPTIONS &gt; {{item?.title}}</h4>
  <div class="row g-0 ">
      <div class="col-1 col-sm-2"></div>
      <div class="col-10 col-sm-8 ">
           <!-- start of Main Product-->
          <div class=" text-white row g-0">
              <div class="col-12  col-lg-6">
                  <img class="img-fluid " :src="item?.image" alt="product">
  
              </div>
              <div class=" col-12 col-lg-6 backgroundgrey p-1 p-lg-2 d-flex flex-column justify-content-between  ">
                  <h5 class=" py-lg-2 text-center "><strong>{{item?.title}}</strong></h5>
                  <h6 class=" text-center">A 250 MONTHLY SUBSCRIPTION FROM OUR SINGLE ORIGIN OFFERING</h6>
                <div class="row justify-content-center align-items-center">
                      <!-- input form subscribe -->
                      <div class="col-8 col-lg-12 px-3 d-flex flex-column justify-content-between  ">
                          <div class="row  justify-content-center p-1">
                          <div class="form-group">
                          <label for="exampleFormControlSelect1">Select Duration</label>
                          <select v-model="duration" class="form-control" id="exampleFormControlSelect1">
                            <option>6 months</option>
                            <option>1 year</option>
                          
                          </select>
                          
                          </div>

                          </div>
                          <div class="row justify-content-center p-1">
                          <div class="form-group">
                          <label for="exampleFormControlSelect1">Select Grind</label>
                          <select class="form-control" id="exampleFormControlSelect1">
                            <option>wholebean</option>
                          
                          </select>
                          
                          </div>
                     
                          <div class="row justify-content-center p-1 mb-3">
                         
                              <div class="form-group">
                              <label for="exampleFormControlSelect1">Select Quantity</label>
                              <select v-model="quantity" class="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                              </div>
                          
                          </div>
                         
                       
                       
                      </div>

                      <div class="col-4 col-lg-12 text-center  ">
                      <a href="email.html"><button @click='bookClass' class="btn  px-2 px-lg-5 py-md-2 text-white backgrounddark">SUBSCRIBE</button></a>
                         </div>
                </div>
                 
              </div>
          </div>
          <!-- end of Main Product-->
          <!-- start of Related Product-->
          <div class="my-4 py-4">
              <h4 class=" py-2">RELATED PRODUCT</h4>
              <div class=" row g-0">
                  <div class="col-6 col-sm-5 col-md-3">
                      <img class="img-fluid " src="img/Felicita-Parallel.001.png" alt="related-product">
                  </div>
                  <div class="col-6 col-sm-7 col-md-9 px-2 d-flex flex-column justify-content-around align-items-start dark-text">
                      <div class="  "><strong> Felicitat Parallel Scale</strong></div>
                      <div class=" ">The Felicitat Parallel will bring your coffee weighting to the next level, available in white and black.</div>
                      <div class="">&#128;145.00</div>
                      
                  </div>
              </div>

          </div>
          <!-- end of Related Product-->
          <!-- start of Description-->
          <div class="dark-text largetext " >
              <p class="  text-center "><strong>Our Tasting subscriptions are dispatched on the final week of each month</strong></p></br>
              <p class="   ">Every month we pick a different coffee and post it directly to your door for brew it at home. You'll get an opportunity to sample some of the best coffee from all over the world as they come into season, it's also an excellent way to learn about different coffees and what to expect from the various growing regions. </p>
              <p class="  ">We believe the subscriptions should be a treat, the coffee will come with a newsletter of information to your email address that highlights the coffee and its origin.</p>
              <p class="   ">All coffee is shipped as a wholebean. Buying as agift? Download a gift card to print or send - 6 Months <span class="bg-dark text-white  p-md-1">Fill</span> / 12 Months <span class="bg-dark text-white  p-md-1">Fill</span>.</p>
              <p class="  ">Your coffee will be roasted and shipped on the last wednesday of every month. Available to Irish customers/ addresses only.</p>
              <p class="  ">PLEASE NOTE: We highly recommend to include a phone number at checkout to ensure you can be contacted by counriers in the case of delivery issues. For the same reason you might prefer to put your work address intead of your home one. </p>
              <p class="  text-center">For optimal freshness we roast & post our coffee to order in the next working day.</p>
  
          </div>
        


          <!-- end of Description-->
      </div>
      
      <div class="col-1 col-sm-2"></div>
  </div>

  `,
}).mount("#single-subscription");

Vue.createApp(Header).mount("#header");

Vue.createApp(Newsletter).mount("#newsletter");

Vue.createApp(Footer).mount("#footer");
