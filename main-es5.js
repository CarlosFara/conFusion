function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\n  <div fxFlex>\n    <div>\n      <h3>About Us</h3>\n      <hr>\n    </div>\n  </div>\n\n  <div fxFlex>\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n      <div fxFlex=\"70\">\n        <h2>Our History</h2>\n        <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong\n          Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from\n          the A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you\n          never know what will arrive on your plate the next time you visit us.</p>\n        <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our\n          CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>\n      </div>\n      <div fxFlex=\"30\">\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title>\n              <h2>Facts At a Glance</h2>\n            </mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <dl>\n              <dt>Started</dt>\n              <dd>3 Feb. 2013</dd>\n              <dt>Major Stake Holder</dt>\n              <dd>HK Fine Foods Inc.</dd>\n              <dt>Last Year's Turnover</dt>\n              <dd>$1,250,375</dd>\n              <dt>Employees</dt>\n              <dd>40</dd>\n            </dl>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n\n  <div fxFlex>\n    <mat-card>\n      <blockquote>\n        <h3>You better cut the pizza in four pieces because\n          I'm not hungry enough to eat six.</h3>\n        <footer>-- Yogi Berra,\n          <cite>The Wit and Wisdom of Yogi Berra,\n            P. Pepe, Diversion Books, 2014</cite>\n        </footer>\n      </blockquote>\n    </mat-card>\n  </div>\n\n  <h2>Corporate Leadership</h2>\n  <div fxFlex>\n    <mat-list *ngIf=\"leaders\" [@expand]>\n      <mat-list-item *ngFor=\"let leader of leaders\">\n        <img matListAvatar src=\"{{leader.image}}\" alt={{leader.name}}>\n        <p matLine>{{leader.name}} {{leader.abbr}}</p>\n        <p matLine>{{leader.designation}}</p>\n        <p matLine>{{leader.description}}</p>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <div [hidden]=\"leaders || leaderErrMsg\">\n    <mat-spinner></mat-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div fxFlex *ngIf=\"leaderErrMsg\">\n    <h2>Error</h2>\n    <h4>{{leaderErrMsg}}</h4>\n  </div>\n\n\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\n  <div fxFlex>\n    <div>\n      <h3>Contact Us</h3>\n      <hr>\n    </div>\n  </div>\n\n  <div fxFlex>\n    <h3>Location Information</h3>\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n      <div fxFlex=\"50\" fxFlexOffset=\"20px\">\n        <h4>Our Address</h4>\n        <address>\n          121, Clear Water Bay Road<br>\n          Clear Water Bay, Kowloon<br>\n          HONG KONG<br>\n          <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n          <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n          <i class=\"fa fa-envelope\"></i>:\n          <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n        </address>\n        <p></p>\n        <div>\n          <a mat-raised-button href=\"tel:+85212345678\"><i class=\"fa fa-phone\"></i> Call</a>\n          <a mat-raised-button><i class=\"fa fa-skype\"></i> Skype</a>\n          <a mat-raised-button href=\"mailto:confusion@food.net\"><i class=\"fa fa-envelope-o\"></i> Email</a>\n        </div>\n      </div>\n      <div fxFlex=\"40\">\n        <h4>Map of our Location</h4>\n      </div>\n    </div>\n  </div>\n\n  <div fxFlex fxFlexOffset=\"20px\" class=\"form-size\">\n    <h3>Send us your Feedback</h3>\n\n    <!-- Code to see how the feedbackForm is builded -->\n    <!-- <p>{{ feedbackForm.value | json }} {{ feedbackForm.status | json }}</p> -->\n\n    <form novalidate [formGroup]=\"feedbackForm\" #fform=\"ngForm\" (ngSubmit)=\"onSubmit()\" [hidden]=\"feedback\" [@expand]>\n      <p>\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"firstname\" placeholder=\"First Name\" type=\"text\" required>\n          <mat-error *ngIf=\"formErrors.firstname\"> {{formErrors.firstname}} </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"lastname\" placeholder=\"Last Name\" type=\"text\" required>\n          <mat-error *ngIf=\"formErrors.lastname\"> {{formErrors.lastname}} </mat-error>\n        </mat-form-field>\n      </p>\n      <p>\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"telnum\" placeholder=\"Tel. Number\" type=\"tel\" pattern=\"[0-9]*\" required>\n          <mat-error *ngIf=\"formErrors.telnum\"> {{formErrors.telnum}} </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"email\" placeholder=\"Email\" type=\"email\" email required>\n          <mat-error *ngIf=\"formErrors.email\"> {{formErrors.email}} </mat-error>\n        </mat-form-field>\n      </p>\n      <table class=\"form-size\">\n        <td>\n          <mat-slide-toggle formControlName=\"agree\">May we contact you?</mat-slide-toggle>\n        </td>\n        <td>\n          <mat-select placeholder=\"How?\" formControlName=\"contacttype\">\n            <mat-option *ngFor=\"let ctype of contactType\" [value]=\"ctype\">\n              {{ ctype }}\n            </mat-option>\n          </mat-select>\n        </td>\n      </table>\n      <p>\n        <mat-form-field class=\"full-width\">\n          <textarea matInput formControlName=\"message\" placeholder=\"Your Feedback\" rows=12></textarea>\n        </mat-form-field>\n      </p>\n      <button type=\"submit\" mat-button class=\"background-primary text-floral-white\"\n        [disabled]=\"feedbackForm.invalid\">Submit</button>\n    </form>\n  </div>\n  <div fxFlex *ngIf=\"showConfirm\" [@expand]>\n    <h3>Your Submission</h3>\n    <p>First Name: {{feedback.firstname }}</p>\n    <p>Last Name: {{feedback.lastname }}</p>\n    <p>Tel. Number: {{feedback.telnum }}</p>\n    <p>Email: {{feedback.email }}</p>\n    <p>Contact You?: {{feedback.agree }}</p>\n    <p>How?: {{feedback.contacttype }}</p>\n    <p>Feedback: {{feedback.message }}</p>\n  </div>\n  <div *ngIf=\"feedback && !showConfirm\" [@expand]>\n    <h4>Submitting Form...</h4>\n    <mat-spinner></mat-spinner>\n  </div>\n  <div fxFlex *ngIf=\"errMsg\">\n    <h2>Error</h2>\n    <h4>{{errMsg}}</h4>\n  </div>\n\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/dishdetail/dishdetail.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dishdetail/dishdetail.component.html ***!
    \********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDishdetailDishdetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\"\n  fxLayoutAlign.gt-md=\"space-around center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n\n  <div fxFlex=\"40\" *ngIf=\"dish\" [@visibility]=\"visibility\" [@expand]>\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>\n          <h3>{{dish.name | uppercase}}</h3>\n        </mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"{{dish.image}}\" alt={{dish.name}}>\n      <mat-card-content>\n        <p>{{dish.description}}</p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button [routerLink]=\"['/dishdetail', prev]\">\n          <span class=\"fa fa-chevron-left fa-lg\"></span>\n        </button>\n        <button mat-button (click)=\"goBack()\">BACK</button>\n        <button mat-button>LIKE</button>\n        <button mat-button>SHARE</button>\n        <span class=\"flex-spacer\"></span>\n        <button mat-button [routerLink]=\"['/dishdetail', next]\">\n          <span class=\"fa fa-chevron-right fa-lg\"></span>\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n\n  <div fxFlex=\"40\" *ngIf=\"dish\" [@visibility]=\"visibility\" [@expand]>\n    <mat-list fxFlex>\n      <h1 matLine> Comments</h1>\n      <p matLine>\n        <mat-list-item *ngFor=\"let comments of dish.comments\">\n          <p matLine>{{comments.comment}}</p>\n          <p matLine>{{comments.rating}} Stars</p>\n          <p matLine>-- {{comments.author}} {{comments.date | date}}</p>\n        </mat-list-item>\n      </p>\n      <p matLine>\n        <mat-list-item *ngIf=\"commentForm.valid\">\n          <p matLine>{{commentForm.value.comment}}</p>\n          <p matLine>{{commentForm.value.rating}} Stars</p>\n          <p matLine>-- {{commentForm.value.author}} </p>\n        </mat-list-item>\n      </p>\n\n      <form novalidate [formGroup]=\"commentForm\" #cform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <!-- CSS class for mat-form-field -->\n        <!-- .full-width { width: 85% } -->\n        <p>\n          <mat-form-field class=\"full-width\">\n            <input matInput formControlName=\"author\" placeholder=\"Name\" type=\"text\">\n            <mat-error *ngIf=\"formErrors.author\"> {{formErrors.author}} </mat-error>\n          </mat-form-field>\n        </p>\n        <p>\n          <mat-slider formControlName=\"rating\" [max]=\"max\" [min]=\"min\" thumbLabel tickInterval=\"1\">\n          </mat-slider>\n        </p>\n        <p>\n          <mat-form-field class=\"full-width\">\n            <textarea matInput formControlName=\"comment\" placeholder=\"Your Comment\" rows=12></textarea>\n            <mat-error *ngIf=\"formErrors.comment\"> {{formErrors.comment}} </mat-error>\n          </mat-form-field>\n        </p>\n          <button type=\"submit\" mat-button class=\"background-primary text-floral-white\"\n            [disabled]=\"commentForm.invalid\">Submit</button>\n      </form>\n    </mat-list>\n\n  </div>\n\n  <div [hidden]=\"dish || errMsg\">\n    <mat-spinner></mat-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div fxFlex *ngIf=\"errMsg\">\n    <h2>Error</h2>\n    <h4>{{errMsg}}</h4>\n  </div>\n\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container footer\" \n    fxLayout=\"row wrap\" \n    fxLayout.lt-md=\"column\" \n    fxLayoutAlign=\"center center\" \n    fxLayoutGap=\"10px\">\n\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n    <div fxLayout=\"row\">\n      <div fxFlex=\"40\" fxFlexOffset=\"20px\">\n        <h4>Links</h4>\n        <mat-list>\n          <mat-list-item><a mat-button routerLink='/home'>Home</a></mat-list-item>\n          <mat-list-item><a mat-button routerLink='/aboutus'>About</a></mat-list-item>\n          <mat-list-item><a mat-button routerLink='/menu'>Menu</a></mat-list-item>\n          <mat-list-item><a mat-button routerLink='/contactus'>Contact</a></mat-list-item>\n        </mat-list>\n      </div>\n      <div fxFlex=\"55\">\n        <h4>Our Address</h4>\n        <address style=\"text-size: 80%\">\n          121, Clear Water Bay Road<br> Clear Water Bay, Kowloon<br> HONG KONG<br>\n          <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n          <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n          <i class=\"fa fa-envelope\"></i>:\n          <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n        </address>\n      </div>\n    </div>\n  </div>\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"45\">\n    <div style=\"text-align:center\">\n      <a mat-icon-button class=\"btn-google-plus\" href=\"http://google.com/+\"><i class=\"fa fa-google-plus fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-facebook\" href=\"http://www.facebook.com/profile.php?id=\"><i class=\"fa fa-facebook fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-linkedin\" href=\"http://www.linkedin.com/in/\"><i class=\"fa fa-linkedin fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-twitter\" href=\"http://twitter.com/\"><i class=\"fa fa-twitter fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-youtube\" href=\"http://youtube.com/\"><i class=\"fa fa-youtube fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-mail\" href=\"mailto:\"><i class=\"fa fa-envelope-o fa-lg\"></i></a>\n    </div>\n  </div>\n  <div>\n      <p>© Copyright 2018 Ristorante Con Fusion</p>\n      <p style=\"display: flex; justify-content: center;\">v8.2.14</p>\n  </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n  <span><img src=\"/assets/images/logo.png\" height=30 width=41></span>\n  <a mat-button routerLink='/home' routerLinkActive='active'><span class=\"fa fa-home fa-lg\"></span> Home</a>\n  <a mat-button routerLink='/aboutus' routerLinkActive='active'><span class=\"fa fa-info fa-lg\"></span> About</a>\n  <a mat-button routerLink='/menu' routerLinkActive='active'><span class=\"fa fa-list fa-lg\"></span> Menu</a>\n  <a mat-button routerLink='/contactus' routerLinkActive='active'><span class=\"fa fa-address-card fa-lg\"></span> Contact</a>\n  <span class=\"flex-spacer\"></span>\n  <a mat-button (click)=\"openLoginForm()\"><span class=\"fa fa-sign-in fa-lg\"></span> Login</a>\n</mat-toolbar>\n\n<div class=\"container jumbotron\"\n    fxLayout=\"row\"\n    fxLayout.sm=\"column\" \n    fxLayout.xs=\"column\" \n    fxLayoutAlign.xs=\"start center\"\n    fxLayoutAlign.sm=\"start center\" \n    fxLayoutAlign.gt-sm=\"center center\" \n    fxLayoutGap=\"10px\">\n\n  <div fxFlex fxFlex.gt-sm=\"50%\">\n    <h1>Ristorante Con Fusion</h1>\n    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations\n      will tickle your culinary senses!</p>\n  </div>\n  <div fxFlex fxFlex.gt-sm=\"20%\">\n    <img src=\"/assets/images/logo.png\" alt=\"Logo\">\n  </div>\n  <div fxFlex></div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\"\n  fxLayoutAlign.gt-md=\"space-around center\" fxLayoutGap=\"10px\">\n\n  <mat-card *ngIf=\"dish\" fxFlex [@expand]>\n    <mat-card-header>\n      <div mat-card-avatar></div>\n      <mat-card-title>\n        <h3>{{dish.name | uppercase}}</h3>\n      </mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"{{dish.image}}\" alt={{dish.name}}>\n    <mat-card-content>\n      <p>{{dish.description}}</p>\n    </mat-card-content>\n  </mat-card>\n  <div [hidden]=\"dish || dishErrMsg\">\n    <mat-spinner></mat-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div fxFlex *ngIf=\"dishErrMsg\">\n    <h2>Error</h2>\n    <h4>{{dishErrMsg}}</h4>\n  </div>\n\n  <mat-card *ngIf=\"promotion\" fxFlex [@expand]>\n    <mat-card-header>\n      <div mat-card-avatar></div>\n      <mat-card-title>\n        <h3>{{promotion.name | uppercase}}</h3>\n      </mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"{{promotion.image}}\" alt={{promotion.name}}>\n    <mat-card-content>\n      <p>{{promotion.description}}</p>\n    </mat-card-content>\n  </mat-card>\n  <div [hidden]=\"promotion || promotionErrMsg\">\n    <mat-spinner></mat-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div fxFlex *ngIf=\"promotionErrMsg\">\n    <h2>Error</h2>\n    <h4>{{promotionErrMsg}}</h4>\n  </div>\n\n  <mat-card *ngIf=\"leader\" fxFlex [@expand]>\n    <mat-card-header>\n      <div mat-card-avatar></div>\n      <mat-card-title>\n        <h3>{{leader.name | uppercase}}</h3>\n      </mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"{{leader.image}}\" alt={{leader.name}}>\n    <mat-card-content>\n      <p>{{leader.description}}</p>\n    </mat-card-content>\n  </mat-card>\n  <div [hidden]=\"leader || leaderErrMsg\">\n    <mat-spinner></mat-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div fxFlex *ngIf=\"leaderErrMsg\">\n    <h2>Error</h2>\n    <h4>{{leaderErrMsg}}</h4>\n  </div>\n\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n  Login\n<span class=\"flex-spacer\"></span>\n<button mat-button mat-dialog-close>&times;</button>\n</mat-toolbar>\n\n<!-- Reveals the information of the Form in JSON format -->\n<p>{{ user | json }}</p>\n\n<!-- novalidate is used for Angular validation instead of HTML -->\n<form novalidate #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\n  <mat-dialog-content>\n    <p>\n      <mat-form-field>\n        <input matInput placeholder=\"Username\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" #username=\"ngModel\" required>\n        <mat-error *ngIf=\"username.errors?.required\">Username is required</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\" required>\n        <mat-error *ngIf=\"password.errors?.required\">Password is required</mat-error>\n      </mat-form-field>\n      <mat-checkbox [(ngModel)]=\"user.remember\" name=\"remember\">Remember Me</mat-checkbox>\n    </p>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <span class=\"flex-spacer\"></span>\n    <button mat-button mat-dialog-close>Cancel</button>\n    <button type=\"submit\" mat-button class=\"background-primary text-floral-white\" [disabled]=\"loginForm.form.invalid\">Login</button>\n  </mat-dialog-actions>\n</form>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
    \********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\n  <div fxFlex>\n    <div>\n      <h3>Menu</h3>\n      <hr>\n    </div>\n  </div>\n\n  <div fxFlex *ngIf=\"dishes\" [@expand]>\n    <mat-grid-list cols=\"2\" rowHeight=\"200px\" >\n      <mat-grid-tile *ngFor=\"let dish of dishes\" [routerLink]=\"['/dishdetail', dish.id]\" appHighlight>\n        <img height=\"200px\" src=\"{{dish.image}}\" alt={{dish.name}}>\n        <mat-grid-tile-footer>\n          <h1>{{dish.name | uppercase}}</h1>\n        </mat-grid-tile-footer>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n  <div fxFlex [hidden]=\"dishes || errMsg\">\n    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n  <div fxFlex *ngIf=\"errMsg\">\n    <h2>Error</h2>\n    <h4>{{errMsg}}</h4>\n  </div>\n\n</div>";

    /***/
  },

  /***/"./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  },

  /***/"./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/
  /*! no static exports found */
  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

    /***/
  },

  /***/"./src/app/about/about.component.scss":
  /*!********************************************!*\
    !*** ./src/app/about/about.component.scss ***!
    \********************************************/
  /*! exports provided: default */
  /***/
  function srcAppAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */";

    /***/
  },

  /***/"./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/
  /*! exports provided: AboutComponent */
  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_leader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/leader.service */"./src/app/services/leader.service.ts");
    /* harmony import */
    var _animations_app_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../animations/app.animation */"./src/app/animations/app.animation.ts");
    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent(leaderService, BaseURL) {
        _classCallCheck(this, AboutComponent);
        this.leaderService = leaderService;
        this.BaseURL = BaseURL;
      }
      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.leaderService.getLeaders().subscribe(function (leaderList) {
            return _this.leaders = leaderList;
          }, function (leaderErrMsg) {
            return _this.leaderErrMsg = leaderErrMsg;
          });
        }
      }]);
      return AboutComponent;
    }();
    AboutComponent.ctorParameters = function () {
      return [{
        type: _services_leader_service__WEBPACK_IMPORTED_MODULE_2__["LeaderService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['BaseURL']
        }]
      }];
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./about.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html"))["default"],
      host: {
        '[@flyInOut]': 'true',
        'style': 'display: block;'
      },
      animations: [Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["flyInOut"])(), Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["expand"])()],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./about.component.scss */"./src/app/about/about.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BaseURL')), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_leader_service__WEBPACK_IMPORTED_MODULE_2__["LeaderService"], Object])], AboutComponent);

    /***/
  },

  /***/"./src/app/animations/app.animation.ts":
  /*!*********************************************!*\
    !*** ./src/app/animations/app.animation.ts ***!
    \*********************************************/
  /*! exports provided: visibility, flyInOut, expand */
  /***/
  function srcAppAnimationsAppAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "visibility", function () {
      return visibility;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "flyInOut", function () {
      return flyInOut;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "expand", function () {
      return expand;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");
    function visibility() {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('visibility', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'scale(1.0)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'scale(0.5)',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out'))]);
    }
    function flyInOut() {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateX(-100%)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateX(100%)',
        opacity: 0
      }))])]);
    }
    function expand() {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('expand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(-50%)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
      }))])]);
    }

    /***/
  },

  /***/"./src/app/app-routing/app-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/app-routing/app-routing.module.ts ***!
    \***************************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function srcAppAppRoutingAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./routes */"./src/app/app-routing/routes.ts");
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_4__["routes"])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
      declarations: []
    })], AppRoutingModule);

    /***/
  },

  /***/"./src/app/app-routing/routes.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing/routes.ts ***!
    \***************************************/
  /*! exports provided: routes */
  /***/
  function srcAppAppRoutingRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../menu/menu.component */"./src/app/menu/menu.component.ts");
    /* harmony import */
    var _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../dishdetail/dishdetail.component */"./src/app/dishdetail/dishdetail.component.ts");
    /* harmony import */
    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../home/home.component */"./src/app/home/home.component.ts");
    /* harmony import */
    var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../about/about.component */"./src/app/about/about.component.ts");
    /* harmony import */
    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../contact/contact.component */"./src/app/contact/contact.component.ts");
    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'menu',
      component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]
    }, {
      path: 'dishdetail/:id',
      component: _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_2__["DishdetailComponent"]
    }, {
      path: 'contactus',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    }, {
      path: 'aboutus',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    /***/
  },

  /***/"./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
      this.title = 'conFusion';
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.scss */"./src/app/app.component.scss"))["default"]]
    })], AppComponent);

    /***/
  },

  /***/"./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */
    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/material/toolbar */"./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */
    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/flex-layout */"./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */
    var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/material/list */"./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */
    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/material/grid-list */"./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */
    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/material/card */"./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */
    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/material/button */"./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */
    var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./app-routing/app-routing.module */"./src/app/app-routing/app-routing.module.ts");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./menu/menu.component */"./src/app/menu/menu.component.ts");
    /* harmony import */
    var _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ./dishdetail/dishdetail.component */"./src/app/dishdetail/dishdetail.component.ts");
    /* harmony import */
    var _header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ./header/header.component */"./src/app/header/header.component.ts");
    /* harmony import */
    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./footer/footer.component */"./src/app/footer/footer.component.ts");
    /* harmony import */
    var _about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./about/about.component */"./src/app/about/about.component.ts");
    /* harmony import */
    var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! ./home/home.component */"./src/app/home/home.component.ts");
    /* harmony import */
    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ./contact/contact.component */"./src/app/contact/contact.component.ts");
    /* harmony import */
    var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! ./login/login.component */"./src/app/login/login.component.ts");
    /* harmony import */
    var _services_dish_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! ./services/dish.service */"./src/app/services/dish.service.ts");
    /* harmony import */
    var _services_promotion_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! ./services/promotion.service */"./src/app/services/promotion.service.ts");
    /* harmony import */
    var _services_leader_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__( /*! ./services/leader.service */"./src/app/services/leader.service.ts");
    /* harmony import */
    var _shared_baseurl__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__( /*! ./shared/baseurl */"./src/app/shared/baseurl.ts");
    /* harmony import */
    var hammerjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__( /*! hammerjs */"./node_modules/hammerjs/hammer.js");
    /* harmony import */
    var hammerjs__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_27__);
    /* harmony import */
    var _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__( /*! ./services/process-httpmsg.service */"./src/app/services/process-httpmsg.service.ts");
    /* harmony import */
    var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__( /*! ./directives/highlight.directive */"./src/app/directives/highlight.directive.ts");

    //Modules

    //Components

    //Services

    //TODO: Esto me parece que se podría borrar por que ya no se usa.
    //Others

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"], _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_16__["DishdetailComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"], _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_29__["HighlightDirective"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]],
      providers: [_services_dish_service__WEBPACK_IMPORTED_MODULE_23__["DishService"], _services_promotion_service__WEBPACK_IMPORTED_MODULE_24__["PromotionService"], _services_leader_service__WEBPACK_IMPORTED_MODULE_25__["LeaderService"], _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_28__["ProcessHTTPMsgService"], {
        provide: 'BaseURL',
        useValue: _shared_baseurl__WEBPACK_IMPORTED_MODULE_26__["baseURL"]
      }],
      entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })], AppModule);

    /***/
  },

  /***/"./src/app/contact/contact.component.scss":
  /*!************************************************!*\
    !*** ./src/app/contact/contact.component.scss ***!
    \************************************************/
  /*! exports provided: default */
  /***/
  function srcAppContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".full-width {\n  width: 95%;\n}\n\n.half-width {\n  width: 45%;\n}\n\n.form-size {\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NvbkZ1c2lvbi9jb25GdXNpb24vc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogOTUlXG59XG5cbi5oYWxmLXdpZHRoIHtcbiAgICB3aWR0aDogNDUlXG59XG5cbi5mb3JtLXNpemUge1xuICAgIHdpZHRoOiA3NSVcbn0iLCIuZnVsbC13aWR0aCB7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5oYWxmLXdpZHRoIHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLmZvcm0tc2l6ZSB7XG4gIHdpZHRoOiA3NSU7XG59Il19 */";

    /***/
  },

  /***/"./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/
  /*! exports provided: ContactComponent */
  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _shared_feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../shared/feedback */"./src/app/shared/feedback.ts");
    /* harmony import */
    var _animations_app_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../animations/app.animation */"./src/app/animations/app.animation.ts");
    /* harmony import */
    var _services_feedback_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../services/feedback.service */"./src/app/services/feedback.service.ts");
    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(fb, feedbackService) {
        _classCallCheck(this, ContactComponent);
        this.fb = fb;
        this.feedbackService = feedbackService;
        this.contactType = _shared_feedback__WEBPACK_IMPORTED_MODULE_3__["ContactType"];
        this.formErrors = {
          'firstname': '',
          'lastname': '',
          'telnum': '',
          'email': ''
        };
        this.validationMessages = {
          'firstname': {
            'required': 'First Name is required.',
            'minlength': 'First Name must be at least 2 characters long.',
            'maxlength': 'FirstName cannot be more than 25 characters long.'
          },
          'lastname': {
            'required': 'Last Name is required.',
            'minlength': 'Last Name must be at least 2 characters long.',
            'maxlength': 'Last Name cannot be more than 25 characters long.'
          },
          'telnum': {
            'required': 'Tel. number is required.',
            'pattern': 'Tel. number must contain only numbers.'
          },
          'email': {
            'required': 'Email is required.',
            'email': 'Email not in valid format.'
          }
        };
        this.createForm();
      }
      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createForm",
        value: function createForm() {
          var _this2 = this;
          this.feedbackForm = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]],
            telnum: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            agree: false,
            contacttype: 'None',
            message: ''
          });
          this.feedbackForm.valueChanges.subscribe(function (data) {
            return _this2.onValueChanged(data);
          });
          // (re)set validation messages now
          this.onValueChanged();
        }
      }, {
        key: "onValueChanged",
        value: function onValueChanged(data) {
          if (!this.feedbackForm) {
            return;
          }
          var form = this.feedbackForm;
          for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
              // clear previous error message (if any)
              this.formErrors[field] = '';
              var control = form.get(field);
              if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                  if (control.errors.hasOwnProperty(key)) {
                    this.formErrors[field] += messages[key] + ' ';
                  }
                }
              }
            }
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;
          this.feedback = this.feedbackForm.value;
          console.log(this.feedback);
          this.feedbackService.submitFeedback(this.feedback).subscribe(function (feedback) {
            _this3.feedback = feedback;
            _this3.showConfirm = true;
            _this3.errMsg = null;
            console.log(_this3.feedback + 'POST OK');
            setTimeout(function () {
              _this3.feedback = null;
              _this3.showConfirm = false;
            }, 5 * 1000);
          }, function (errMsg) {
            return _this3.errMsg = errMsg;
          });
          this.feedbackFormDirective.resetForm();
          this.feedbackForm.reset({
            firstname: '',
            lastname: '',
            telnum: 0,
            email: '',
            agree: false,
            contacttype: 'None',
            message: ''
          });
        }
      }]);
      return ContactComponent;
    }();
    ContactComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_feedback_service__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fform', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ContactComponent.prototype, "feedbackFormDirective", void 0);
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./contact.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html"))["default"],
      host: {
        '[@flyInOut]': 'true',
        'style': 'display: block;'
      },
      animations: [Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_4__["flyInOut"])(), Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_4__["expand"])()],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./contact.component.scss */"./src/app/contact/contact.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_feedback_service__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"]])], ContactComponent);

    /***/
  },

  /***/"./src/app/directives/highlight.directive.ts":
  /*!***************************************************!*\
    !*** ./src/app/directives/highlight.directive.ts ***!
    \***************************************************/
  /*! exports provided: HighlightDirective */
  /***/
  function srcAppDirectivesHighlightDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HighlightDirective", function () {
      return HighlightDirective;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var HighlightDirective = /*#__PURE__*/function () {
      function HighlightDirective(el, renderer) {
        _classCallCheck(this, HighlightDirective);
        this.el = el;
        this.renderer = renderer;
      }
      _createClass(HighlightDirective, [{
        key: "onMouseEnter",
        value: function onMouseEnter() {
          this.renderer.addClass(this.el.nativeElement, 'highlight');
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this.renderer.removeClass(this.el.nativeElement, 'highlight');
        }
      }]);
      return HighlightDirective;
    }();
    HighlightDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], HighlightDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], HighlightDirective.prototype, "onMouseLeave", null);
    HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appHighlight]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], HighlightDirective);

    /***/
  },

  /***/"./src/app/dishdetail/dishdetail.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/dishdetail/dishdetail.component.scss ***!
    \******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppDishdetailDishdetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".full-width {\n  width: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NvbkZ1c2lvbi9jb25GdXNpb24vc3JjL2FwcC9kaXNoZGV0YWlsL2Rpc2hkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc2hkZXRhaWwvZGlzaGRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Rpc2hkZXRhaWwvZGlzaGRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogODUlXG59XG4iLCIuZnVsbC13aWR0aCB7XG4gIHdpZHRoOiA4NSU7XG59Il19 */";

    /***/
  },

  /***/"./src/app/dishdetail/dishdetail.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/dishdetail/dishdetail.component.ts ***!
    \****************************************************/
  /*! exports provided: DishdetailComponent */
  /***/
  function srcAppDishdetailDishdetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DishdetailComponent", function () {
      return DishdetailComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_dish_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/dish.service */"./src/app/services/dish.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _animations_app_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../animations/app.animation */"./src/app/animations/app.animation.ts");
    var DishdetailComponent = /*#__PURE__*/function () {
      function DishdetailComponent(dishService, route, location, fb, BaseURL) {
        _classCallCheck(this, DishdetailComponent);
        this.dishService = dishService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.BaseURL = BaseURL;
        this.visibility = 'shown';
        //Setting the min and max for the Slider component
        this.max = 5;
        this.min = 1;
        this.formErrors = {
          'author': '',
          'comment': ''
        };
        this.validationMessages = {
          'author': {
            'required': 'Author Name is required.',
            'minlength': 'Author Name must be at least 2 characters long.'
          },
          'comment': {
            'required': 'Comment is required.'
          }
        };
        this.createForm();
      }
      _createClass(DishdetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;
          this.dishService.getDishIds().subscribe(function (dishIds) {
            return _this4.dishIds = dishIds;
          });
          this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) {
            _this4.visibility = 'hidden';
            return _this4.dishService.getDish(params['id']);
          })).subscribe(function (dish) {
            _this4.dish = dish;
            _this4.dishCopy = dish;
            _this4.setPrevNext(dish.id);
            _this4.visibility = 'shown';
          }, function (errMsg) {
            return _this4.errMsg = errMsg;
          });
        }
      }, {
        key: "setPrevNext",
        value: function setPrevNext(dishId) {
          var index = this.dishIds.indexOf(dishId);
          this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
          this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
        }
      }, {
        key: "createForm",
        value: function createForm() {
          var _this5 = this;
          this.commentForm = this.fb.group({
            author: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2)]],
            rating: [this.max, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });
          this.commentForm.valueChanges.subscribe(function (data) {
            return _this5.onValueChanged(data);
          });
          // (re)set validation messages now
          this.onValueChanged();
        }
      }, {
        key: "onValueChanged",
        value: function onValueChanged(data) {
          if (!this.commentForm) {
            return;
          }
          var form = this.commentForm;
          for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
              // clear previous error message (if any)
              this.formErrors[field] = '';
              var control = form.get(field);
              if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                  if (control.errors.hasOwnProperty(key)) {
                    this.formErrors[field] += messages[key] + ' ';
                  }
                }
              }
            }
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this6 = this;
          this.comment = this.commentForm.value;
          this.comment.date = new Date().toISOString();
          this.dishCopy.comments.push(this.comment);
          this.dishService.putDish(this.dishCopy).subscribe(function (dish) {
            _this6.dish = dish;
            _this6.dishCopy = dish;
          }, function (errMsg) {
            _this6.dish = null;
            _this6.dishCopy = null;
            _this6.errMsg = errMsg;
          });
          this.commentFormDirective.resetForm();
          this.commentForm.reset({
            author: '',
            rating: this.max,
            comment: ''
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }]);
      return DishdetailComponent;
    }();
    DishdetailComponent.ctorParameters = function () {
      return [{
        type: _services_dish_service__WEBPACK_IMPORTED_MODULE_2__["DishService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['BaseURL']
        }]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cform', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DishdetailComponent.prototype, "commentFormDirective", void 0);
    DishdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dishdetail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./dishdetail.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/dishdetail/dishdetail.component.html"))["default"],
      host: {
        '[@flyInOut]': 'true',
        'style': 'display: block;'
      },
      animations: [Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_7__["visibility"])(), Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_7__["flyInOut"])(), Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_7__["expand"])()],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./dishdetail.component.scss */"./src/app/dishdetail/dishdetail.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BaseURL')), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dish_service__WEBPACK_IMPORTED_MODULE_2__["DishService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], Object])], DishdetailComponent);

    /***/
  },

  /***/"./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/
  /*! exports provided: default */
  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".footer {\n  background-color: #D1C4E9;\n  margin: 0px auto;\n  padding: 20px 0px;\n}\n\n.btn-facebook {\n  color: #fff !important;\n  background-color: #3b5998 !important;\n}\n\n.btn-google-plus {\n  color: #fff !important;\n  background-color: #dd4b39 !important;\n}\n\n.btn-youtube {\n  color: #fff !important;\n  background-color: #ff4b39 !important;\n}\n\n.btn-linkedin {\n  color: #fff !important;\n  background-color: #007bb6 !important;\n}\n\n.btn-twitter {\n  color: #fff !important;\n  background-color: #55acee !important;\n}\n\n.btn-mail {\n  color: #fff !important;\n  background-color: #512DA8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NvbkZ1c2lvbi9jb25GdXNpb24vc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0kseUJBUmM7RUFHZCxnQkFBQTtFQUNBLGlCQUFBO0FDSEo7O0FEV0E7RUFBZSxzQkFBQTtFQUFzQixvQ0FBQTtBQ05yQzs7QURPQTtFQUFpQixzQkFBQTtFQUFxQixvQ0FBQTtBQ0Z0Qzs7QURHQTtFQUFhLHNCQUFBO0VBQXFCLG9DQUFBO0FDRWxDOztBRERBO0VBQWMsc0JBQUE7RUFBcUIsb0NBQUE7QUNNbkM7O0FETEE7RUFBYSxzQkFBQTtFQUFxQixvQ0FBQTtBQ1VsQzs7QURUQTtFQUFVLHNCQUFBO0VBQXFCLG9DQUFBO0FDYy9CIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsdC1ncmF5OiAjZGRkO1xuJGJhY2tncm91bmQtZGFyazogIzUxMkRBODtcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjOTU3NUNEO1xuJGJhY2tncm91bmQtcGFsZTogI0QxQzRFOTtcblxuQG1peGluIHplcm8tbWFyZ2luKCRwYWQtdXAtZG93biwgJHBhZC1sZWZ0LXJpZ2h0KSB7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBwYWRkaW5nOiAkcGFkLXVwLWRvd24gJHBhZC1sZWZ0LXJpZ2h0O1xufVxuXG4uZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXBhbGU7XG4gICAgQGluY2x1ZGUgemVyby1tYXJnaW4oMjBweCwgMHB4KTtcbn1cblxuLmJ0bi1mYWNlYm9vayB7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7IGJhY2tncm91bmQtY29sb3I6IzNiNTk5OCFpbXBvcnRhbnQ7fVxuLmJ0bi1nb29nbGUtcGx1c3tjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNkZDRiMzkhaW1wb3J0YW50O31cbi5idG4teW91dHViZXtjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNmZjRiMzkhaW1wb3J0YW50O31cbi5idG4tbGlua2VkaW57Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojMDA3YmI2IWltcG9ydGFudDt9XG4uYnRuLXR3aXR0ZXJ7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojNTVhY2VlIWltcG9ydGFudDt9XG4uYnRuLW1haWx7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojNTEyREE4IWltcG9ydGFudDt9IiwiLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMUM0RTk7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuXG4uYnRuLWZhY2Vib29rIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5OCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWdvb2dsZS1wbHVzIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXlvdXR1YmUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0YjM5ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tbGlua2VkaW4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmI2ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tdHdpdHRlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWUgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1tYWlsIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxMkRBOCAhaW1wb3J0YW50O1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/
  /*! exports provided: FooterComponent */
  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }
      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return FooterComponent;
    }();
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./footer.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./footer.component.scss */"./src/app/footer/footer.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FooterComponent);

    /***/
  },

  /***/"./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/
  /*! exports provided: default */
  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".jumbotron {\n  margin: 0px auto;\n  padding: 70px 30px;\n  background: #9575CD;\n  color: floralwhite;\n  min-height: 150px;\n}\n\n.active {\n  background: #4527A0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NvbkZ1c2lvbi9jb25GdXNpb24vc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBSkksZ0JBQUE7RUFDQSxrQkFBQTtFQUtBLG1CQVhlO0VBWWYsa0JBQUE7RUFDQSxpQkFBQTtBQ1RKOztBRFlBO0VBQ0ksbUJBZmtCO0FDTXRCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsdC1ncmF5OiAjZGRkO1xuJGJhY2tncm91bmQtZGFyazogIzUxMkRBODtcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjOTU3NUNEO1xuJGJhY2tncm91bmQtcGFsZTogI0QxQzRFOTtcbiRiYWNrZ3JvdW5kLW1vcmVkYXJrOiAjNDUyN0EwO1xuXG5AbWl4aW4gemVyby1tYXJnaW4oJHBhZC11cC1kb3duLCAkcGFkLWxlZnQtcmlnaHQpIHtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIHBhZGRpbmc6ICRwYWQtdXAtZG93biAkcGFkLWxlZnQtcmlnaHQ7XG59XG5cbi5qdW1ib3Ryb24ge1xuICAgIEBpbmNsdWRlIHplcm8tbWFyZ2luKDcwcHgsMzBweCk7XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtbGlnaHQgO1xuICAgIGNvbG9yOmZsb3JhbHdoaXRlO1xuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1tb3JlZGFyaztcbn0iLCIuanVtYm90cm9uIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgcGFkZGluZzogNzBweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTU3NUNEO1xuICBjb2xvcjogZmxvcmFsd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzQ1MjdBMDtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/
  /*! exports provided: HeaderComponent */
  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../login/login.component */"./src/app/login/login.component.ts");
    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(dialog) {
        _classCallCheck(this, HeaderComponent);
        this.dialog = dialog;
      }
      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openLoginForm",
        value: function openLoginForm() {
          this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], {
            width: '500px',
            height: '450px'
          });
        }
      }]);
      return HeaderComponent;
    }();
    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./header.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./header.component.scss */"./src/app/header/header.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])], HeaderComponent);

    /***/
  },

  /***/"./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/
  /*! exports provided: default */
  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/
  /*! exports provided: HomeComponent */
  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_dish_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/dish.service */"./src/app/services/dish.service.ts");
    /* harmony import */
    var _services_promotion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../services/promotion.service */"./src/app/services/promotion.service.ts");
    /* harmony import */
    var _services_leader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../services/leader.service */"./src/app/services/leader.service.ts");
    /* harmony import */
    var _animations_app_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../animations/app.animation */"./src/app/animations/app.animation.ts");
    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(dishService, promotionService, leaderService, BaseURL) {
        _classCallCheck(this, HomeComponent);
        this.dishService = dishService;
        this.promotionService = promotionService;
        this.leaderService = leaderService;
        this.BaseURL = BaseURL;
      }
      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;
          this.dishService.getFeaturedDish().subscribe(function (dish) {
            return _this7.dish = dish;
          }, function (errmess) {
            return _this7.dishErrMsg = errmess;
          });
          this.promotionService.getFeaturedPromotion().subscribe(function (promotion) {
            return _this7.promotion = promotion;
          }, function (errmess) {
            return _this7.promotionErrMsg = errmess;
          });
          this.leaderService.getFeaturedLeader().subscribe(function (leader) {
            return _this7.leader = leader;
          }, function (errmess) {
            return _this7.leaderErrMsg = errmess;
          });
        }
      }]);
      return HomeComponent;
    }();
    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_dish_service__WEBPACK_IMPORTED_MODULE_2__["DishService"]
      }, {
        type: _services_promotion_service__WEBPACK_IMPORTED_MODULE_3__["PromotionService"]
      }, {
        type: _services_leader_service__WEBPACK_IMPORTED_MODULE_4__["LeaderService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['BaseURL']
        }]
      }];
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./home.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      host: {
        '[@flyInOut]': 'true',
        'style': 'display: block;'
      },
      animations: [Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_5__["flyInOut"])(), Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_5__["expand"])()],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./home.component.scss */"./src/app/home/home.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BaseURL')), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dish_service__WEBPACK_IMPORTED_MODULE_2__["DishService"], _services_promotion_service__WEBPACK_IMPORTED_MODULE_3__["PromotionService"], _services_leader_service__WEBPACK_IMPORTED_MODULE_4__["LeaderService"], Object])], HomeComponent);

    /***/
  },

  /***/"./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/
  /*! exports provided: default */
  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */";

    /***/
  },

  /***/"./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/
  /*! exports provided: LoginComponent */
  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(dialogRef) {
        _classCallCheck(this, LoginComponent);
        this.dialogRef = dialogRef;
        this.user = {
          username: '',
          password: '',
          remember: false
        };
      }
      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log('User: ', this.user);
          this.dialogRef.close();
        }
      }]);
      return LoginComponent;
    }();
    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./login.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./login.component.scss */"./src/app/login/login.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])], LoginComponent);

    /***/
  },

  /***/"./src/app/menu/menu.component.scss":
  /*!******************************************!*\
    !*** ./src/app/menu/menu.component.scss ***!
    \******************************************/
  /*! exports provided: default */
  /***/
  function srcAppMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/
  /*! exports provided: MenuComponent */
  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_dish_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/dish.service */"./src/app/services/dish.service.ts");
    /* harmony import */
    var _animations_app_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../animations/app.animation */"./src/app/animations/app.animation.ts");
    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(dishService, BaseURL) {
        _classCallCheck(this, MenuComponent);
        this.dishService = dishService;
        this.BaseURL = BaseURL;
      }
      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;
          this.dishService.getDishes()
          //(dishes) is the object coming when the promise resolve
          .subscribe(function (dishes) {
            return _this8.dishes = dishes;
          }, function (errMsg) {
            return _this8.errMsg = errMsg;
          });
        }
      }]);
      return MenuComponent;
    }();
    MenuComponent.ctorParameters = function () {
      return [{
        type: _services_dish_service__WEBPACK_IMPORTED_MODULE_2__["DishService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['BaseURL']
        }]
      }];
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./menu.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html"))["default"],
      host: {
        '[@flyInOut]': 'true',
        'style': 'display: block;'
      },
      animations: [Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["flyInOut"])(), Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["expand"])()],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./menu.component.scss */"./src/app/menu/menu.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BaseURL')), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dish_service__WEBPACK_IMPORTED_MODULE_2__["DishService"], Object])], MenuComponent);

    /***/
  },

  /***/"./src/app/services/dish.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/dish.service.ts ***!
    \******************************************/
  /*! exports provided: DishService */
  /***/
  function srcAppServicesDishServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DishService", function () {
      return DishService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _shared_baseurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../shared/baseurl */"./src/app/shared/baseurl.ts");
    /* harmony import */
    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./process-httpmsg.service */"./src/app/services/process-httpmsg.service.ts");
    var DishService = /*#__PURE__*/function () {
      function DishService(http, processHTTPMsgService) {
        _classCallCheck(this, DishService);
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
      }
      _createClass(DishService, [{
        key: "getDishes",
        value: function getDishes() {
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'dishes').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "getDish",
        value: function getDish(id) {
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'dishes/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "getFeaturedDish",
        value: function getFeaturedDish() {
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'dishes?featured=true').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (dishes) {
            return dishes[0];
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "getDishIds",
        value: function getDishIds() {
          return this.getDishes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (dishes) {
            return dishes.map(function (dish) {
              return dish.id;
            });
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return error;
          }));
        }
      }, {
        key: "putDish",
        value: function putDish(dish) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.put(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'dishes/' + dish.id, dish, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }]);
      return DishService;
    }();
    DishService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgService"]
      }];
    };
    DishService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgService"]])], DishService);

    /***/
  },

  /***/"./src/app/services/feedback.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/feedback.service.ts ***!
    \**********************************************/
  /*! exports provided: FeedbackService */
  /***/
  function srcAppServicesFeedbackServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FeedbackService", function () {
      return FeedbackService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../shared/baseurl */"./src/app/shared/baseurl.ts");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./process-httpmsg.service */"./src/app/services/process-httpmsg.service.ts");
    var FeedbackService = /*#__PURE__*/function () {
      function FeedbackService(http, processHTTPMsgService) {
        _classCallCheck(this, FeedbackService);
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
      }
      _createClass(FeedbackService, [{
        key: "submitFeedback",
        value: function submitFeedback(feedback) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'feedback', feedback, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }]);
      return FeedbackService;
    }();
    FeedbackService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgService"]
      }];
    };
    FeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgService"]])], FeedbackService);

    /***/
  },

  /***/"./src/app/services/leader.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/leader.service.ts ***!
    \********************************************/
  /*! exports provided: LeaderService */
  /***/
  function srcAppServicesLeaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LeaderService", function () {
      return LeaderService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./process-httpmsg.service */"./src/app/services/process-httpmsg.service.ts");
    /* harmony import */
    var _shared_baseurl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../shared/baseurl */"./src/app/shared/baseurl.ts");
    var LeaderService = /*#__PURE__*/function () {
      function LeaderService(http, processHTTPMsgService) {
        _classCallCheck(this, LeaderService);
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
      }
      _createClass(LeaderService, [{
        key: "getLeaders",
        value: function getLeaders() {
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'leadership').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "getLeader",
        value: function getLeader(id) {
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'leadership/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "getFeaturedLeader",
        value: function getFeaturedLeader() {
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'leadership?featured=true').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (leaders) {
            return leaders[0];
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }]);
      return LeaderService;
    }();
    LeaderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]
      }];
    };
    LeaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]])], LeaderService);

    /***/
  },

  /***/"./src/app/services/process-httpmsg.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/process-httpmsg.service.ts ***!
    \*****************************************************/
  /*! exports provided: ProcessHTTPMsgService */
  /***/
  function srcAppServicesProcessHttpmsgServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProcessHTTPMsgService", function () {
      return ProcessHTTPMsgService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    var ProcessHTTPMsgService = /*#__PURE__*/function () {
      function ProcessHTTPMsgService() {
        _classCallCheck(this, ProcessHTTPMsgService);
      }
      _createClass(ProcessHTTPMsgService, [{
        key: "handleError",
        value: function handleError(error) {
          var errMsj = error.error instanceof ErrorEvent ? error.error.message : "".concat(error.status, " - ").concat(error.statusText || '', " ").concat(error.error);
          console.log("Fall\xF3 el llamado al servicio con error ".concat(errMsj));
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('JSON Server Error');
        }
      }]);
      return ProcessHTTPMsgService;
    }();
    ProcessHTTPMsgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProcessHTTPMsgService);

    /***/
  },

  /***/"./src/app/services/promotion.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/promotion.service.ts ***!
    \***********************************************/
  /*! exports provided: PromotionService */
  /***/
  function srcAppServicesPromotionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PromotionService", function () {
      return PromotionService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./process-httpmsg.service */"./src/app/services/process-httpmsg.service.ts");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _shared_baseurl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../shared/baseurl */"./src/app/shared/baseurl.ts");
    var PromotionService = /*#__PURE__*/function () {
      function PromotionService(http, processHTTPMsgService) {
        _classCallCheck(this, PromotionService);
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
      }
      _createClass(PromotionService, [{
        key: "getPromotions",
        value: function getPromotions() {
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'promotions').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "getPromotion",
        value: function getPromotion(id) {
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'promotions' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "getFeaturedPromotion",
        value: function getFeaturedPromotion() {
          return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'promotions?featured=true').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (promotions) {
            return promotions[0];
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }]);
      return PromotionService;
    }();
    PromotionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"]
      }];
    };
    PromotionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"]])], PromotionService);

    /***/
  },

  /***/"./src/app/shared/baseurl.ts":
  /*!***********************************!*\
    !*** ./src/app/shared/baseurl.ts ***!
    \***********************************/
  /*! exports provided: baseURL */
  /***/
  function srcAppSharedBaseurlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "baseURL", function () {
      return baseURL;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var baseURL = 'http://localhost:3000/';

    /***/
  },

  /***/"./src/app/shared/feedback.ts":
  /*!************************************!*\
    !*** ./src/app/shared/feedback.ts ***!
    \************************************/
  /*! exports provided: Feedback, ContactType */
  /***/
  function srcAppSharedFeedbackTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Feedback", function () {
      return Feedback;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactType", function () {
      return ContactType;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Feedback = /*#__PURE__*/_createClass(function Feedback() {
      _classCallCheck(this, Feedback);
    });
    ;
    var ContactType = ['None', 'Tel', 'Email'];

    /***/
  },

  /***/"./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! /home/runner/work/conFusion/conFusion/src/main.ts */"./src/main.ts");

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map