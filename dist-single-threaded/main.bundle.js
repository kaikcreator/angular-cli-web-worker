webpackJsonp([1,4],{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, "div label{\n    display: block;\n}\n\n.header{\n    padding: 5px;\n    padding-bottom: 20px;\n    font-size: 20px;\n}\n\nbutton:disabled{\n    color: #aaa;\n    background-color: #777;\n}\n\nbutton{\n    padding: 10px;\n    border: none;\n    background-color: #333;\n    color: #ccc;\n    margin: 5px;\n}\n\ninput{\n    padding: 8px;\n    margin: 5px;\n}\n\n.items{\n    font-size: 20px;\n    color: #333;\n    padding: 20px;\n}\n\n.progress {\n    height: 100%;\n    background-color: #333;\n}\n\n.progress-bar {\n    height: 20px;\n    width: calc(100% - 18px);\n    margin: 8px;\n    border: 1px solid;\n    background-color: white;\n    position: fixed;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"computingFactorials == false\" class=\"progress-bar\">\n    <div [style.width.%]=\"progress\" class=\"progress\"></div>\n</div>\n\n<div class=\"header\">\n    <h1>Factorial calculator</h1>\n    <label>Compute the next {{numberOfFactorials}} factorials, starting on:</label>\n    <input [(ngModel)]=\"firstFactorial\" type=\"number\" placeholder=\"Set the start number\">\n    <button (click)=\"computeFactorials()\">Compute factorials</button>\n    <button (click)=\"cleanResults()\" [disabled]=\"computingFactorials == true\">Clean results</button>    \n</div>\n\n\n<div class=\"items\" *ngFor=\"let item of items\">\n    {{item}}\n</div>\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_big_js__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_big_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_big_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactorialService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FactorialService = (function () {
    function FactorialService() {
        // use scientific notation if exponent is greater than or equal to 5
        __WEBPACK_IMPORTED_MODULE_1_big_js___default.a.E_POS = 5;
    }
    FactorialService.prototype.factorialize = function (n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        else {
            var bigNum = new __WEBPACK_IMPORTED_MODULE_1_big_js___default.a(n);
            return bigNum.mul(this.factorialize(n - 1));
        }
    };
    FactorialService.prototype.factorial = function (n) {
        return this.factorialize(n).toPrecision(5);
    };
    return FactorialService;
}());
FactorialService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], FactorialService);

//# sourceMappingURL=factorial.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(80);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_factorial_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(factorialService) {
        this.factorialService = factorialService;
        this.items = [];
        this.progress = 0;
        this.computingFactorials = false;
        this.firstFactorial = 700;
        this.numberOfFactorials = 50;
    }
    AppComponent.prototype.computeFactorials = function () {
        // clear list, reset progress indicator and show progress bar
        this.items = [];
        this.progress = 0;
        this.computingFactorials = true;
        // perform tasks
        for (var i = this.firstFactorial; i < this.firstFactorial + this.numberOfFactorials; i++) {
            setTimeout(this.getFactorialForN(i), 0);
        }
    };
    /* get factorial of a specific number and update interface*/
    AppComponent.prototype.getFactorialForN = function (i) {
        var _this = this;
        return function () {
            var value = _this.factorialService.factorial(i);
            _this.items = _this.items.concat([i + " - " + value]);
            _this.progress += 100.0 / _this.numberOfFactorials;
            console.log('progress: ', _this.progress);
            // end
            if (i === _this.firstFactorial + _this.numberOfFactorials - 1) {
                _this.computingFactorials = false;
            }
        };
    };
    AppComponent.prototype.cleanResults = function () {
        this.items = [];
        this.progress = 0;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(137),
        styles: [__webpack_require__(135)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_factorial_service__["a" /* FactorialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_factorial_service__["a" /* FactorialService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_factorial_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5_app_factorial_service__["a" /* FactorialService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[162]);
//# sourceMappingURL=main.bundle.js.map